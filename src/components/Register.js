import React, { useState } from 'react';
import "../App.css"

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    dateOfBirth: '',
    password: '',
    bioID: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    alert('User registered successfully!');
  };

  return (
    <div style={{ margin: '50px auto', width: '500px', textAlign: 'center' ,fontSize: "30px"}}>
      <h2>Register</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className='place_holder'
     />
      <input
        name="fullName"
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className='place_holder'
      />
      <input
        name="dateOfBirth"
        type="date"
        value={formData.dateOfBirth}
        onChange={handleChange}
        className='place_holder'
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className='place_holder'
      />
      <input
        name="bioID"
        type="text"
        placeholder="BioID"
        value={formData.bioID}
        onChange={handleChange}
        className='place_holder'
      />
      <button onClick={handleRegister} style={{ padding: '10px', width: '95%' }}>Register</button>
    </div>
  );
};

export default Register;
