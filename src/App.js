import React, {useEffect} from 'react';
import './App.css';
import Imessage from "./components/Imessage"
import Login from "./components/Login"
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./firebase";
import { selectUser, login, logout} from "./features/useSlice";

function App() {
    // making the gun to shoot the info to the data layer
    const dispatch = useDispatch();

    useEffect(() => {
    //    fire om then the user auth changed
        auth.onAuthStateChanged(authUser => {
            if(authUser) {
                // user is logged in
                dispatch(login({
                    // setting from what comes from the google
                    uid: authUser.uid,
                    photo: authUser.photoURL,
                    email: authUser.email,
                    displayName: authUser.displayName,
                }))
            } else {
                // user is logged out
                // we are dispatching an action, to make the user null in the data layer
                dispatch(logout())
            }
        })

    }, []);
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
