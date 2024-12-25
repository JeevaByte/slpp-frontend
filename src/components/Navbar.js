import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display:'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3px 10px', backgroundColor: '#BEE554', color: 'black', fontSize: '25px' }}>
      <h3>SLPP</h3>
      <div style={{ display: 'flex', gap: '50px', fontSize: '23px',fontWeight:'bold' }}>
        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Login</Link>
        <Link to="/register" style={{ color: 'black', textDecoration: 'none' }}>Register</Link>
        <Link to="/petitioner-dashboard" style={{ color: 'black', textDecoration: 'none' }}>Petitioner Dashboard</Link>
        <Link to="/committee-dashboard" style={{ color: 'black', textDecoration: 'none' }}>Committee Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
