import React from "react";
import "../styles/Reporting.css";

const OverdueTrends = ({ data }) => {
  return (
    <div className="overdue-trends">
      <h3>Overdue Communication Trends</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} - Overdue by {item.days} days
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverdueTrends;
