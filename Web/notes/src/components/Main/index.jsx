import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import './index.css'
import Menu from '../Menu/index'
import Cards from '../Cards/index'

export default () => {

  useEffect(()=>{
    /*
      Get the notes by the backend API and render them dinamically
    */
  }, [0])

  return (
    <div className="Main">
      <Menu title="Notes!" buttonLabel="+ New Note" path="/newNote"/>
      <div className="cardsArea">
        <Link className="link" to={`/changeNote/${1}`}>
          <Cards title="Test">
            <p>Card test. Notes test. [...]</p>
          </Cards>
        </Link>
      </div>
    </div>
  )
}
