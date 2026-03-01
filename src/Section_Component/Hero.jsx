import { useEffect, useState } from "react";
import profile from "../assets/profile.jpeg";
import "./Hero.css";

function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container container">

        <div className="hero-image">
          <img src={profile} alt="Aromal" />
        </div>

        <div className="hero-content">
          <h3 className={`hero-greet ${show ? "show delay-1" : ""}`}>
            Hi 👋🏻
          </h3>

          <h1 className={`hero-title ${show ? "show delay-2" : ""}`}>
  I’m Sourov, and turning coffee into websites daily!☕
</h1>

          <div className={`hero-tags ${show ? "show delay-3" : ""}`}>
            <span className="tag tag-orange">🧑‍💻 Graphics Designer</span>
            <span className="tag tag-blue">✒️ Web Developer</span>
            <span className="tag tag-pink">💻 Vibe Coder</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;