import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "푸키몬빵",
      amount: 1500,
      date: new Date(2022, 2, 11),
    },
    {
      id: "e2",
      title: "안쥬쨩피규어",
      amount: 250000,
      date: new Date(2021, 8, 2),
    },
    {
      id: "e3",
      title: "데레 10연",
      amount: 50000,
      date: new Date(2021, 10, 5),
    },
    {
      id: "e4",
      title: "커미션",
      amount: 50000,
      date: new Date(2022, 0, 1),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[0].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
