import React, { useState } from "react";
import { useCart } from "react-use-cart";
import axios from "axios";
import Footer from "../containers/Footer";
import FooterBotton from "../containers/FooterBotton";
import Header2 from "../containers/Header2";

const CheckoutForm = () => {
  const [checkoutFormData, setCheckoutFormData] = useState({
    cName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pCode: "",
  });

  const { isEmpty, items, cartTotal, clear } = useCart();

  const handleChange = (e) => {
    setCheckoutFormData({
      ...checkoutFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (Object.values(checkoutFormData).some((value) => value === "")) {
      alert("Fill all the data");
    } else {
      try {
        // Prepare data to be sent to the backend
        const data = {
          ...checkoutFormData,
          items: items.map((item) => ({
            name: item.title,
            price: item.price,
          })),
          cartTotal: cartTotal.toFixed(2),
          quantityOfUniqueItems: items.length,
        };

        // Send data to the backend
        const response = await axios.post("http://localhost:8081/orders", data);
        console.log("Response from backend:", response); // Log response from backend

        // Clear the cart after successful submission
        clear;

        // Redirect to payment page after successful submission
        window.location.href = "/payment";
      } catch (error) {
        console.error("Error sending data to backend:", error); // Log any errors
        alert("Error sending data to backend. Please try again later.");
      }
    }
  };

  return (
    <div>
      <Header2 />
      <div className="flex flex-col md:flex-row justify-center items-center bg-magic2">
        <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Shipping Address
          </h2>
          <div className="grid grid-cols-1 gap-y-4">
            <div className="grid grid-cols-1 gap-y-4">
              <div>
                <label
                  htmlFor="cName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Customer Name
                </label>
                <input
                  value={checkoutFormData.cName}
                  onChange={handleChange}
                  type="text"
                  id="cName"
                  name="cName"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  value={checkoutFormData.address}
                  onChange={handleChange}
                  type="text"
                  id="address"
                  name="address"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="apartment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apartment, suite, etc.
                </label>
                <input
                  value={checkoutFormData.apartment}
                  onChange={handleChange}
                  type="text"
                  id="apartment"
                  name="apartment"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-x-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    value={checkoutFormData.city}
                    onChange={handleChange}
                    type="text"
                    id="city"
                    name="city"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <input
                    value={checkoutFormData.state}
                    onChange={handleChange}
                    type="text"
                    id="state"
                    name="state"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="pCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal code
                </label>
                <input
                  value={checkoutFormData.pCode}
                  onChange={handleChange}
                  type="text"
                  id="pCode"
                  name="pCode"
                  autoComplete="pCode"
                  pattern="[0-9]*"
                  maxLength={6}
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Continue
            </button>
          </div>
        </form>

        <div className="p-8 mt-6 md:mt-0 md:ml-6 md:w-1/2 max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Cart</h2>
          <div className="overflow-y-auto max-h-96">
            {/* Display cart items */}
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800">Cart Total</h3>
            <p className="text-xl font-semibold text-gray-800">
              ₹{cartTotal.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <FooterBotton />
    </div>
  );
};

export default CheckoutForm;
