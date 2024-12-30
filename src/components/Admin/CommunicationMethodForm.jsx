import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/CommunicationMethodForm.css";

const CommunicationMethodForm = ({ methods = [], onAddMethod }) => {
  const [method, setMethod] = useState({
    name: "",
    description: "",
    sequence: 1,
    isMandatory: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMethod({
      ...method,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMethod(method);
    setMethod({
      name: "",
      description: "",
      sequence: 1,
      isMandatory: false,
    });
  };

  return (
    <div className="communication-method-container">
      <form onSubmit={handleSubmit} className="communication-method-form">
        <h3>Add Communication Method</h3>
        <input
          type="text"
          name="name"
          placeholder="Communication Method Name"
          value={method.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={method.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="sequence"
          placeholder="Sequence"
          value={method.sequence}
          onChange={handleChange}
          required
        />
        <label>
          Mandatory:
          <input
            type="checkbox"
            name="isMandatory"
            checked={method.isMandatory}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Method</button>
      </form>
      <div className="existing-methods">
        <h4>Existing Methods</h4>
        {methods.length > 0 ? (
          <ul>
            {methods.map((method, index) => (
              <li key={index}>
                {method.name} - {method.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No methods available.</p>
        )}
      </div>
    </div>
  );
};

CommunicationMethodForm.propTypes = {
  methods: PropTypes.array,
  onAddMethod: PropTypes.func.isRequired,
};

export default CommunicationMethodForm;
