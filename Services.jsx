import "./Services.css";

const Services = () => {
  return (
    <section className="services">

      <h1>Our Services</h1>

      <div className="service-cards">

        <div className="card">
          <h2>💻</h2>
          <h3>Web Development</h3>
          <p>Create responsive and modern websites using React.</p>
        </div>

        <div className="card">
          <h2>🎨</h2>
          <h3>UI/UX Design</h3>
          <p>Beautiful and clean user interface designs.</p>
        </div>

        <div className="card">
          <h2>⚡</h2>
          <h3>Fast Performance</h3>
          <p>Optimized websites with smooth experience.</p>
        </div>

      </div>

    </section>
  );
};

export default Services;