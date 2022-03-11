import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

function Expenses(props) {
  const expensesArr = props.items;

  let expenses = expensesArr.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  return <Card className="expenses">{expenses}</Card>;
}

export default Expenses;
