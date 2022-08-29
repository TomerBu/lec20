import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdMovieFilter } from "react-icons/md";
import TopNavLink from "./TopNavLink";
const TopNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* BRAND: logo + app name */}
        <NavLink to="/" className="navbar-brand">
          <span className="text-muted">Movie App</span>
          <MdMovieFilter color="#00BFFF" />
        </NavLink>
        {/* BURGER */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <TopNavLink to="/" label="Home" />
            <TopNavLink to="/movies" label="Movies" />
            <TopNavLink to="/favorites" label="Favorites" />
            <TopNavLink to="/about" label="About" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
