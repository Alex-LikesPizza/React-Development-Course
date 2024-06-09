import React from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";

import {query, collection, orderBy, onSnapshot, limit} from "firebase/firestore"
import { db } from "../firebase";

const ChatBox = () => {
  const [ messages, setMessages ] = React.useState([]);

  React.useEffect(() => {
    const q = query(
    collection(db, "messages"),
    orderBy("createdAt", "desc"),
    limit(50),
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages = [];
      querySnapshot.forEach(doc => {
        fetchedMessages.push({...doc.data(), id: doc.id});
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
      {messages?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      </div>
      <SendMessage />
    </main>
  );
};

export default ChatBox;
