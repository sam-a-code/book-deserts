import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (<div className="navbar">
    <NavLink className="nav-text" to="/" exact>HOME </NavLink>
    <NavLink className="nav-text" to="/articles" exact>ARTICLES </NavLink>
    <NavLink className="nav-text" to="/organizations" exact>ORGANIZATIONS </NavLink>
    <NavLink className="nav-text" to="/books" exact>BOOKS </NavLink>
  </div>);
}

export default NavBar;
