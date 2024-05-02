import React from 'react'

const FeedbackList = (props) => {

  if(props.feedbackList.length === 0){
    return <h2>No Feedback</h2>
  }
  return (
    <div>
      <h2>FeedbackList</h2>
      <ul>
        {
          props.feedbackList.map(feedback => <li key={feedback.id}>{feedback.text}</li>)
        }
      </ul>
    </div>
  )
}

export default FeedbackList