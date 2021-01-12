import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import logo from './image/logo.png';
import './css/carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css';

const NavLinks = () => {

    const ul = { 
        'list-style-type': 'none',
        'margin': '0',
        'padding': '0',
        'overflow': 'hidden'
      }
    
      const link = { 
        'display': 'block',
        'color': 'white',
        'text-align': 'center',
        'padding': '14px 16px',
        'text-decoration': 'none'
      }
    
      const li = {
        'float': 'left'
      }

  return (
      <Container fluid>
        <Row>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <ul style={ ul }>
                        <li style = { li }>
                            <Link style = { link } to="/productone" >
                                    Product One
                            </Link>
                        </li>
                        <li style = { li }>
                            <Link style = { link } to="/producttwo" >
                                Product Two
                            </Link>
                        </li>
                    </ul>
                </Nav>
                <Nav>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link eventKey={2} href="#feedback">
                        Feedback
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Row>
    </Container>
  );
}
export default NavLinks;