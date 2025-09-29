import React, { useState, useEffect } from "react";
import AllRoute from '../router'
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

const CORRECT_PIN = "54";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });
  const [pin, setPin] = useState("");

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === CORRECT_PIN) {
      setIsAuthenticated(true);
    } else {
      toast.error("Wrong PIN. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPin("");
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <>
      <Toaster />
      {!isAuthenticated ? (
        <div className="pin-page-bg">
          <form onSubmit={handleLogin} className="pin-card">
            <h2>Enter Pin to Access</h2>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN"
              className="pin-input"
              autoFocus
            />
            <button type="submit" className="pin-login-btn">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <button onClick={handleLogout} style={{ position: "absolute", top: 10, right: 10 }}>Logout</button>
          <AllRoute />
        </div>
      )}
    </>
  );
}

export default App;