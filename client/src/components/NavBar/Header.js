import { Link, NavLink, useLocation } from "react-router-dom";
import React, {useState, useEffect} from "react";
import style from "./Header.module.css";
import Butlog from "./ButLog";
import logoQatar from '../../images/qatar2022.png'


const HeaderLogout = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);


  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div className={`container-fluid ${style.container}`}>
      <div className={`row ${style.row1}`}>
        <div className={`col-lg`}>
            {
                      width > 991
                        ? <Link to="/">
                            <img
                              className={style.logo}
                              src={logoQatar}
                              alt="logo"
                            />
                          </Link>
                        : <div className={`col-lg-3 ${style.colPreg}`}>
                            <Link to="/" className={ location.pathname === '/' ? style.linksIntActive : style.linksInt}>
                              Inicio
                            </Link>
                          </div>
            }
            
          </div>
          <div className={`col-lg-3 ${style.colPreg}`}>
            <NavLink to="/reglas" className={({isActive}) => isActive ? style.linksIntActive : style.linksInt}>
              Reglas
            </NavLink>
          </div>
          <div className={`col-lg-3 ${style.colPreg}`}>
            <NavLink to="/prode" className={({isActive}) => isActive ? style.linksIntActive : style.linksInt}>
              Simulador
            </NavLink>
          </div>
          {/* <div className={`col-lg-2 ${style.colRank}`}>
            <NavLink to="/ranking" className={({isActive}) => isActive ? style.linksIntActive : style.linksInt}>
              Ranking
            </NavLink>
          </div> */}

        <div className={`col-lg-3 ${style.col4} ${style.botonLogIn}`}>
          <div>
            <Butlog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogout;