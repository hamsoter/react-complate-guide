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

  return (
    <div className="new-expense">
      {!formFlag && <button onClick={formFlagHandler}>새 지출 추가</button>}
      {formFlag && (
        <ExpenseForm
          onCancle={formFlagHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
