import React from 'react'

const ReactionButton = ({messageId, emoji, addReaction}) => {
  return (
    <button onClick={() => addReaction(messageId, emoji)}>
      {emoji}
    </button>
  );
}

export default ReactionButton;