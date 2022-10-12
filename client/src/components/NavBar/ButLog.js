import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from './Header.module.css'

const Butlog = () => {
  const { loginWithRedirect } = useAuth0();

  const handleClick = (e) => {
    e.preventDefault()
    loginWithRedirect({appState: {
      returnTo: window.location.pathname
   }})
  }

  return (
    <button type="button" onClick={handleClick} className={style.btnLogIn}>
      Log in/Register
    </button>
  );
};

export default Butlog;