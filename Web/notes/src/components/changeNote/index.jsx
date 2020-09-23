import React from 'react'
import {useParams} from 'react-router-dom'

import ManipulateNote from '../ManipulateNote/index'

export default () => {
    const {id} = useParams()
    return (
        <React.Fragment>
            <ManipulateNote id={id} />
        </React.Fragment>
    )
}