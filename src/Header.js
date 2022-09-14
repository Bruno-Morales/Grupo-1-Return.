import React from "react";
import "./App.css";
import logo from "./Background.png";
import Profile from "./Profile.js";

import { Link, Routes, Route, Switch } from "react-router-dom";

function Header() {
  return (
    <div className="top-navigation-bar">
      <div className="left-column">
        <a href="/">
          <img className="logo" src={logo} />
        </a>
      </div>

      <from
        action=""
        className="search-menu"
        method="get"
        name="searchnav"
        enctype="multipart/form-data"
      >
        <a className="search-filter" href="" name="search-filter">
          Buscar producto:
          <i className="fa-solid fa-chevron-down search-filter-button"></i>
        </a>
        <input className="search-bar" name="search" id="search" type="text" />
        <button className="magnifying-glass" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </from>

      <div className="right-column">
        <Link className="top-navigation-bar-button" to="/Profile" exact="true">
          Profile
        </Link>
        <Link className="top-navigation-bar-button" to="/Agregarproducto">
          Sell
        </Link>
        <Link className="top-navigation-bar-favorite-button" to="/Misproductos">
          Mis productos
          <i className="fa-solid fa-chevron-down right-column-dropdown-menu"></i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
