import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import axios from "axios";

const InsideContactUs = () => {
  const [contactFormData, setContactFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const submitForm = (e) => {
      e.preventDefault();
      // console.log(contactFormData);
      axios
      .post("http://localhost:8081/contactus",contactFormData)
      .then((res)=>{
        console.log(res.data);

        setContactFormData({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
      });
      })
  }

  return (
    <div className="bg-magic2 px-3 py-28 sm:px-24 w-screen">
      <div className="flex gap-20 items-center justify-center flex-wrap">
        <div className="flex gap-4">
          <LocationOnOutlinedIcon
            sx={{ backgroundColor: "#435C51", height: 30, width: 30 }}
            className="text-white rounded-lg "
          />
          <p>
            B/605 Ganesh Glory 11,
            <br /> Jagatpur Road, Gota,
            <br /> Ahmedabad
          </p>
        </div>
        <div className="flex gap-4 mb-11">
          <MailOutlinedIcon
            sx={{ backgroundColor: "#435C51", height: 30, width: 30 }}
            className="text-white rounded-lg "
          />
          <p>contact@beayouskincare.com</p>
        </div>
        <div className="flex gap-4 mb-11">
          <PhoneIcon
            sx={{ backgroundColor: "#435C51", height: 30, width: 30 }}
            className="text-white rounded-lg "
          />
          <p>+91 8679142896</p>
        </div>
      </div>
      <div>
        <form class=" max-w-3xl mx-auto rounded-lg p-6 space-y-4 " onSubmit={submitForm}>
          <div class="grid grid-cols-1 gap-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label
                  for="firstname"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  First name<span class="text-red-500">*</span>
                </label>
                <input
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required=""
                  autocomplete="given-name"
                  type="text"
                  name="firstname"
                  value={contactFormData.firstname}
                  onChange={(e)=> {
                    setContactFormData({...contactFormData, firstname: e.target.value})
                  }}
                />
              </div>
              <div>
                <label
                  for="lastname"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Last name<span class="text-red-500">*</span>
                </label>
                <input
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required=""
                  autocomplete="family-name"
                  type="text"
                  name="lastname"
                  value={contactFormData.lastname}
                  onChange={(e)=> {
                    setContactFormData({...contactFormData, lastname: e.target.value})
                  }}
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Email<span class="text-red-500">*</span>
              </label>
              <input
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required=""
                name="email"
                value={contactFormData.email}
                  onChange={(e)=> {
                    setContactFormData({...contactFormData, email: e.target.value})
                  }}
              />
            </div>
            <div>
              <label
                for="message"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Message<span class="text-red-500">*</span>
              </label>
              <textarea
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                name="message"
                rows="5"
                required=""
                value={contactFormData.message}
                  onChange={(e)=> {
                    setContactFormData({...contactFormData, message: e.target.value})
                  }}
              ></textarea>
            </div>
            <div>
              <button type="submit" class="py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-magic focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Send Message<span class="sr-only">send message</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InsideContactUs;
