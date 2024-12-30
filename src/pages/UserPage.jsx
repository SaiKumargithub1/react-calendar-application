import React, { useState } from "react";
import Dashboard from "../components/User/Dashboard";
import NotificationPanel from "../components/User/NotificationPanel";
import CalendarView from "../components/User/CalendarView";
import CommunicationModal from "../components/User/CommunicationModal";

const UserPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateSelect = (date) => {
    console.log("Selected date:", date);

    setModalData({
      type: "Email",
      date: date.toDateString(),
      notes: "Mock details.",
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <div className="user-page">
      <Dashboard />
      <NotificationPanel
        notifications={["New meeting scheduled!", "Follow-up needed."]}
      />
      <CalendarView onDateSelect={handleDateSelect} />
      <CommunicationModal
        isOpen={isModalOpen}
        communication={modalData}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default UserPage;
