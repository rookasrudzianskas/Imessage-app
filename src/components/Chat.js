import React, {useEffect, useState} from 'react';
import "./styles/Chat.css";
import {MicNoneOutlined} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import Message from "./Message";
import {useSelector} from "react-redux";
import {selectChatId, selectChatName} from "../features/chatSlice";
import db from "../firebase";
import firebase from "firebase";
import {selectUser} from "../features/useSlice";

const Chat = () => {
    // to keep the input
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const chatName = useSelector(selectChatName);

    const chatId = useSelector(selectChatId);

    useEffect(() => {
        // run once chat id changes
        if(chatId) {
            // if there is a change in chat id this fires up, and this if goes to true
            // we are going to particulat chat id, and accessing that chat id collection messages
            db.collection('chats').doc(chatId).collection("messages").orderBy("timestamp", "desc").onSnapshot(snapshot => {
                // this sets each message to the messages state, by mapping per each one
                setMessages(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })));
            })

        }
    }, [chatId])

    // console.log(input)
    const sendMessage =(e) => {
        e.preventDefault();
    //      firebase magic in here

        db.collection("chats").doc(chatId).collection("messages").add({
            // sets all the data
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,
        });

        setInput("");
    };

    return (
        <div className="chat">
        {/*    chat header  */}
            <div className="chat__header">
                <h4>To: <span className="chat__name">{chatName}</span></h4>
                <strong>Details</strong>
            </div>
        {/*    chat messages    */}

            <div className="chat__messages">
                {/* goes per all the messages, and displays each one*/}
                {messages.map(({id, data}) => (
                    <Message key={id} contents={data} />
                ))}
            {/*    also passes props and content*/}

            </div>
        {/*    chat input   */}
            <div className="chat__input">
                <form action="">
                    <input placeholder="imessage"  value={input}  onChange={e => setInput(e.target.value)} type="text"/>
                    <button onClick={sendMessage}>Send Message</button>
                </form>

                <IconButton>
                    <MicNoneOutlined  className="chat__mic"/>
                </IconButton>
            </div>
        </div>
    );
};

export default Chat;
