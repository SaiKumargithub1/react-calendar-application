import React, { useState, useEffect } from "react";
import { mockCompanies } from "../../data/mockCompanies";
import { mockCommunications } from "../../data/mockCommunications";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [communications, setCommunications] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [scheduleDate, setScheduleDate] = useState("");
  const [communicationType, setCommunicationType] = useState("");

  useEffect(() => {
    setCompanies(mockCompanies);
    setCommunications(mockCommunications);
  }, []);

  const scheduleNextCommunication = (companyId) => {
    if (!scheduleDate || !communicationType) {
      alert("Please select both date and communication type.");
      return;
    }

    setCompanies((prevCompanies) =>
      prevCompanies.map((company) =>
        company.id === companyId
          ? {
              ...company,
              nextCommunication: `${communicationType} - ${scheduleDate}`,
            }
          : company
      )
    );

    setSelectedCompany(null);
    setScheduleDate("");
    setCommunicationType("");
  };

  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>

      <div className="companies-section">
        <h3>Company Overview</h3>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Last Communications</th>
              <th>Next Communication</th>
              <th>Schedule</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id}>
                <td>{company.name}</td>
                <td>
                  {company.communications.slice(-3).map((comm, idx) => (
                    <p key={idx}>{`${comm.type} - ${comm.date}`}</p>
                  ))}
                </td>
                <td>{company.nextCommunication || "Not Scheduled"}</td>
                <td>
                  {selectedCompany === company.id ? (
                    <div>
                      <select
                        value={communicationType}
                        onChange={(e) => setCommunicationType(e.target.value)}
                      >
                        <option value="">Select Type</option>
                        <option value="Email">Email</option>
                        <option value="Call">Call</option>
                        <option value="Meeting">Meeting</option>
                      </select>
                      <input
                        type="date"
                        value={scheduleDate}
                        onChange={(e) => setScheduleDate(e.target.value)}
                      />
                      <button
                        onClick={() => scheduleNextCommunication(company.id)}
                      >
                        Confirm
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => setSelectedCompany(company.id)}>
                      Schedule
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="communications-section">
        <h3>Recent Communications</h3>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Date</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {communications.map((comm) => (
              <tr key={comm.id}>
                <td>{comm.type}</td>
                <td>{comm.date}</td>
                <td>{comm.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
