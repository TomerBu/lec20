import React from "react";
import { NavLink } from "react-router-dom";

const TopNavLink = ({ label, to }) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={to}>
        {label}
      </NavLink>
    </li>
  );
};

export default TopNavLink;
