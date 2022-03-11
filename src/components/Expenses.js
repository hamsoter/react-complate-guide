import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expensesArr = props.items;

  let expenses = [];

  expensesArr.forEach((item) => {
    expenses.push(
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  return expenses;
}

export default Expenses;
