import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
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
      amount: 30000,
      date: new Date(2021, 10, 5),
    },
    {
      id: "e4",
      title: "커미션",
      amount: 50000,
      date: new Date(2022, 0, 1),
    },
  ];

  const addExpenseHandler = (newExpense) => {
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
};

export default App;
