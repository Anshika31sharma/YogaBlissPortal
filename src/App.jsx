import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import ProductPage from './Components/ProductPage';
import YogaBatch from './Components/YogaBatch';
import Carousel from './Components/Carousel';

function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const isDarkMode = localStorage.getItem('isDarkMode');
    if (isDarkMode === 'true') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('isDarkMode', String(isDarkMode));
  };



  return (
    <div className="lg:flex lg:flex-col min-h-screen">
      <Navbar toggleDarkMode={toggleDarkMode} setActivePage={setActivePage} />
      {activePage === 'home' && <HomePage />}
      {activePage === 'login' && <LoginPage />}
      {activePage === 'product' && <ProductPage />}
      {activePage === 'yoga' && <YogaBatch />}
    </div>
  );
}

export default App;
