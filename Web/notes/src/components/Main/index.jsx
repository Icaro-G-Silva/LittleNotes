import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import './index.css'
import Menu from '../Menu/index'
import Cards from '../Cards/index'
import API from '../../configs/API'

export default () => {

  const [data, setData] = useState([])
  const [reloadData, setReloadData] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      async function fetchData() {
        const response = await API.get('notes')
        setData(response.data)
      }
      fetchData()
    }, 350)
  }, [reloadData])

  function callbackChildren() {
    setReloadData((reloadData) ? false : true)
  }

  return (
    <div className="Main">
      <Menu title="Notes!" buttonLabel="+ New Note" path="/newNote"/>
      <div className="cardsArea">
        {data.map(note => (
          <Link key={note.notes_Id} className="link" to={`/changeNote/${note.notes_Id}`}>
            <Cards title={(note.notes_Title.length >= 15) ? `${note.notes_Title.substring(0, 16)}...` : note.notes_Title} id={note.notes_Id} callbackParent={callbackChildren}>
              <p>{(note.notes_Content.length >= 35) ? `${note.notes_Content.substring(0, 36)}...` : note.notes_Content}</p>
            </Cards>
          </Link>
        ))}
      </div>
    </div>
  )
}
