import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">React Webpage</p>

        <h1>
          Build Beautiful <span>Modern Websites</span>
        </h1>

        <p className="hero-text">
          Create clean, responsive and professional webpages using React.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>

      <div className="hero-card">
        <h2>🚀</h2>
        <h3>Fast & Responsive</h3>
        <p>Perfect for practicing React components and CSS layouts.</p>
      </div>
    </section>
  );
};

export default Hero;