import React, { useState } from "react";
import "./ExpenseForm.css";

const ExepnseForm = () => {
  // const [enterTitle, setEnterTitle] = useState("");
  // const [enterAmount, setEnterAmount] = useState("");
  // const [enterDate, setEnterDate] = useState("");

  // 객체형식 선언
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
    console.log(userInput.enteredTitle);
  };

  const AmountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
    console.log(userInput.enteredAmount);
  };

  const DateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
    console.log(userInput.enteredDate);
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
