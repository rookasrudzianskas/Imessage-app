import React from 'react';
import "./styles/SidebarChat.css"
import {Avatar} from "@material-ui/core";

const SidebarChat = ({id, chatName}) => {
    return (
        <div className="sidebarChat">
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
