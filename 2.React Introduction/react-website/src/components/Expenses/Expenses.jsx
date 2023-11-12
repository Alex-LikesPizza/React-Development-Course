import './Expenses.css';
import Expense from './Expense'
import Card from '../../UI/Card/Card';

function Expenses({items}) {
  const Expenses = items.map(item => 
    <Expense key={item.id} date={item.date} description={item.description} price={item.price} />
    );
  return (
    <Card className="Expenses">
      {Expenses}
    </Card>
  )
}

export default Expenses;