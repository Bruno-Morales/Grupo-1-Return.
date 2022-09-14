import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-snapchat"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <ul>
        <li>
          <small className="copyright">Return @ 2022</small>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
