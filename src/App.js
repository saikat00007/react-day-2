import React from 'react';
import './App.css';
import './blog'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Alert from 'react-bootstrap/Alert';


const Saikat = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><h2>km Saikat</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">blog</Nav.Link>
            <Nav.Link href="#link">review</Nav.Link>
            <Nav.Link href="#link">footer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}


export default Saikat;
