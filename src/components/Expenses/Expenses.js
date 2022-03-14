import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let expensesContent = <p>지출내역이 없어요</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => {
      return (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={yearChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
