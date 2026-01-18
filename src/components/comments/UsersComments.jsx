import React from "react";
import "../../styles/Comments.css";
import { useFetch } from "../hooks/useFetch.js";

const API_URL = process.env.REACT_APP_API_URL;

export default function UsersComments() {
  const { data, loading, error, refetch } = useFetch(API_URL);

  const comments = data?.items ?? [];

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
          <button className="form-submit-btn" onClick={refetch}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
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
            <p className="comment-text">{comment.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
