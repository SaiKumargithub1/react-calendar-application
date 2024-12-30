import React from "react";
import "../styles/NotificationPanel.css";
import { mockCompanies } from "../../data/mockCompanies";
import { mockCommunications } from "../../data/mockCommunications";

const NotificationPanel = () => {
  const today = new Date().toISOString().split("T")[0];

  const overdueCommunications = mockCommunications.filter(
    (comm) => new Date(comm.date) < new Date(today)
  );

  const todaysCommunications = mockCommunications.filter(
    (comm) => new Date(comm.date).toISOString().split("T")[0] === today
  );

  const mapCommunicationsToCompanies = (communications) => {
    return communications.map((comm) => {
      const company = mockCompanies.find((comp) =>
        comp.communications.some(
          (c) => c.date === comm.date && c.type === comm.type
        )
      );
      return {
        ...comm,
        companyName: company ? company.name : "Company",
      };
    });
  };

  const overdueWithCompanies = mapCommunicationsToCompanies(
    overdueCommunications
  );
  const todayWithCompanies = mapCommunicationsToCompanies(todaysCommunications);

  return (
    <div className="notification-panel">
      <h3 className="notification-title">Overdue Communications</h3>
      {overdueWithCompanies.length > 0 ? (
        <ul className="notification-list">
          {overdueWithCompanies.map((comm) => (
            <li className="notification-item" key={comm.id}>
              {comm.type} with {comm.companyName} on {comm.date}: {comm.notes}
            </li>
          ))}
        </ul>
      ) : (
        <p className="notification-empty">No overdue communications.</p>
      )}

      <h3 className="notification-title">Today's Communications</h3>
      {todayWithCompanies.length > 0 ? (
        <ul className="notification-list">
          {todayWithCompanies.map((comm) => (
            <li className="notification-item" key={comm.id}>
              {comm.type} with {comm.companyName} on {comm.date}: {comm.notes}
            </li>
          ))}
        </ul>
      ) : (
        <p className="notification-empty">No communications for today.</p>
      )}
    </div>
  );
};

export default NotificationPanel;
