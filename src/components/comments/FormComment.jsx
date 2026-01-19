import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import "../../styles/Comments.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useApi } from "../../hooks/useApi";


const API_URL = process.env.REACT_APP_API_URL;

export default function CommentForm() {
    const { loading, error, request } = useApi();
    const user = useSelector((state) => state.user.user);
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

        if (Object.values(formData).some(value => value.trim() === "")) {
            alert("Fill all fields");
            return;
        }

        try {
            await request({
                method: "POST",
                url: API_URL,
                data: {
                    name: formData.name,
                    email: formData.email,
                    feedback: formData.comment,
                },
            });

            setFormData({ name: "", email: "", comment: "" });
            navigate("/comments");
        } catch (err) {
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

                <button type="submit" className="form-submit-btn" disabled={loading}>
                    {loading ? "Sending..." : "Submit"}
                </button>

                {error && <p className="status-msg error">{error}</p>}

            </form>
        </div>
    );
}
