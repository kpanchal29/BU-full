import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "react-use-cart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
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

  return (
    <div>
      <Badge badgeContent={isOpen ? 0 : totalItems} color="primary">
        <ShoppingCartIcon
          onClick={toggleDrawer}
          className="cursor-pointer text-white"
        />
      </Badge>
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">
            Cart ({totalUniqueItems}) total Items: ({totalItems})
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={toggleDrawer}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
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
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded-l"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span className="bg-white text-gray-700 font-semibold py-1 px-4">
                    {item.quantity}
                  </span>
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded-r"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
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
        <div className="p-4 border-t flex justify-between items-center">
          <div>
            <p className="text-gray-500 font-bold">Total Amount:</p>
            <p className="text-2xl font-bold text-black">₹{cartTotal}</p>
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => (window.location.href = "/checkout")}
          >
          Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
