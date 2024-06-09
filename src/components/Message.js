import React from "react";
import {auth} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import ReactionButton from "./ReactionButton";
import Reactions from "./Reactions";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const Message = ({message}) => {
  const [user] = useAuthState(auth);
  const addReaction = async (messageId, emoji) => {
    const user = auth.currentUser;
    if(!user) return;
    
    const messageRef = doc(db, "messages", messageId);
    await updateDoc(messageRef, {
      [`reactions.${emoji}`]: arrayUnion(user.uid)
    })
  }
  return (
    <div className={`chat-bubble ${message.uid === user.uid? "right" : ""}`}>
      <img className="chat-bubble__left" src={message.avatar} alt="user avatar" />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">
          {message.text}
        </p>
        <Reactions reactions={message.reactions || {}} />
        <div>
          <ReactionButton messageId={message.id} emoji="❤" addReaction={addReaction}></ReactionButton>
          <ReactionButton messageId={message.id} emoji="👍" addReaction={addReaction}></ReactionButton>
          <ReactionButton messageId={message.id} emoji="👎" addReaction={addReaction}></ReactionButton>
        </div>
      </div>
    </div>
  );
};

export default Message;
