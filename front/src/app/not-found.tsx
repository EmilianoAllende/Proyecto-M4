import React from 'react';

const Error = () => {
    return (
        <>
        <div style={styles.container}>
            <h1 style={styles.heading}>404 - Page not found</h1>
            <img src="https://http.dog/404.jpg" alt="404 Not Found" style={styles.image} />
        </div>
        </>

    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '8rem',
        alignItems: 'center',
    },
    heading: {
        maxWidth: '68%',
        fontSize: '2rem',
        color: 'var(--tertiary-color)',
        backgroundColor: 'var(--secondary-color)',
    },
    image: {
        margin: 'auto',
        maxWidth: '70%',
        height: 'auto',
    },
};

export default Error;