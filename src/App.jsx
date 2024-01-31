import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import ProductPage from './Components/ProductPage';
import YogaBatch from './Components/YogaBatch';
import Carousel from './Components/Carousel';  
import Footer from './Components/Footer';

function App() {
  const [activePage, setActivePage] = useState('home');
  // Example slides for the carousel
  const carouselSlides = [
    'https://d3nn873nee648n.cloudfront.net/900x600/19810/220-SM965516.jpg',
    'https://d3nn873nee648n.cloudfront.net/900x600/100009/300-ZM1037606.jpg',
    'https://d3nn873nee648n.cloudfront.net/900x600/100086/300-ZM1013273.jpg',
    'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHlvZ2ElMjBjbGFzcyUyMHdvbWVufGVufDB8fDB8fHww',
    'https://d3nn873nee648n.cloudfront.net/900x600/19800/220-SM964114.jpg',
    'https://plus.unsplash.com/premium_photo-1663047358310-4cb1d4581807?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHlvZ2ElMjBjbGFzcyUyMHdvbWVufGVufDB8MHwwfHx8MA%3D%3D',
    
  ];

  return (
    <div className="lg:flex lg:flex-col min-h-screen">
      <Navbar  setActivePage={setActivePage} />
      {/* Use the Carousel component on the home page */}
      {activePage === 'home' && (
        <>
          <Carousel autoSlide autoSlideInterval={3000}>
            {carouselSlides.map((slide, index) => (
              <img key={`slide-${index}`} src={slide} alt={`Slide ${index + 1}`} className=' w-full max-h-96 object-cover' />
            ))}
          </Carousel>
          <HomePage />
        </>
      )}
      {activePage === 'login' && <LoginPage />}
      {activePage === 'product' && <ProductPage />}
      {activePage === 'yoga' && <YogaBatch />}
      <Footer />
    </div>
  );
}

export default App;
