import React, { useState } from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CloseIcon from "@mui/icons-material/Close";
import LoginForm from "../components/loginForm";
import RegistrationForm from "./registrationForm";

function LoginFormPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showJoinForm, setShowJoinForm] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
    closePopup();
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const showJoinFormCallback = () => {
    setShowJoinForm(true);
  };

  const showLoginFormCallback = () => {
    setShowJoinForm(false);
  };

  return (
    <div>
      {/* Button to trigger the pop-up */}
      <button onClick={openPopup} className="text-white font-bold rounded">
        <ManageAccountsIcon />
      </button>
      {/* Pop-up container */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Pop-up box */}
          <div className="bg-white p-6 rounded shadow-lg text-center relative">
            {/* Close button */}
            <span
              onClick={closePopup}
              className="absolute top-0 right-0 p-2 cursor-pointer text-black"
            >
              <CloseIcon />
            </span>
            {isLoggedIn ? (
              <div>
                <p className="text-black font-semibold text-2xl p-4">Welcome {username}</p>
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              showJoinForm ? (
                <RegistrationForm showLoginFormCallback={showLoginFormCallback} />
              ) : (
                <LoginForm onLoginSuccess={handleLoginSuccess} showJoinFormCallback={showJoinFormCallback} />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginFormPopup;
