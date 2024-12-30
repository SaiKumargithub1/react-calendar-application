import React, { useState } from "react";
import CompanyForm from "./CompanyForm";
import CommunicationMethodForm from "./CommunicationMethodForm";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [methods, setMethods] = useState([]);

  const handleAddCompany = (company) => {
    console.log("New Company Added:", company);
  };

  const handleAddMethod = (method) => {
    setMethods((prevMethods) => [...prevMethods, method]);
    console.log("New Communication Method Added:", method);
  };

  return (
    <div className="admin-dashboard">
      <h3>Admin Dashboard</h3>
      <h3>Company Management</h3>
      <CompanyForm onSubmit={handleAddCompany} />
      <h3>Communication Methods</h3>
      <CommunicationMethodForm
        methods={methods}
        onAddMethod={handleAddMethod}
      />
    </div>
  );
};

export default AdminDashboard;
