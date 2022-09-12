import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../MainNav/MainNav.scss';

const MainNav = () => {
    return (
        <Navbar bg="" expand="lg">
            <Container>
                <Navbar.Brand className='text-info' href="#home">Km Saikat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navLiks w-100 justify-content-end">
                        <Link to="/home">Home</Link>
                        <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-danger' : ''
            }
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? 'text-danger' : ''
            }
          >
            Blog
          </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNav;
