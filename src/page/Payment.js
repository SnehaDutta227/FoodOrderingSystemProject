import React from 'react';

const PaymentPage = () => {
  const handlePayment = () => {
    // Handle payment logic here
    // You can implement the actual payment integration or perform any other action you need
    alert('Payment Successful!');
  };

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">Payment Details</h2>
      <div className="my-4">
        <form>
          <div className="mb-4">
            <label className="block text-slate-700 font-bold mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input 
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cardNumber"
              type="text"
              placeholder="XXXX XXXX XXXX"
            />
          </div>
          <div className="mb-4">
            <label className="block text-slate-700 font-bold mb-2" htmlFor="expirationDate">
              Expiration Date
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expirationDate"
              type="text"
              placeholder="MM/YY"
            />
          </div>
          <div className="mb-4">
            <label className="block text-slate-700 font-bold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cvv"
              type="text"
              placeholder="CVV"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handlePayment}
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
