import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Header from './components/layout/Header';
import MobileMenu from './components/layout/MobileMenu';
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import './App.css';

// A wrapper component to protect routes and redirect logged-in users
const ProtectedAuthRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  // Redirect logged-in users away from auth pages
  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <div className="relative min-h-screen flex flex-col">
          {/* Header and MobileMenu are present on all pages */}
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

          {/* Main content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/signup"
                element={
                  <ProtectedAuthRoute>
                    <SignUp />
                  </ProtectedAuthRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <ProtectedAuthRoute>
                    <Login />
                  </ProtectedAuthRoute>
                }
              />
              {/* Add more routes as needed */}
            </Routes>
          </main>

          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;