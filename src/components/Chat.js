import React, {useState} from 'react';
import "./styles/Chat.css";

const Chat = () => {
    // to keep the input
    const [input, setInput] = useState('');
    // console.log(input)
    const sendMessage =(e) => {
        e.preventDefault();
    //      firebase magic in here

        setInput("");
    };

    return (
        <div className="chat">
        {/*    chat header  */}
            <div className="chat__header">
                <h4>To: <span className="chat__name">Channel Name</span></h4>
                <strong>Details</strong>
            </div>
        {/*    chat messages    */}
        {/*    chat input   */}
            <div className="chat__input">
                <form action="">
                    <input placeholder="imessage"  value={input}  onChange={e => setInput(e.target.value)} type="text"/>
                    <button onClick={sendMessage}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
