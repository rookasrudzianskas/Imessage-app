import React from 'react';
import "./styles/Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import {RateReviewOutlined} from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import {Tooltip, TextField, Button, IconButton} from "@material-ui/core";


const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar className="sidebar__avatar" />
                <div className="sidebar__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>

                <IconButton className="sidebar__inputButton" variant="outlined">
                    <RateReviewOutlined />
                </IconButton>

            </div>

            <div className="sidebar__chats">

            </div>
        </div>
    );
};

export default Sidebar;
