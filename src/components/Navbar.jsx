import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={styles.navbar}>
    <Link to="/" style={styles.link}>Home</Link>
  </nav>
);

const styles = {
  navbar: { backgroundColor: '#333', padding: '10px' },
  link: { color: '#fff', marginRight: '10px', textDecoration: 'none' },
};

export default Navbar;
