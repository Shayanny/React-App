import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>© 2024 Munchies. All Rights Reserved.</p>
            <p>
                <Link to="/about" style={styles.footerLink}>About Us</Link> | 
                <Link to="/contact" style={styles.footerLink}> Contact</Link>
            </p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
        marginTop: '0px',
    },
    footerLink: {
        color: '#ffa07a',
        textDecoration: 'none',
        margin: '0 5px',
    },
};

export default Footer;