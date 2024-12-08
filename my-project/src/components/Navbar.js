import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';



const NavigationBar = () => {

    return(
        <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center">
          <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="mx-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/Create">Create</Nav.Link>
              <Nav.Link href="/Read">Read</Nav.Link>
            </Nav>
          </Container>
      </Navbar>

    );


};

export default NavigationBar;

