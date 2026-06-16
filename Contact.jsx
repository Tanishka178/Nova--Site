import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">

      <h1>Contact Us</h1>

      <form className="contact-form">

        <input type="text" placeholder="Enter your name" />

        <input type="email" placeholder="Enter your email" />

        <textarea placeholder="Enter your message"></textarea>

        <button>Send Message</button>

      </form>

    </section>
  );
};

export default Contact;