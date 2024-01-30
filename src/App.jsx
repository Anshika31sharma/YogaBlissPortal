import React, { useEffect } from 'react';
import HomePage from './Components/HomePage';
// import ProductPage from './Components/ProductPage';
// import YogaBatchPage from './Components/YogaBatch';
// import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';

function App() {
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
    <>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <HomePage />
      {/* <ProductPage /> */}
      {/* <YogaBatchPage /> */}
      {/* <LoginPage /> */}
    </>
  );
};

export default App;
