import React, { useState } from "react";
import "../styles/CompanyForm.css";

const CompanyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    linkedIn: "",
    emails: "",
    phoneNumbers: "",
    comments: "",
    periodicity: 14,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      location: "",
      linkedIn: "",
      emails: "",
      phoneNumbers: "",
      comments: "",
      periodicity: 14,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="company-form">
      <input
        type="text"
        name="name"
        placeholder="Company Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="linkedIn"
        placeholder="LinkedIn Profile"
        value={formData.linkedIn}
        onChange={handleChange}
      />
      <input
        type="email"
        name="emails"
        placeholder="Email"
        value={formData.emails}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phoneNumbers"
        placeholder="Phone Numbers (comma-separated)"
        value={formData.phoneNumbers}
        onChange={handleChange}
      />
      <textarea
        name="comments"
        placeholder="Comments"
        value={formData.comments}
        onChange={handleChange}
      />
      <input
        type="number"
        name="periodicity"
        placeholder="Periodicity (days)"
        value={formData.periodicity}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Company</button>
    </form>
  );
};

export default CompanyForm;
