import React, { useState, useRef } from "react";
import "../App.css";
import { firestore, timestamp, auth } from "../firebaseConfig.js";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";

const ChatRoom = () => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: timestamp,
      uid,
      photoURL,
    });
    setFormValue("");

    dummy.current.scrollIntoView({behaviour : 'smooth'})
  };

  const dummy = useRef();

  return (
    <>
      <main>
        <span>This is the start of the chat</span>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </main>
      <form onSubmit={sendMessage}>
        <input
        placeholder='Type a message'
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">🚀</button>
      </form>
    </>
  );
};

export default ChatRoom;
