import React from "react";
import "../styles/Reporting.css";

const EngagementDashboard = ({ data }) => {
  return (
    <div className="engagement-dashboard">
      <h3>Engagement Effectiveness Dashboard</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} - Engagement Level: {item.engagementLevel || "Unknown"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EngagementDashboard;
