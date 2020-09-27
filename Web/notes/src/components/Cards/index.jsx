import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

import API from '../../configs/API'

export default props => {

    const [id, setId] = useState('')

    useEffect(()=>{
        if(props.id !== undefined) setId(props.id)
    }, [0])

    async function deleteNote() {
        await API.delete(`deleteNote/${id}`)
        alert('Note successfully deleted!')
        props.callbackParent()
    }

    return(
        <div className="notesCard">
            <div className="header">
                <h1>{props.title}</h1>
                <Link className="link" to="#" onClick={deleteNote}>
                    <div className="deleteButton"><img src="../assets/trashcan.png" alt="TrashCan"/></div>
                </Link>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}
