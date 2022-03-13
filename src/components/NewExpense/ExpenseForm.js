import React, { useState } from "react";
import "./ExpenseForm.css";

const ExepnseForm = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnterTitle(e.target.value);
    console.log(enterTitle);
  };

  const AmountChangeHandler = (e) => {
    setEnterAmount(e.target.value);
    console.log(enterAmount);
  };

  const DateChangeHandler = (e) => {
    setEnterDate(e.target.value);
    console.log(enterDate);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>지출명</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>가격</label>
          <input
            type="number"
            min="0"
            step="1"
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>지출일</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">추가</button>
      </div>
    </form>
  );
};

export default ExepnseForm;
