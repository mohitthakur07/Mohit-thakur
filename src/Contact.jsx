// src/ContactForm.js

import React, { useState } from "react";
import "./Contact.css";
import ContactsIcon from "@mui/icons-material/Contacts";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      // Clear form fields after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 500);
  };

  return (
    <>
      <div>
        <h1>
          Contact <ContactsIcon />
        </h1>
      </div>
      <div className="contact-form-container">
        <h3>Send a Message</h3>
        {isSubmitted ? (
          <div className="submission-message">
            <p>Thank you for your message. We will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <Button type="submit" variant="contained">
              Send <SendIcon />
            </Button>
          </form>
        )}
      </div>
    </>
  );
}
