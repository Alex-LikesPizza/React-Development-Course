import React from 'react'

const Reactions = ({reactions}) => {
  return (
    <div>
      {Object.keys(reactions).map(emoji => (
        <span key={emoji}>
          {emoji} {reactions[emoji].length}
        </span>
      ))}
    </div>
  )
}

export default Reactions