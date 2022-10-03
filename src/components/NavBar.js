import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
        <NavLink
          to="/"
          exact
          >
          Home
          </NavLink>
          {/* <NavLink 
            to="/articles"
            exact
            >
            Articles
            </NavLink>
            <NavLink 
              to="/donate-resources"
              exact
            >
              Donations + Resources
            </NavLink>
            <NavLink 
              to="/books"
              exact
            >
              Books
            </NavLink> */}
  </div>;
}

export default NavBar;
