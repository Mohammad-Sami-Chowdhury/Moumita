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

  return (
    <>
        <div>
          <AllRoute />
        </div>
    </>
  );
}

export default App;