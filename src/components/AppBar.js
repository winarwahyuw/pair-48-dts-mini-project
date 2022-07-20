import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const pages = [
  {text: 'Home', url:'home'},
  {text: "Series", url:"series"},
  {text:"movies", url: "movies"}];

const ResponsiveAppBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" ariant="dark">
      <Container>
        <Navbar.Brand href="#home">Nonskuy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {pages.map((page, index) => (
              <NavLink key={index} to={page.url}> {page.text} </NavLink>
            ))}
          </Nav>
          <Nav>
            <NavLink to="login">LOGIN </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default ResponsiveAppBar;