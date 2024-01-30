import React, { useState } from 'react';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default country code

  const handleLogin = () => {
    console.log(`Logging in with ${countryCode} ${phoneNumber}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-96 max-w-2xl ml-96 mt-20 bg-gradient-to-r from-blue-500 to-indigo-700 text-white">
      <h1 className="text-4xl font-semibold mb-6">Login</h1>
      <div className="flex items-center mb-4">
        <label htmlFor="countryCode" className="mr-2 text-lg">
          Country Code:
        </label>
        <select
          id="countryCode"
          className="border p-2 rounded"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        >
          {/* Add your country codes as options */}
          <option value="+1">+1 (US)</option>
          <option value="+91">+91 (India)</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="phoneNumber" className="mr-2 text-lg">
          Phone Number:
        </label>
        <input
          type="text"
          id="phoneNumber"
          className="border p-2 rounded"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button
        className="bg-white text-blue-500 p-2 rounded hover:bg-blue-600 transition duration-300"
        onClick={handleLogin}
      >
        Send OTP
      </button>
    </div>
  );
};

export default LoginPage;
