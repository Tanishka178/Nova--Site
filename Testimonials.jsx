import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">

      <h1>Testimonials</h1>

      <div className="testimonial-cards">

        <div className="testimonial">
          <p>
            "Amazing website design and very smooth experience."
          </p>
          <h3>- Alex</h3>
        </div>

        <div className="testimonial">
          <p>
            "Professional looking UI and responsive layout."
          </p>
          <h3>- Sophia</h3>
        </div>

      </div>

    </section>
  );
};

export default Testimonials;