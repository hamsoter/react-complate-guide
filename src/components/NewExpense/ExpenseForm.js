import React from "react";
import "./ExpenseForm.css";

const ExepnseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>지출명</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>가격</label>
          <input type="number" min="0" step="1" />
        </div>
        <div className="new-expense__control">
          <label>지출일</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">추가</button>
      </div>
    </form>
  );
};

export default ExepnseForm;
