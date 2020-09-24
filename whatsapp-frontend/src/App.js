import React, { useEffect } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import Pusher from "pusher-js";

function App() {
  useEffect(() => {
    const pusher = new Pusher("0023aaa186da25c2db05", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
    });
  }, []);
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
