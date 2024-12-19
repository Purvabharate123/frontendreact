import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Delicious Bites</h1>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#cart">Cart</a></li>
          <li><a href="#payment">Payment</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
