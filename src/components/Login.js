import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin@petition.parliament.sr' && password === '2025%shangrila') {
      navigate('/committee-dashboard');
    } else {
      navigate('/petitioner-dashboard');
    }
  };

  return (
    <div style={{ margin: '50px auto', width: '300px', textAlign: 'center' }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: '10px', padding: '10px', width: '90%' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: '10px', padding: '10px', width: '90%' }}
      />
      <button onClick={handleLogin} style={{ padding: '10px', width: '95%' }}>Login</button>
    </div>
  );
};

export default Login;
