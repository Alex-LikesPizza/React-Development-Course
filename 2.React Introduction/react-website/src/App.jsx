import './App.css'
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';

const items = [
  {
    id: 0,
    date: new Date(2023, 9, 20),
    description: "Wooden Desk",
    price: 100   
  },
  {
    id: 1,
    date: new Date(2023, 8, 11),
    description: "New PC",
    price: 1350  
  },
  {
    id: 2,
    date: new Date(2022, 11, 2),
    description: "Electric Pencil Sharpener",
    price: 60   
  }
];

function App() {
  const [itemList, setItemList] = useState(items);


  function addExpense(date, description, price){
    const newItem = {
      id: itemList.length,
      date,
      description,
      price
    }

    setItemList([newItem ,...itemList]);
  }

  
  return (
    <div className='container'>
      <Header />
      <Form addExpense={addExpense} />
      <Expenses items={itemList} />
    </div>
  )
}

export default App
