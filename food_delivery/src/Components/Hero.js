import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Welcome to Delicious Bites</h1>
          <p>Discover the taste of authentic flavors.</p>
          <a href="#menu" className="btn">Explore Menu</a>
        </div>
        <div className="hero-image">
          <img src="/images/hero.jpg" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
