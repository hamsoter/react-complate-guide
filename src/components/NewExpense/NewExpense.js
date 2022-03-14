import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  const [formFlag, setFormFlag] = useState(false);

  const formFlagHandler = () => {
    formFlag === true ? setFormFlag(false) : setFormFlag(true);
  };

  let header = <button onClick={formFlagHandler}>새 지출 추가</button>;

  if (formFlag) {
    header = (
      <ExpenseForm
        closeForm={formFlagHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return <div className="new-expense">{header}</div>;
};

export default NewExpense;
