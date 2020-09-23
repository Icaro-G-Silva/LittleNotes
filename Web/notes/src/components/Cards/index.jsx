import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

export default props => {

    const [id, setId] = useState(0)

    useEffect(()=>{
        if(props.id !== undefined) setId(props.id)
    }, [0])

    async function deleteNote() {
        //Do some Explosions but with the backend API
        alert(`The Note -> ${id} has been exploded!`)
    }

    return(
        <div className="notesCard">
            <div className="header">
                <h1>{props.title}</h1>
                <Link className="link" to="#" onClick={deleteNote}>
                    <div className="deleteButton"><i className="fas fa-trash"></i></div>
                </Link>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}
