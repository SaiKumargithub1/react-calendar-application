import React from "react";
import "../styles/Reporting.css";

const FrequencyReport = ({ data }) => {
  return (
    <div className="frequency-report">
      <h3>Communication Frequency Report</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name}: {item.periodicity} days
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrequencyReport;
