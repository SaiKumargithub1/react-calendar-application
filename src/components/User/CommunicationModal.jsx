import React from "react";
import "../styles/CommunicationModal.css";

const CommunicationModal = ({ isOpen, communication, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Communication Details</h3>
        <p>
          <strong>Type:</strong> {communication.type}
        </p>
        <p>
          <strong>Date:</strong> {communication.date}
        </p>
        <p>
          <strong>Notes:</strong> {communication.notes}
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CommunicationModal;
