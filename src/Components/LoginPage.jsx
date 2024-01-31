import React, { useState } from 'react';
import Flags from 'react-flags-select';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');

  const handleLogin = () => {
    console.log(`Logging in with ${countryCode} ${phoneNumber}`);
  };

  return (
    <div className="flex items-center justify-center  h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-5xl w-full md:w-96 mt-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold mb-6">Login to your account</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start mb-4 p-2">
          <Flags
            selected={countryCode}
            onSelect={(code) => setCountryCode(code)}
            className="mr-2 bg-white"
            options={['US', 'IN', 'GB', 'FR', 'DE', 'JP', 'BR']}
          />
          <input
            type="text"
            id="phoneNumber"
            placeholder="Enter Phone Number"
            className="border p-3 rounded flex-1 w-full md:w-48"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 w-full"
          onClick={handleLogin}
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
