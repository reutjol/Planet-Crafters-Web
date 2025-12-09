import Header from "./home-info/Header";
import GameTitle from "./home-info/GameTitle";
import About from "./home-info/About";
import Comments from "./comments/UsersComments";
import Form from "./form/CommentForm";

import "../styles/HomeScreen.css";
import { useEffect, useRef, useState } from "react";
import React from "react";

export default function HomeScreen() {
  const [showForm, setShowForm] = useState(false);
  const sections = [useRef(null), useRef(null), useRef(null)];
  const [refreshComments, setRefreshComments] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    sections[1].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollToTitle = () => {
    sections[0].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollToComments = () => {
    sections[2].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleFormSuccess = (res) => {
    console.log("Form submitted successfully:", res);
    setShowForm(false);
    scrollToComments();
    setRefreshComments(prev => !prev);
  };

  return (
    <div className="Home">
      <Header
        onAboutClick={scrollToAbout}
        onCommentsClick={scrollToComments}
        onLogoClick={scrollToTitle}
      />
      <div className="sections-wrapper">
        <div className="section" ref={sections[0]}>
          <GameTitle />
        </div>
        <div className="section" ref={sections[1]}>
          <About />
        </div>
        <div className="section" ref={sections[2]}>
          {showForm ? (
            <Form onSuccess={handleFormSuccess}
              onClose={closeForm} />
          ) : (
            <div className="comments-container">
              <Comments refreshTrigger={refreshComments} />
              <button
                className="button-add"
                onClick={openForm}
              >
                + Add Comment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
