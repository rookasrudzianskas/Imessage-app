import React from 'react';
import "./styles/Message.css";
import {Avatar} from "@material-ui/core";

const Message = ({ id, contents }) => {
    return (
        <div className="message">
            <Avatar />
            <p>This is a message</p>
            <small>timestamp</small>
        </div>
    );
};

export default Message;
