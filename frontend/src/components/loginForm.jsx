import React, { useState, useEffect } from "react";
import axios from "axios";

function LoginForm({ onLoginSuccess, showJoinFormCallback }) {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    // Check if user data exists in local storage
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      // If user data exists, automatically log in the user
      onLoginSuccess(userData.userName);
    }
  }, []);

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", formData)
      .then((res) => {
        if (res.data.success) {
          alert("Login successful!");
          onLoginSuccess(formData.userName); // Pass username to parent component
          // Fetch user-specific data from the backend and store it in local storage
          axios
            .get(`http://localhost:8081/user-data/${formData.userName}`)
            .then((response) => {
              localStorage.setItem("userData", JSON.stringify(response.data));
            })
            .catch((error) => {
              console.error("Error fetching user data:", error);
            });
        } else {
          alert(res.data.message);
        }
      }) 
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-black">WELCOME BACK</h2>
      <p className="text-black mb-7 font-semibold opacity-70 text-xl">
        Sign in to access an enhanced shopping experience.
      </p>
      <form onSubmit={handleLoginFormSubmit}>
        <div className="flex flex-col justify-start items-start">
          <span className="text-black font-semibold mx-1 text-xl">
            Username:
          </span>
          <input
            type="text"
            placeholder="Username"
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
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Log in
        </button>
      </form>

      {/* Not a member? Sign Up button */}
      <p className="mt-4 text-black">
        Not a member?{" "}
        <button className="underline" onClick={showJoinFormCallback}>
          Sign up
        </button>
      </p>
    </div>
  );
}

export default LoginForm;
