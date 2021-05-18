import React, {useEffect, useState} from 'react';
import "./styles/SidebarChat.css"
import {Avatar} from "@material-ui/core";
import {useDispatch} from "react-redux";
import { setChat } from "../features/chatSlice";
import db from "../firebase";
import * as timeago from "timeago.js"
const SidebarChat = ({id, chatName}) => {

    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState([]);

    useEffect(() => {
        db.collection('chats').doc(id).collection("messages").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            /// getting all the needed info, the messages in this case
            setChatInfo(snapshot.docs.map(doc => doc.data()))
        });
    }, [id]);

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
            <Avatar src={chatInfo[0]?.photo} />

            <div className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.message}</p>
                {!chatInfo.timestamp ? (
                <small>{timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString())}</small>
                ) : (
                    <small>No chats</small>
                )}
            </div>
        </div>
    );
};

export default SidebarChat;
