import { useState } from "react";
import axios from "axios";

function RegistrationForm({ showLoginFormCallback }) {
  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistrationFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/signup", formData)
      .then((res) => {
        setRegistrationSuccess(true);
        console.log(res.data); // Log the response from the server
      })
      .catch((err) => console.log(err));
  };

  // If registration success, trigger the callback to show login form
  if (registrationSuccess) {
    showLoginFormCallback();
  }

  // Email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-black">BECOME A MEMBER</h2>
      <form onSubmit={handleRegistrationFormSubmit}>
        <div className="flex flex-col justify-start items-start">
          <span className="text-black font-semibold mx-1 text-xl">
            User Name:
          </span>
          <input
            type="text"
            placeholder="User Name"
            value={formData.userName}
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
            className="block w-full border border-gray-300 rounded-md py-2 px-4 mb-4 text-black"
            required
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <span className="text-black font-semibold mx-1 text-xl">
            First Name:
          </span>
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="block w-full border border-gray-300 rounded-md py-2 px-4 mb-4 text-black"
            required
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <span className="text-black font-semibold mx-1 text-xl">
            Last Name:
          </span>
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="block w-full border border-gray-300 rounded-md py-2 px-4 mb-4 text-black"
            required
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <span className="text-black font-semibold mx-1 text-xl">Email:</span>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="block w-full border border-gray-300 rounded-md py-2 px-4 mb-4 text-black"
            required
            pattern={emailPattern.source}
            title="Please enter a valid email address"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <span className="text-black font-semibold mx-1 text-xl">Phone:</span>
          <input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })
            }
            className="block w-full border border-gray-300 rounded-md py-2 px-4 mb-4 text-black"
            required
            maxLength={10}
            pattern="[0-9]{10}"
            title="Please enter a 10-digit phone number"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <span className="text-black font-semibold mx-1 text-xl">
            Password:
          </span>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="block w-full border border-gray-300 rounded-md py-2 px-4 mb-4 text-black"
            required
            minLength={6}
            title="Password must be at least 6 characters long"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-black">
        Already a member?{" "}
        <button className="underline" onClick={showLoginFormCallback}>
          Sign in
        </button>
      </p>
    </div>
  );
}

export default RegistrationForm;