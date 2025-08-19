import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Your Company. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="/about">About</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
