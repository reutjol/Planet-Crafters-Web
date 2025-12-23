import React from "react";
import SectionTitle from "components/common/SectionTitle";
import CommentForm from "components/comments/FormComment.jsx";

export default function CommentFormScreen() {

  return (
    <div className="form-page">
      <SectionTitle>Add a Comment</SectionTitle>
      <CommentForm />
    </div>
  );
}
