import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
// import Dashboard from './pages/Dashboard';
// import PhotoGallery from './pages/PhotoGallery';
// import Portfolio from './pages/Portfolio';
import Header from './components/Header.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/portfolio" element={<Portfolio />} /> */}
      </Routes>
    </>
  );
};

export default App;
