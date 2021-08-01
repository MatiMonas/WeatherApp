import React from "react";
import Logo from "../img/logoHenry.png";
import "./styles/Nav.css";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";

//importo Link
// import { Link } from "react-router-dom";
//dentro del componente hago los linkeos necesarios.

function Nav({ onSearch }) {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="navbar-brand navbar-dark">Home</span>
      </Link>
      <SearchBar onSearch={onSearch} className="search-bar" />
      <Link to="/about">
        <span className="navbar-brand navbar-dark">About</span>
      </Link>
    </nav>
  );
}

export default Nav;
