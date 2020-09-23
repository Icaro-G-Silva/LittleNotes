import React from 'react'
import {Link} from 'react-router-dom'

import './index.css'

export default props => {
    return(
        <div className="menu">
            <h1>{props.title}</h1>
            <Link className="link" to={props.path}><div className="button">{props.buttonLabel}</div></Link>
        </div>
    )
}
