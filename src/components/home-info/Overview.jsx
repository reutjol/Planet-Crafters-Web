import React, { useEffect, useRef, useState } from "react";
import "../../styles/Home-info.css";
import img1 from "../../assets/Planet1.png";
import img2 from "../../assets/Planet2.png";
import img3 from "../../assets/Planet3.png";
import img4 from "../../assets/Planet4.png";
import img5 from "../../assets/Planet5.png";
import img6 from "../../assets/Planet6.png";
import googlePlay from "../../assets/gg.png";
import appStore from "../../assets/as.png";

const planets = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
];

export default function PlanetAutoSwitcher() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setFade(false);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % planets.length);
        setFade(true);
      }, 400);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="planet-intro">
      <div className="planet-auto-wrap">
        <div className="planet-rotator">
          <img
            src={planets[index].src}
            className={`planet-auto ${fade ? "in" : "out"}`}
            alt=""
          />
        </div>
      </div>

      <div className="planet-copy">
        <h1 className="planet-title">
          Your next world <br /> is waiting.
        </h1>
        <p className="planet-text">
          Get your planet and start playing. <br />
          Every decision shapes your world.
        </p>

        <div className="store-container">
            <img src={googlePlay} alt="Google Play" className="store-img" />
            <img src={appStore} alt="App Store" className="store-img" />
        </div>
      </div>
    </section>
  );
}
