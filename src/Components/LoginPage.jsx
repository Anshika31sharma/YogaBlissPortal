import React, { useState } from 'react';
import Flags from 'react-flags-select';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleLogin = () => {
    if (acceptTerms) {
      console.log(`Logging in with ${countryCode} ${phoneNumber}`);
    } else {
      alert('Please accept the terms and conditions.');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1598063183638-4ffe7c5f0f8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnMlMjBiYWNrZ3JvdW5kfGVufDB8MHwwfHx8MA%3D%3D')`,
      }}
    >
      <div className=" p-8 rounded-lg shadow-md max-w-5xl mt-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Login to Your Account</h1>
        <div className="flex flex-col items-center md:flex-row md:items-start mb-4 p-2">
          <Flags
            selected={countryCode}
            onSelect={(code) => setCountryCode(code)}
            className="mb-2 md:mr-2 bg-white"
            options={['US', 'IN', 'GB', 'FR', 'DE', 'JP', 'BR']}
          />
          <input
            type="text"
            id="phoneNumber"
            placeholder="Enter Phone Number"
            className="border p-3 rounded w-full md:w-48 focus:outline-none focus:border-blue-500"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="acceptTerms"
            className="mr-2"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
          />
          <label htmlFor="acceptTerms" className="text-lg">
            I accept the terms and conditions
          </label>
        </div>
        <button
          className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300 w-full focus:outline-none"
          onClick={handleLogin}
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};
export default LoginPage;