import React, { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [fData, setFData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFData({ ...fData, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/newsletter", fData)
      .then((res) => {
          console.log(res.data);

          setFData({
            name:"",
            email:"",
          })
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="px-3 pt-28 pb-10 sm:px-24 flex flex-col gap-7 overflow-x-hidden">
      <div className="flex gap-6 font-semibold sm:text-3xl text-xl">
        <p>Subscribe to Newsletter</p>
      </div>
      <div className="sm:flex gap-5 overflow-hidden">
        <form onSubmit={formSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label htmlFor="name" className="mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={fData.name}
                onChange={handleInputChange}
                required
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={fData.email}
                onChange={handleInputChange}
                required
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
