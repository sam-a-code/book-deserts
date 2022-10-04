// should be top of every page, add to App 

import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (<div className="navbar">
    <NavLink to="/" exact>Home </NavLink>
    <NavLink to="/articles" exact>Articles </NavLink>
    <NavLink to="/resources" exact>Resources </NavLink>
    <NavLink to="/books" exact>Books </NavLink>
  </div>);
}

export default NavBar;
