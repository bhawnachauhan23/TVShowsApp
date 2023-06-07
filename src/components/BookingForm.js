import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookingForm = ({ show, onCloseForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem(`booking-${show.id}`, JSON.stringify(formData));
    alert("Ticket Booked");
    onCloseForm();
  };

  return (
    <div className="BookingForm">
      <h2>Book Ticket</h2>
      <h1>{show.name}</h1>
      <h4>Language: {show.language}</h4>
      <h4>Ratings: {show.rating.average ? show.rating.average : "N/A"}</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Book Now</button>
        <Link to="/">Back to Show List</Link>
      </form>
    </div>
  );
};

export default BookingForm;
