import React, {forwardRef} from 'react';
import "./styles/Message.css";
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "../features/useSlice";
import * as timeago from "timeago.js"

const Message = forwardRef(({ id, contents: {timestamp, displayName, email, message, photo, uid } }, ref) => {
    const user = useSelector(selectUser);

    return (
        <div ref={ref} className={`message ${user?.email === email && "message__sender"}`}>
            <Avatar className="message__photo" src={photo}/>
            <p>{message}</p>
            <small>{timeago.format(new Date(timestamp?.toDate()).toLocaleString())}</small>
        </div>
    );
});


export default Message;
