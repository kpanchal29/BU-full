import React, { useState } from "react";
import { useCart } from "react-use-cart";
import axios from "axios"; 


const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    item: "",
    price: "",
    total: "",
  });

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const data = {
    name: "Vikas",
    amount: cartTotal,
    number: "9999999999",
    MUID: "MUID" + Date.now(),
    transactionId: "T" + Date.now(),
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
     .post("http://localhost:8081/order", formData)
     .then((res) => {
      console.log(res.data);
     })

    let res = await axios
      .post("http://localhost:8000/order", data)
      .then((res) => {
        console.log(res);
        if (res.data && res.data.data.instrumentResponse.redirectInfo.url) {
          window.location.href =
            res.data.data.instrumentResponse.redirectInfo.url;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row">
        <form
          onSubmit={handleSubmit}
          className="md:max-w-xl w-96 mx-auto p-6 bg-white shadow-lg rounded-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-semibold mb-2"
            >
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Pay now
          </button>
        </form>
        <div className="mt-6 md:mt-0 md:ml-6 p-6 bg-gray-100 rounded-lg w-96">
          <div className="p-4 overflow-y-auto max-h-[calc(100vh-200px)]">
            {isEmpty ? (
              <p className="text-center text-xl font-bold text-black">
                Cart is empty
              </p>
            ) : (
              items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-4 border-b pb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.imgsrc}
                      alt={item.title}
                      className="h-32 w-32 object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-500 font-bold text-center mt-8 mr-5">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded ml-4"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
          <p className="text-2xl font-bold">₹{cartTotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
