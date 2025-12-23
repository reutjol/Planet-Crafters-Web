import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState, useContext, useEffect } from "react";
import "../../styles/Comments.css";
import React from "react";
import axios from "axios";
import { ProfileContext } from "../common/ProfileContext.jsx";
import { useNavigate } from "react-router-dom";


const API_URL = process.env.REACT_APP_API_URL;

const createComment = async (formData) => {
    const response = await axios.post(API_URL, {
        name: formData.name,
        email: formData.email,
        feedback: formData.comment,
    });

    return response.data;
};

export default function CommentForm() {
    const { user } = useContext(ProfileContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
    });

    useEffect(() => {
        if (user?.name || user?.email) {
            setFormData((prev) => ({
                ...prev,
                name: user.name || "",
                email: user.email || "",
            }));
        }
    }, [user])

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
            navigate("/comments");
        } catch (err) {
            console.error("Error saving comment:", err);
            alert("Something went wrong while saving your comment");
        }
    };


    return (
        <div className="form-container">
            <div className="form-header">
                <button
                    type="button"
                    className="close-btn"
                    onClick={() => navigate("/comments")}
                    aria-label="Close">
                    <IoIosCloseCircleOutline size={24} />
                </button>
            </div>
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
    );
}
