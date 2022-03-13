import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
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

  const selectYearHandler = (year) => {
    console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectYear={selectYearHandler} />
        {expenses}
      </Card>
    </div>
  );
};

export default Expenses;
