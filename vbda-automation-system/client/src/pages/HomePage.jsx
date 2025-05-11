import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the VBDA 2025 Invitation System</h1>
      <Link to="/invite">Go to Invite Form</Link>
    </div>
  );
};

export default HomePage;
