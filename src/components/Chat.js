import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from '@material-ui/icons/Mic';
import React from "react";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Deepak</span>This is a message
          <span className="chat__timestamp">{Date().toString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Sony</span>This is a message
          <span className="chat__timestamp">{Date().toString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Deepak</span>This is a message
          <span className="chat__timestamp">{Date().toString()}</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form action="">
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
