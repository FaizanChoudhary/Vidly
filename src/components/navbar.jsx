import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = ({ user }) => {
  return (
    <ul className="nav nav-tabs">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <NavLink className="nav-item nav-link" aria-current="page" to="/movies">
        Movies
      </NavLink>
      <NavLink
        className="nav-item nav-link"
        aria-current="page"
        to="/customers"
      >
        Customers
      </NavLink>

      <NavLink className="nav-item nav-link" aria-current="page" to="/rentals">
        Rentals
      </NavLink>

      {!user && (
        <React.Fragment>
          <NavLink
            className="nav-item nav-link"
            aria-current="page"
            to="/login"
          >
            Log in
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            aria-current="page"
            to="/registration"
          >
            Registration
          </NavLink>
        </React.Fragment>
      )}
      {user && (
        <React.Fragment>
          <NavLink
            className="nav-item nav-link"
            aria-current="page"
            to="/profile"
          >
            {user.name}
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            aria-current="page"
            to="/logout"
          >
            Logout
          </NavLink>
        </React.Fragment>
      )}
    </ul>
  );
};

export default NavBar;
