import Card from "../../UI/Card/Card"
import "./Expense.css"

function Expense({date, description, price}) {

  const ListDate = () => 
    <Card className="Expense__date">
      <p>{date.toLocaleDateString('en-US', {month: "long"})}</p>
      <p>{date.toLocaleDateString('en-US', {day: "2-digit"})}</p>
      <p>{date.getFullYear()}</p>
    </Card>

  return (
    <Card className="Expense">
      <ListDate />
      <div className="Expense__description">{description}</div>
      <Card className="Expense__price">${price}</Card>
    </Card>
    
  )
}

export default Expense