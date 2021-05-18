import React, {useEffect, useState} from 'react';
import "./styles/Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import {RateReviewOutlined} from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import {Tooltip, TextField, Button, IconButton} from "@material-ui/core";
import SidebarChat from "./SidebarChat";
import {useSelector} from "react-redux";
import {selectUser} from "../features/useSlice";
import { auth } from "../firebase";
import db from "../firebase";

const Sidebar = () => {

    const user = useSelector(selectUser);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        // listents to the database
        db.collection('chats').onSnapshot((snapshot) => (
            // we go into the collection chats, take a snapshot and pull that object with data to the array of objects in chat state
            setChats(snapshot.docs.map(doc => ({
                // go per each ones and set to the data to the following keys
                id: doc.id,
                data: doc.data(),
            })))
        ));
    }, []);

    const addChat = () => {
        const chatName = prompt("Please enter a chat name");
        if(chatName) {
        db.collection('chats').add({
            chatName: chatName,
            })
        }
    }

    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar onClick={() => auth.signOut()} src={user.photo} className="sidebar__avatar" />
                <div className="sidebar__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>

                <IconButton className="sidebar__inputButton" variant="outlined">
                    <RateReviewOutlined  onClick={addChat}/>
                </IconButton>

            </div>

            <div className="sidebar__chats">
                {chats.map(({id, data: { chatName }}) => (
                    // for each one displaying the component and passing the props from the state which is array of objects
                    <SidebarChat key={id} id={id} chatName={chatName} />
                ))}

            </div>
        </div>
    );
};

export default Sidebar;
