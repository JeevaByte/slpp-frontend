import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import PetitionerDashboard from './components/PetitionerDashboard';
import CommitteeDashboard from './components/CommitteeDashboard';

const App = () => {
  return (
    <div>
      {/* Navbar should be rendered outside of Routes if it's common for all pages */}
      <Navbar />

      {/* Define Routes for different paths */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/petitioner-dashboard" element={<PetitionerDashboard />} />
        <Route path="/committee-dashboard" element={<CommitteeDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
