import React from "react";
import "../sass/navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <p className="nav__snap">snap</p>
      <div>
        <p>Features</p>
        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#686868"
            strokeWidth="1.5"
            fill="none"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>

      <div>
        <p>Company</p>
        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#686868"
            strokeWidth="1.5"
            fill="none"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>

      <p>Careers</p>
      <p>About</p>
      <p className="nav__login">Login</p>
      <div className="nav__register">
        <p>Register</p>
      </div>
    </nav>
  );
};

export default Navbar;
