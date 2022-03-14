import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // 지출이 없을 때 렌더
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">지출 내역이 없어요</h2>;
  }

  // 지출이 있을 때
  return (
    <ul className="expenses-list">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
