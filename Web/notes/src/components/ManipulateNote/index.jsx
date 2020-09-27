import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import Menu from '../Menu/index'

import './index.css'

import API from '../../configs/API'

export default props => {

    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const history = useHistory()

    useEffect(()=>{
        async function fetchData() {
            await API.get(`note/${id}`).then(res => {
                setTitle(res.data[0].notes_Title)
                setContent(res.data[0].notes_Content)
            })
        }
        if(id !== undefined) fetchData()
    }, [0])

    async function changeNote() {
        await API.put(`changeNote/${id}`, {title, content}).then(()=>{
            alert('Note successfully updated!')
            history.push('/')
        }).catch(err => alert(`Something wrong happened, try it again. -> ${err}`))
    }

    async function createNote() {
        await API.post('newNote', {title, content}).then(()=> {
            alert('Note successfully created!')
            history.push('/')
        }).catch(err => alert(`Something wrong happened, try it again. -> ${err}`))
    }

    return (
        <React.Fragment>
            <Menu title="Manipulate your Note!" buttonLabel="Go Back" path="/"/>
            <div className="workingArea">
                <div className="createCard">
                    <input type="text" name="title" id="title" placeholder="Title" value={title} onChange={evt => {setTitle(evt.target.value)}}/>
                    <textarea name="content" id="content" placeholder="Content" value={content} onChange={evt => {setContent(evt.target.value)}}></textarea>
                    {id !== undefined
                        ? <div className="button" onClick={changeNote}>Change the Note!</div>
                        : <div className="button" onClick={createNote}>Create new Note!</div>}
                </div>
            </div>
        </React.Fragment>
    )
}
