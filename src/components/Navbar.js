import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display:'flex', padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>
      <h3>SLPP</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
        <Link to="/petitioner-dashboard" style={{ color: 'white', textDecoration: 'none' }}>Petitioner Dashboard</Link>
        <Link to="/committee-dashboard" style={{ color: 'white', textDecoration: 'none' }}>Committee Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
