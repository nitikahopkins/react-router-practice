import React from "react";
import { Link } from "@reach/router";

const Nav = ({ currentPage }) => (
  <nav>
    {currentPage === "Home" ? (
      <button style={{ backgroundColor: "yellow" }}>Home</button>
    ) : (
      <Link to="/">
        <button>Home</button>
      </Link>
    )}
    {currentPage === "Dashboard" ? (
      <button style={{ backgroundColor: "yellow" }}>Dashboard</button>
    ) : (
      <Link to="dashboard">
        <button>Dashboard</button>
      </Link>
    )}
    {currentPage === "Invoices" ? (
      <button style={{ backgroundColor: "yellow" }}>Invoices</button>
    ) : (
      <Link to="invoices">
        <button>Invoices</button>
      </Link>
    )}
  </nav>
);

export default Nav;
