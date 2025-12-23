import React from "react";
import { useNavigate } from "react-router-dom";
import UsersComments from "../components/comments/UsersComments";
import SectionTitle from "../components/common/SectionTitle";

export default function CommentsScreen() {
  const navigate = useNavigate();

  return (
      <div className="comments-container">
        <SectionTitle>Comments</SectionTitle>
        <UsersComments />
        <button className="button-add" onClick={() => navigate("/comments/new")}>
          + Add Comment
        </button>
      </div>
  );
}
