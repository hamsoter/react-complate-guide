import React from "react";
import Chart from "../Chart/Chart";

// 차트를 반환하는 컴포넌트, props= 필터된 연도
const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // 필터된 연도의 데이터 가져오기
  for (const expense of props.expenses) {
    const exepenseMonth = expense.date.getMonth(); // 1월 => 0

    // 각 달의 모든 비용 합산
    chartDataPoints[exepenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
