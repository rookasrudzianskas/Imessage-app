import React from 'react';
import './App.css';
import Imessage from "./components/Imessage"
import {useSelector} from "react-redux";
import {selectUser} from "./features/useSlice";

function App() {
    //this pulls the user from redux
    const user = useSelector(selectUser);
  return (
    <div className="app">
        {user ? (
        <Imessage />
        ) : (
            <Login />
        )}
    </div>
  );
}

export default App;
