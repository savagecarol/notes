import React from "react";
import "./components/css/App.css"
import CreateNote from "./components/noteComponents/CreateNotes";
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDWdCBN5A37o29HZ0-bjeDTUqNTct5BGug",
  authDomain: "notes-d1860.firebaseapp.com",
  projectId: "notes-d1860",
  storageBucket: "notes-d1860.appspot.com",
  messagingSenderId: "141253409179",
  appId: "1:141253409179:web:3b91bbc9937f81a2dec93e",
  measurementId: "G-XT7YGP6H83"
};


const app = initializeApp(firebaseConfig);

function App() {
  const uid  = uuid()
  console.log(uid)
  return (
    <Router className="main">
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