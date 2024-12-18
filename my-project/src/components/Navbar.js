import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { GiForkKnifeSpoon } from "react-icons/gi"; // Import icon from react icons




const NavigationBar = () => {

  return (
    <Navbar style={styles.navbar} expand="lg">
      <Container>
        {/* Navbar Brand with Icon */}
        <Navbar.Brand style={styles.brand}>
          <GiForkKnifeSpoon style={styles.icon} />
          Munchies
        </Navbar.Brand>

        {/* Toggle Button for Small Screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={styles.toggleButton} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link href="/Home" style={styles.link}>Home</Nav.Link>
            <Nav.Link href="/Create" style={styles.link}>Create</Nav.Link>
            <Nav.Link href="/Read" style={styles.link}>Read</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );


};

const styles = {
  navbar: {
    backgroundColor: '#555555', // Dark grey background
    padding: '10px 0',
  },
  brand: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#ffa07a', // Light orange for the header text
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '8px',
    fontSize: '1.8rem',
    color: '#ffa07a', // Light orange for the icon
  },
  toggleButton: {
    backgroundColor: '#ffa07a', // Light orange toggle button
    borderColor: '#ffa07a',     // Match the border color
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'column', // Align links vertically
    gap: '10px',             // Adds space between links
  },
  link: {
    color: '#ffa07a',
    fontSize: '1.2rem',
    padding: '5px 10px',
    textDecoration: 'none',
  },
};

export default NavigationBar;

