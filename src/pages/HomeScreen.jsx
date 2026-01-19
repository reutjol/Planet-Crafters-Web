import GameTitle from "../components/home-info/GameTitle";
import About from "../components/home-info/About";
import Overview from "../components/home-info/Overview";
import "../styles/pages.css";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function HomeScreen() {
  const titleRef = useRef(null);
  const aboutRef = useRef(null);
  const overviewRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const hash = (location.hash || "").replace("#", "");
    if (!hash) return;

    const map = {
      title: titleRef,
      about: aboutRef,
      overview: overviewRef,
    };

    const targetRef = map[hash];

    requestAnimationFrame(() => {
      targetRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  useEffect(() => {
    const refs = [titleRef, aboutRef, overviewRef];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.4 }
    );

    refs.forEach((r) => {
      if (r.current) observer.observe(r.current);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="Home">
      <div className="sections-wrapper">
        <section id="title" className="section" ref={titleRef}>
          <GameTitle />
        </section>
        <section id="about" className="section" ref={aboutRef}>
          <About />
        </section>
        <section id="overview" className="section" ref={overviewRef}>
          <Overview />
        </section>
      </div>
    </div>
  );
}
