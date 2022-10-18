import React from "react";
import logoQatar from '../../images/qatar2022.png'
import style from "./HeaderLoading.module.css";


const HeaderLoading = () => {
  return (
    <div className={`container-fluid ${style.container}`}>
      <div className={`row ${style.row1}`}>
        <div className={`col-lg-3 ${style.col1}`}>
            <img className={style.logo} src={logoQatar} alt="logo" />
        </div>
          <div className={style.linksInt}>
            Cargando...
          </div>
      </div>
    </div>
  );
};

export default HeaderLoading;
