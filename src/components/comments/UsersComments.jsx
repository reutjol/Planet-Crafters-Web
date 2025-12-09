import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/UsersComments.css";
import SectionTitle from "../common/SectionTitle";
const API_URL = process.env.REACT_APP_API_URL;

const fetchData = async () => {
  const response = await axios.get(API_URL);
  return response.data.items;
};
export default function UsersComments({ refreshTrigger }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await fetchData();
        setComments(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load comments. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [refreshTrigger]);

  if (loading) {
    return (
      <div className="comments-page">
        <div className="comments-box">
          <p className="status-msg">Loading comments...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="comments-page">
        <div className="comments-box">
          <p className="status-msg error">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="comments-page">
      <SectionTitle>Comments</SectionTitle>
      <div className="comments-box">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-row">
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-author">{comment.name}</span>
                <span className="comment-time">
                  {new Date(comment.createdAt).toLocaleString("he-IL", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </span>
              </div>
              <p className="comment-text">
                {comment.feedback}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
