import React from 'react';

const Custom404 = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404 - Página no encontrada</h1>
            <img src="https://http.dog/404.jpg" alt="404 Not Found" style={styles.image} />
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    heading: {
        fontSize: '2rem',
        color: '#333',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
    },
};

export default Custom404;