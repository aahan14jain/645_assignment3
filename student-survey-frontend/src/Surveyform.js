import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // for styling (make sure App.css exists)

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    street_address: "",
    city: "",
    state: "",
    zip: "",
    telephone: "",
    email: "",
    date_of_survey: "",
    liked_most: "",
    interest_source: "",
    likelihood: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/surveys", formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting survey. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="form-container">
        <h2>🎉 Thank you for completing the Student Survey!</h2>
        <p>Your response has been recorded successfully.</p>
        <button onClick={() => setSubmitted(false)}>Submit Another</button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Student Survey Form</h2>
      <form onSubmit={handleSubmit}>
        <label>First name:</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />

        <label>Last name:</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />

        <label>Street address:</label>
        <input
          type="text"
          name="street_address"
          value={formData.street_address}
          onChange={handleChange}
          required
        />

        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label>State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />

        <label>Zip:</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          required
        />

        <label>Telephone:</label>
        <input
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Date of survey:</label>
        <input
          type="date"
          name="date_of_survey"
          value={formData.date_of_survey}
          onChange={handleChange}
          required
        />

        <label>Liked most:</label>
        <input
          type="text"
          name="liked_most"
          value={formData.liked_most}
          onChange={handleChange}
        />

        <label>Interest source:</label>
        <input
          type="text"
          name="interest_source"
          value={formData.interest_source}
          onChange={handleChange}
        />

        <label>Likelihood:</label>
        <input
          type="text"
          name="likelihood"
          value={formData.likelihood}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SurveyForm;
