import React from "react";
import style from "./HeaderBanned.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const HeaderBanned = () => {
  const { logout } = useAuth0();

  const handleLogOut = (e) => {
    e.preventDefault()
    logout({ returnTo: window.location.origin });
  };

  return (
    <div className={`container-fluid ${style.container}`}>
      <div className={`row ${style.row1}`}>
        <div className={`col-lg-3 ${style.col1}`}>
        </div>

        <div className={`col-lg-6 ${style.colPreg}`}>
            <button type="button" className={style.botonLogIn} onClick={handleLogOut}>Log Out</button>
        </div>
        <div className={`col-lg-3 ${style.col4}`}>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanned;
