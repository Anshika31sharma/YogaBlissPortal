import React from 'react';

const ProductPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen">
      {/* Left Side - Product Image and Description */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1673565973494-5a712ba9ea1c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Product"
          className="w-full md:w-96 h-96 mb-4 rounded-lg shadow-lg"
        />
        <div className="text-center">
          <h2 className="text-2xl mt-5 font-bold">What is Yoga for the mind</h2>
          <p className="mt-2 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil modi accusantium blanditiis ad fugiat. Dicta
            eaque laudantium beatae. Porro deleniti voluptatum natus numquam perspiciatis eligendi, dignissimos quasi
            autem? Laboriosam ex qui aspernatur soluta a eos?
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-1/2">
        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Package 1 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg mb-4 flex flex-col items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Package 1</h3>
              <p className="text-lg">$10/month</p>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Buy Now
            </button>
          </div>

          {/* Package 2 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg mb-4 flex flex-col items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Package 2</h3>
              <p className="text-lg">$20/month</p>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Buy Now
            </button>
          </div>

          {/* Package 3 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg mb-4 flex flex-col items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Package 3</h3>
              <p className="text-lg">$15/month</p>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
