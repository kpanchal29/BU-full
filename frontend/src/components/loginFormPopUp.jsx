import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "@mui/material";
import LoginForm from "./loginForm";
import RegistrationForm from "./registrationForm";
import HomeMain from "../Pages/HomeMain";

function LoginFormPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showJoinForm, setShowJoinForm] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const showJoinFormCallback = () => {
    setShowLoginForm(false);
    setShowJoinForm(true);
  };

  const showLoginFormCallback = () => {
    setShowLoginForm(true);
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
            {showLoginForm && (
              <LoginForm
                showJoinFormCallback={showJoinFormCallback}
                closePopupCallback={closePopup}
              />
            )}
            {showJoinForm && (
              <RegistrationForm showLoginFormCallback={showLoginFormCallback} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginFormPopup;