import React, {useState} from 'react';
import "./styles/SidebarChat.css"
import {Avatar} from "@material-ui/core";
import {useDispatch} from "react-redux";
import { setChat } from "../features/chatSlice";

const SidebarChat = ({id, chatName}) => {

    const dispatch = useDispatch();

    return (
        <div onClick={() =>
            dispatch(
                setChat({
                // basically we set something to the chat data layer in here
                //    id which comes as  a prop and the chat Name too as a prop
                    chatId: id,
                    chatName: chatName,
                })
            )
        }
             className="sidebarChat">
            <Avatar />

            <div className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>Last message sent...</p>
                <small>timestamp</small>
            </div>
        </div>
    );
};

export default SidebarChat;
