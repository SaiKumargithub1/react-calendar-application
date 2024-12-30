import React from "react";
import "../styles/Reporting.css";

const ActivityLog = ({ activities }) => {
  return (
    <div className="activity-log">
      <h3>Real-Time Activity Log</h3>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.date} - {activity.type}: {activity.notes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
