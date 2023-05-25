import React from "react";
import "./components/css/App.css"
import CreateNote from "./components/noteComponents/CreateNotes";
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { v4 as uuid } from 'uuid';

function App() {
  const uid  = uuid()
  return (
    <Router >
      <Switch>
        <Route path="/:id">
               <CreateNote />
        </Route>
        <Route path={`/`}>
              <Redirect to= {`/${uid}`} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;