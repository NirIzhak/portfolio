import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


const Header = ({applayDarkMode}) => {
  const location = useLocation();
  return (
    <header>
      <section className="grid">
        <Link to="/">
          <img src="/images/hero.jpg" alt="" />
        </Link>
        <Link to="/">
          <div>
            <span className="name">Nir Izhak</span>
            <div className="line"></div>
          </div>
        </Link>
      </section>
      <nav>
        <ul className="grid">
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={location.pathname === "/skills" ? "active" : ""}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
