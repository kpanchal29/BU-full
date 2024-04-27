import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import Footer from "../containers/Footer";
import FooterBotton from "../containers/FooterBotton";
import Header2 from "../containers/Header2";
import axios from "axios";

const Payment = () => {
  const { items, cartTotal } = useCart();

  const data = {
    name: "Vikas",
    amount: cartTotal,
    number: "9999999999",
    MUID: "MUID" + Date.now(),
    transactionId: "T" + Date.now(),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    <div>
      <Header2 />
      <div className="flex flex-col items-center justify-center min-h-screen bg-magic2">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
          {/* Order details */}
          <h1 className="text-4xl font-bold mb-8 text-center">Your Order</h1>
          <div className="mb-6">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between mb-6">
                <div className="flex items-center">
                  <img
                    src={item.imgsrc}
                    alt={item.title}
                    className="w-16 h-16 mr-4 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-500">{item.value}</p>
                  </div>
                </div>
                {/* <span className="text-lg font-bold">{item.price}</span> */}
              </div>
            ))}
          </div>
          {/* Total */}
          <div className="flex justify-between mb-8">
            <span className="font-bold text-xl">Total:</span>
            <span className="font-bold text-xl">{cartTotal.toFixed(2)}</span>
          </div>
          {/* Link to Payment page */}
          <Link to="/payment">
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Pay Now
            </button>
          </Link>
        </div>
      </div>
      <Footer />
      <FooterBotton />
    </div>
  );
};

export default Payment;
