import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Docs from './components/Docs';
import Contact from './components/Contact';

function App() {
  const [page, setPage] = useState('home');
  const handleNavigation = (newPage, e) => {
    e.preventDefault();
    setPage(newPage);
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === 'home' && <Home handleNavigation={handleNavigation} />}
      {page === 'docs' && <Docs />}
      {page === 'contact' && <Contact />}
    </div>
  );
}

export default App;
