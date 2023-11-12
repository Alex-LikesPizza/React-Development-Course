import './Form.css'
import { useState } from 'react';


function Form({addExpense}) {

  const [ date, setDate ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ price, setPrice ] = useState(0);
    
  function handleSubmit(e){
    e.preventDefault();

    let valid = true;
    if(date === ''){ 
      document.getElementById('Form__date').style.border = '1px solid red';
      valid = false;
    }
    else document.getElementById('Form__date').style.border = 'none';
    if(description === '') {
      document.getElementById('Form__description').style.border = '1px solid red';
      valid = false;
    }
    else document.getElementById('Form__description').style.border = 'none';
    if(price === 0) {
      document.getElementById('Form__price').style.border = '1px solid red';
      valid = false;
    }
    else document.getElementById('Form__price').style.border = 'none';
    if(!valid) return;
    console.log(date, description, price)
    addExpense(new Date(date.replace('-', ', ')), description, price);

    e.target.reset();
    setDate('');
    setDescription('');
    setPrice(0);
  }
  
  return (
      <form onSubmit={handleSubmit}>
        <div className='Form__fields'>
          <h2 className='Form__title'>Input Expense:</h2>
          <div className="Form__field">
            <label>Date:</label>
            <input id='Form__date' onChange={(e) => setDate(e.target.value)} type="date" />
          </div>
          <div className="Form__field">
            <label>Description:</label>
            <input id='Form__description' onChange={(e) => setDescription(e.target.value)} type="text" />
          </div>
          <div className="Form__field">
            <label>Price:</label>
            <input id='Form__price' onChange={(e) => setPrice(e.target.value)} type="number" />
          </div>
          <input type="submit" />
        </div>
      </form>
  );
}

export default Form