import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import Header2 from "../containers/Header2";
import axios from "axios";

const Payment = () => {
  const { items, cartTotal } = useCart(); // Get items and cartTotal from the useCart hook

  const paymentHandler = async (event) => {

    const amount = cartTotal * 100;
    const currency = 'INR';
    const receiptId = '1234567890';

    const response = await fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId
      })
    })

      const order = await response.json();
      console.log('order', order);


      var option = {
        key:"rzp_test_RLYPUkifycvYwu",
        amount,
        currency,
        name:"Web Codder",
        description: "Test Transaction",
        image:"https://i.ibb.co/5Y3m33n/test.png",
        order_id:order.id,
        handler: async function(response) {
          
          const body = {...response,}

          const validateResponse = await fetch('http://localhost:5000/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)

          })

          const jsonResponse = await validateResponse.json();

          console.log('jsonResponse', jsonResponse);
          
        },
        prefill: {
          name: "Web Coder", 
          email: "webcoder@example.com",
          contact: "9000000000", 
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      }

      var rzp1 = new Razorpay(option);
      rzp1.on("payment.failed", function(response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      })

      rzp1.open();
      event.preventDefault();
  }

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
