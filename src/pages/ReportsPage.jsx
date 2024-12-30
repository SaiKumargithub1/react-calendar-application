import React from "react";
import jsPDF from "jspdf";
import FrequencyReport from "../components/Reporting/FrequencyReport";
import EngagementDashboard from "../components/Reporting/EngagementDashboard";
import OverdueTrends from "../components/Reporting/OverdueTrends";
import ActivityLog from "../components/Reporting/ActivityLog";
import { mockCommunications } from "../data/mockCommunications";
import { mockCompanies } from "../data/mockCompanies";
import "../components/styles/Reporting.css";

const generatePDF = (data, filename) => {
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("Frequency Report", 10, 10);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  data.forEach((item, index) => {
    doc.text(`${index + 1}. Name: ${item.name}`, 10, 20 + index * 10);
    doc.text(`   Periodicity: ${item.periodicity}`, 10, 25 + index * 10);
  });

  doc.save(filename);
};

const ReportsPage = () => {
  const frequencyData = mockCompanies.map((company) => ({
    name: company.name,
    periodicity: company.periodicity,
  }));

  const engagementData = mockCompanies.map((company) => ({
    name: company.name,
    engagementLevel: company.comments.includes("High") ? "High" : "Moderate",
  }));

  const overdueData = mockCompanies.map((company) => ({
    name: company.name,
    days: Math.max(
      0,
      new Date().getDate() - new Date(company.communications[0]?.date).getDate()
    ),
  }));

  return (
    <div className="reports-page">
      <h1>Reports Page</h1>

      <button
        className="download-button"
        onClick={() => generatePDF(frequencyData, "frequency-report.pdf")}
      >
        Download Frequency Report (PDF)
      </button>

      <FrequencyReport data={frequencyData} />
      <EngagementDashboard data={engagementData} />
      <OverdueTrends data={overdueData} />
      <ActivityLog activities={mockCommunications} />
    </div>
  );
};

export default ReportsPage;
