import React from 'react';
import './App.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/Signup';
import LoginPage from './pages/login';
import.meta.env.VITE_SQL;

//const mysql = require('mysql2');
if (import.meta.env.MODE === 'development') {
  //use dev keys
} else {
  //use .env variables
}

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
