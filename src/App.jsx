import React, { useState } from 'react'; // Import useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/layout/Header'; // Make sure your Header component path is correct
import MobileMenu from './components/layout/MobileMenu'; // Make sure your MobileMenu component path is correct
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility

  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        {/*
          Render Header and MobileMenu outside of <Routes>
          so they are present on all pages.
          Pass the isMenuOpen state and setIsMenuOpen function as props.
        */}
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {/* This div will contain your page-specific content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as you create them */}
          </Routes>
        </main>

        {/*
          MobileMenu is rendered here, outside the main content flow,
          to ensure its blur overlay can cover the entire viewport (including the header).
        */}
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </Router>
  );
}

export default App;