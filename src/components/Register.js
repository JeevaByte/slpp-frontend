import React, { useState } from 'react';
import QrScanner from "./QrScanner";
import axios from 'axios'; // Import axios
import "../App.css";

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    dateOfBirth: '',
    password: '',
    bioID: '',
  });

  const [showScanner, setShowScanner] = useState(false); // State to show/hide the scanner
  const [scannedBioId, setScannedBioId] = useState(""); // State to store the scanned Bio ID
  const [error, setError] = useState(""); // State to handle error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQrScanned = (bioId) => {
    setFormData({ ...formData, bioID: bioId });
    setScannedBioId(bioId);
    setShowScanner(false);
  };

  const handleRegister = async () => {
    if (!formData.email || !formData.fullName || !formData.dateOfBirth || !formData.password || !formData.bioID) {
      setError("Please fill in all fields.");
      return; // Prevent registration if fields are missing
    }

    setError(""); // Clear any previous errors if all fields are filled

    // Make API call using axios
    try {
    console.log("form data",formData)
      const response = await axios.post('http://192.168.56.1:5000/register', formData);

      if (response.status === 200) {
        alert(response.data.message || 'User registered successfully!');
      }
    } catch (error) {
      setError("Error: " + error.message);
    }
  };

  return (
    <div style={{ margin: '50px auto', width: '500px', textAlign: 'center', fontSize: "30px" }}>
      <h2>Register</h2>

      {/* Display the error message if validation fails */}
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

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
      <button
        type="button"
        onClick={() => setShowScanner(true)}
      >
        Scan QR
      </button>
      <button onClick={handleRegister} style={{ padding: '10px', width: '95%' }}>Register</button>

      {showScanner && (
        <div>
          <QrScanner
            bioIdList={["https://docs.google.com/forms/d/e/1FAIpQLSfH88qsSIXX1v-u18j62PypE-MRPn1UQpS3LZsipmN0TE-qRg/viewform","67890", "ABCDE", "FGHIJ"]}
            onScan={(bioId) => handleQrScanned(bioId)}
            onError={(err) => alert("Error accessing the camera: " + err.message)}
          />
        </div>
      )}
    </div>
  );
};

export default Register;
