import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>2022.03.11</div>
      <div className="expense-item__description">
        <h2>포켓몬빵</h2>
        <div className="expense-item__price">1,500￦</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
