import React from 'react';
import "./styles/Message.css";
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "../features/useSlice";

const Message = ({ id, contents: {timestamp, displayName, email, message, photo, uid } }) => {
    const user = useSelector(selectUser);

    return (
        <div className={`message ${user?.email === email && "message__sender"}`}>
            <Avatar className="message__photo" src={photo}/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    );
};

export default Message;
