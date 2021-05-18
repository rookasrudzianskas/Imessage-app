import React from 'react';
import "./styles/imessage.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const Imessage = () => {
    return (
        <div className="imessage">
            <Sidebar />
            <Chat />
        </div>
    );
};

export default Imessage;
