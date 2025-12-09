import { useState } from "react";
import "../../styles/CommentForm.css";
import React from "react";
import axios from "axios";
import SectionTitle from "components/common/SectionTitle";
const API_URL = process.env.REACT_APP_API_URL;

const createComment = async (formData) => {
  const response = await axios.post(API_URL, {
    name: formData.name,
    email: formData.email,
    feedback: formData.comment,
  });

  return response.data;
};

export default function CommentForm({ onSuccess, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    
    if (Object.values(formData).some(value => value.trim() === "")) {
      alert("Fill all fields");
      return;
    }
    
    try {
      const res = await createComment(formData);
      console.log("Saved to DB:", res);

      setFormData({ name: "", email: "", comment: "" });

      if (onSuccess) {
        onSuccess(res);
      }
    } catch (err) {
      console.error("Error saving comment:", err);
      alert("Something went wrong while saving your comment");
    }
  };

  return (
    <div>
      <SectionTitle>Add a Comment</SectionTitle>
      <div className="form-container">
        {onClose && (
          <button className="delete" onClick={onClose}></button>
        )}

        <form onSubmit={handleSubmit} className="form-content">
          <label className="form-field">
            Full Name
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              minLength={3}
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className="form-field">
            Email
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="form-field">
            Comment
            <textarea
              name="comment"
              placeholder="Write your comment..."
              value={formData.comment}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
