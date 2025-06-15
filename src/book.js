// src/pages/Book.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/book.css';

export default function Book() {
  const location = useLocation();
  const bnb = location.state?.bnb;
  

  if (!bnb) {
    return <div className="book-container">Listing not found.</div>;
  }

  return (
    <div className="book-container">
      <h1 className="book-title">{bnb.name}</h1>
      <div className="book-content">
        <div className="left-section">
          <div className="image-gallery">
            <img src={bnb.image} alt={bnb.name} className="main-image" />
            <img src={bnb.image} alt="1" />
            <img src={bnb.image} alt="2" />
            <img src={bnb.image} alt="3" />
          </div>
          <div className="details-section">
            <p><strong>Location:</strong> Goa, India</p>
            <p><strong>Room Type:</strong> Entire Villa</p>
            <p><strong>Certifications:</strong></p>
            <ul>
              <li>Cleanliness Certified</li>
              <li>Verified Host</li>
              <li>24x7 Customer Support</li>
            </ul>
          </div>
        </div>
        <div className="right-section">
          <h3>Book Your Stay</h3>
          <label>Check-in</label>
          <input type="date" />
          <label>Check-out</label>
          <input type="date" />
          <label>Guests</label>
          <input type="number" min="1" max="10" defaultValue="1" />
          <p><strong>Price:</strong> {bnb.price}</p>
          <button>Reserve</button>
        </div>
        
      </div>
    </div>
  );
}
