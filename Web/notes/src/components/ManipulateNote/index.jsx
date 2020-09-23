import React, {useState, useEffect} from 'react'
import Menu from '../Menu/index'

import './index.css'

export default props => {

    const [id, setId] = useState(0)
    const [title, setTitle] = useState(undefined)
    const [content, setContent] = useState(undefined)

    useEffect(()=>{
        if(props.id !== undefined) setId(props.id)
    }, [0])

    /*
        Verify if we need to change or create, and do that on the backend API
    */

    return (
        <React.Fragment>
            <Menu title="Manipulate your Note!" buttonLabel="Go Back" path="/"/>
            <div className="workingArea">
                <div className="createCard">
                    <input type="text" name="title" id="title" placeholder="Title" value={title} onChange={evt => {setTitle(evt.target.value)}}/>
                    <textarea name="content" id="content" placeholder="Content" value={content} onChange={evt => {setContent(evt.target.value)}}></textarea>
                    {id !== 0
                        ? <div className="button">Change the Note!</div>
                        : <div className="button">Create new Note!</div>}
                </div>
            </div>
        </React.Fragment>
    )
}
