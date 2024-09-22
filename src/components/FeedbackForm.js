import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateForm = () => {
    if (!name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!message.trim()) {
      toast.error('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/feedback`, {
        name,
        email,
        message
      });
      toast.success('Feedback submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast.error('Failed to submit feedback. Please try again.');
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Please enter your name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Please enter your email address"
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Please share your thoughts"
          required
        />
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
