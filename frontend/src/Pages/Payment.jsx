import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import Header2 from "../containers/Header2";
import axios from "axios";

const Payment = () => {
  const { items, cartTotal, emptyCart } = useCart();
  const [prefillData, setPrefillData] = useState({
    name: "",
    email: "",
    contact: "",
  });
  
   useEffect(() => {
    // Fetch data from local storage and set it in state
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setPrefillData({
        name: userData.name || "",
        email: userData.email || "",
        contact: userData.phone || "",
      });
    }
  }, []);

  const paymentHandler = async (event) => {
    const amount = cartTotal * 100;
    const currency = "INR";
    const receiptId = "1234567890";

    try {
      // Make API call to create order
      const orderResponse = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency,
          receipt: receiptId,
        }),
      });

      // Parse order response
      const order = await orderResponse.json();
      console.log("order", order);

      // Construct payment options
      const options = {
        key: "rzp_test_RLYPUkifycvYwu",
        amount,
        currency,
        name: prefillData.name,
        description: "Test Transaction",
        image: "https://i.ibb.co/5Y3m33n/test.png",
        order_id: order.id,
        handler: async function (response) {
          const body = { ...response };
          // Make API call to validate payment
          try {
            const validateResponse = await fetch(
              "http://localhost:5000/validate",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
              }
            );
            const jsonResponse = await validateResponse.json();
            console.log("jsonResponse", jsonResponse);
            if (jsonResponse.success) {
              // Clear the cart after successful payment
              emptyCart();
      
              // Redirect to the success page
              window.location.href = "http://localhost:5173";
            } else {
              // Handle payment failure
              alert("Payment failed. Please try again.");
            }
          } catch (error) {
            console.error("Error validating payment:", error);
          }
        },
        prefill: {
          name: prefillData.name,
          email: prefillData.email,
          contact: prefillData.contact,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
        callback_url: "http://localhost:5173/",
        redirect: true,
      };

      // Initialize Razorpay instance with options
      const rzp = new Razorpay(options);

      // Open Razorpay payment modal
      rzp.open();
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Error processing payment. Please try again later.");
    }

    event.preventDefault();
  };

  return (
    <div>
      <Header2 />
      <div className="flex flex-col items-center justify-center min-h-screen bg-magic2">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
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
              </div>
            ))}
          </div>
          <div className="flex justify-between mb-8">
            <span className="font-bold text-xl">Total:</span>
            <span className="font-bold text-xl">{cartTotal.toFixed(2)}</span>
          </div>
          <button
            onClick={paymentHandler}
            className="w-full py-4 bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
