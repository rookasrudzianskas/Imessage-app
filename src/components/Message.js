import React from 'react';
import "./styles/Message.css";
import {Avatar} from "@material-ui/core";

const Message = ({ id, contents: {timestamp, displayName, email, message, photo, uid } }) => {
    return (
        <div className="message">
            <Avatar src={photo}/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    );
};

export default Message;
