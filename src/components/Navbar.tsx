import React from "react";
import "../sass/navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <p className="nav__snap">snap</p>
      <p>Features</p>
      <p>Company</p>
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
