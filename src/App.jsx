import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { useState } from 'react';
import Home from './pages/home';
import About from './pages/About';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
