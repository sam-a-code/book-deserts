import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (<div className="navbar">
    <NavLink to="/" exact>HOME </NavLink>
    <NavLink to="/articles" exact>ARTICLES </NavLink>
    <NavLink to="/organizations" exact>ORGANIZATIONS </NavLink>
    <NavLink to="/books" exact>BOOKS </NavLink>
  </div>);
}

export default NavBar;
