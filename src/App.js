import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/Signup'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* Add other routes as needed */}
        <Route path="/" element={<div className='font-bold'> Home Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
