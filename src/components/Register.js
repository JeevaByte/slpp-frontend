import React, { useState } from 'react';

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
    <div style={{ margin: '50px auto', width: '300px', textAlign: 'center' }}>
      <h2>Register</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={{ margin: '10px', padding: '10px', width: '90%' }}
      />
      <input
        name="fullName"
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        style={{ margin: '10px', padding: '10px', width: '90%' }}
      />
      <input
        name="dateOfBirth"
        type="date"
        value={formData.dateOfBirth}
        onChange={handleChange}
        style={{ margin: '10px', padding: '10px', width: '90%' }}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        style={{ margin: '10px', padding: '10px', width: '90%' }}
      />
      <input
        name="bioID"
        type="text"
        placeholder="BioID"
        value={formData.bioID}
        onChange={handleChange}
        style={{ margin: '10px', padding: '10px', width: '90%' }}
      />
      <button onClick={handleRegister} style={{ padding: '10px', width: '95%' }}>Register</button>
    </div>
  );
};

export default Register;
