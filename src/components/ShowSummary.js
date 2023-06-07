import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookingForm from "./BookingForm";

const ShowSummary = () => {
  const [show, setShow] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleBookTicket = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  if (!show) {
    return <div>Loading...</div>;
  }
  const summary = show.summary.replace(/<\/?p>|<\/?b>/g, "");
  return (
    <div className="ShowSummary">
      <h2>{show.name}</h2>
      <img src={show.image?.medium} alt={show.name} />
      <p>{summary}</p>
      <button onClick={handleBookTicket}>Book Ticket</button>
      <Link to="/">Back to Show List</Link>

      {showForm && (
        <div className="booking-form-overlay">
          <div className="booking-form-container">
            <BookingForm show={show} onCloseForm={handleCloseForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowSummary;
