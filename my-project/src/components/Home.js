import React from 'react';

const HomePage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Welcome to the Home Page</h1>
            <p style={styles.paragraph}>This is a placeholder for your content.</p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        fontSize: '2rem',
        color: '#333',
    },
    paragraph: {
        fontSize: '1rem',
        color: '#555',
    },
};

export default HomePage;
