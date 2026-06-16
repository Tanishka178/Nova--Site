// Navbar.jsx

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        NovaSite
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="nav-btn">
        Get Started
      </button>

    </nav>
  );
};

export default Navbar;