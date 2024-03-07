import React from 'react';
import { Link } from 'react-router-dom';


const Checkout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgba(248,240,228,1)]">
      <div className="bg-white p-8 rounded shadow-md w-96 ">
          <Link to="/" className="align-start text-gray-700 text-sm inline-block hover:underline">
            Back
          </Link>
      <div className="flex items-center justify-center mb-4">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800 pr-2">Checkout</h2>   
        </div>

        {/* Product Summary */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-2 text-gray-700">Product Name</h3>
          <p className="text-sm text-gray-500">Product description and details.</p>
        </div>

        {/* Customer Information Form */}
        <form className='rounded-full'>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
              required
            />  
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="john@example.com"
              required
            />
          </div>

          {/* Other relevant form fields go here */}

          {/* Payment Information */}
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="**** **** **** ****"
              required
            />
          </div>

          {/* Other payment fields (e.g., expiry date, CVV) go here */}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[rgba(34,34,34,1)] text-white py-3 px-6 rounded hover:bg-[rgba(80,50,50,1)] transition duration-300 w-full"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
