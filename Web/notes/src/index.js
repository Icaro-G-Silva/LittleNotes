import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'

import './index.css'
import Main from './components/Main/index'
import NewNote from './components/ManipulateNote/index'
import ChangeNote from './components/changeNote/index'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Main} />
        <Route path="/newNote" component={NewNote} />
        <Route path="/changeNote/:id" component={ChangeNote} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
