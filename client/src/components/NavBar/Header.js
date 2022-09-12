import { Link } from "react-router-dom";
import logoQatar from '../../images/qatar2022.jpg'
import React, {useState} from "react";
import style from "./Header.module.css";
import Butlog from "./ButLog";

const HeaderLogout = () => {



  return (
    <div className={`container-fluid ${style.container}`}>
      <div className={`row ${style.row1}`}>
        <div className={`col-lg-3 ${style.col1}`}>
          <Link to="/">
              <img
                className={style.logo}
                src={logoQatar}
                alt="logo"
              />
            </Link>
        </div>

        <div className={`col-lg-6 ${style.colPreg}`}>
          {/* <Link to='/preguntar'>           */}
          <button className={style.linksInt}>
            Preguntar
          </button>
          {/* </Link> */}
        </div>
        <div className={`col-lg-3 ${style.col4}`}>
          <div className={style.botonLogIn}>
            <Butlog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogout;