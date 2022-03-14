import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  // 바가 어디까지 채워지는지 정수 퍼센트로 계산
  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
