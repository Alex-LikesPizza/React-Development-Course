import { useState } from 'react';
import './App.css';

import FeedbackList from './components/FeedbackList';
import FormTest from './components/form';

function App() {
  const [ feedbacks, setFeedbacks ] = useState([]);
  console.log(feedbacks);


  return (
    <div>
      <FormTest setFeedbacks={setFeedbacks} />
      <FeedbackList feedbackList={feedbacks} />
    </div>
    // <div data-testid="container">
    //   <h1>Test Website</h1>
    //   <input type="text" placeholder="name"/>
    //   <button>Click Here!</button>
    //   <ul>
    //     <li>Name: </li>
    //     <li>Phone: </li>
    //   </ul>
    // </div>
  );
}

export default App;
