import React, { useEffect } from 'react';
import Carousel from './Components/Carousel';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import LoginPage from'./Components/LoginPage';
import ProductPage from './Components/ProductPage';
import YogaBatch from './Components/YogaBatch';


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

  const slides = [
    'https://plus.unsplash.com/premium_photo-1700061653229-bed0c5e19c8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHlvZ2ElMjBjbGFzcyUyMHdvbWVufGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1661901730579-2cd8e29ba20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW9nYSUyMGNsYXNzJTIwd29tZW58ZW58MHwwfDB8fHww',
    'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHlvZ2ElMjBjbGFzcyUyMHdvbWVufGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMGNsYXNzJTIwd29tZW58ZW58MHwwfDB8fHww',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYSUyMGNsYXNzJTIwd29tZW58ZW58MHwwfDB8fHww',
    'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHlvZ2ElMjBjbGFzcyUyMHdvbWVufGVufDB8MHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1663047358310-4cb1d4581807?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHlvZ2ElMjBjbGFzcyUyMHdvbWVufGVufDB8MHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1664299192011-b09d1fc8b1d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHlvZ2ElMjBjbGFzcyUyMHdvbWVufGVufDB8MHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1679522165628-fc1056f8bb35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHlvZ2ElMjBjbGFzcyUyMHdvbWVufGVufDB8MHwwfHx8MA%3D%3D',
  
  ];

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Carousel autoSlide={true}>
          {[...slides.map((s, i) => <img key={i} src={s} className=' w-full ' />)]}
      </Carousel>
      <HomePage/>
  <LoginPage />
       <ProductPage/>
       <YogaBatch/>
    </>
  );
}

export default App;
