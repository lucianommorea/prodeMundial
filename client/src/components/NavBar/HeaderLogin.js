import { Link, NavLink, useLocation } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./HeaderLogin.module.css";
import { sendUserInfo } from "../../redux/actions/index";
import Header from "./Header";
import HeaderLoading from "./HeaderLoading";
import HeaderBanned from "./HeaderBanned";
import logoQatar from '../../images/qatar2022.png'

const Headerlogin = () => {
  const { isAuthenticated, isLoading, user, logout } = useAuth0();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(sendUserInfo(user));
    }
  }, [dispatch, user, isAuthenticated]);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const handleLogOut = () => {
    logout({ returnTo: window.location.origin });
  };

  if (isLoading) {
    return (
      <div>
        <HeaderLoading />
      </div>
    );
  } 
  
  if(isAuthenticated && userInfo.statusBanned === true){
    return (
      <>
        <HeaderBanned />
      </>
    )
  } else if (isAuthenticated) {
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
          <div className={`col-lg-2 ${style.colPreg}`}>
          {
            width > 991 ?
            <NavLink to="/reglas" className={({isActive}) => isActive ? style.linksIntActive : style.linksInt}>
              Reglas
            </NavLink> :
            null
          }
          </div>
          <div className={`col-lg-2 ${style.colPreg}`}>
            <NavLink to="/prode" className={({isActive}) => isActive ? style.linksIntActive : style.linksInt}>
              Simulador
            </NavLink>
          </div>
          <div className={`col-lg-2 ${style.colRank}`}>
            <NavLink to="/ranking" className={({isActive}) => isActive ? style.linksIntActive : style.linksInt}>
              Ranking
            </NavLink>
          </div>

          <div className={`col-lg-3 ${style.col4} ${style.imgNameLogOut}`}>
            <div className={style.padreDivs}>
              <Link
                to={`/configuracion/${userInfo.sub}`}
                className={style.contImagen}
              >
                <img
                  className={style.userImage}
                  src={userInfo.picture}
                  alt={userInfo.name}
                  referrerPolicy="no-referrer"
                />
              </Link>
              <div className="dropdown">
                <button
                  className={`
                    ${
                      width > 600
                        ? "btn btn-dark btn-secondary dropdown-toggle"
                        : "btn btn-dark btn-secondary btn-sm"
                    }
                    ${style.dropdown}
                  `}
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userInfo.name}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <Link className={style.linkDesp} to="/mispronosticos">
                      <p className="dropdown-item" href="#">
                        Mis pronosticos
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link className={style.linkDesp} to="/mispremios">
                      <p className="dropdown-item" href="#">
                        Mis premios
                      </p>
                    </Link>
                  </li>
                  <li>
                    {userInfo.statusAdmin ? (
                      <Link className={style.linkDesp} to="/resultados">
                        <p className="dropdown-item" href="#">
                          Resultados
                        </p>
                      </Link> ) :
                      null
                    }
                  </li>
                  <li>
                    {userInfo.statusAdmin ? (
                      <Link className={style.linkDesp} to="/premios">
                        <p className="dropdown-item" href="#">
                          Premios
                        </p>
                      </Link> ) :
                      null
                    }
                  </li>
                  <li>
                    {userInfo.statusAdmin ? (
                      <Link className={style.linkDesp} to="/statusAdm">
                        <p className="dropdown-item" href="#">
                          Admin
                        </p>
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    <Link
                      className={style.linkDesp}
                      to={`/configuracion/${userInfo.sub}`}
                    >
                      <p className="dropdown-item" href="#">
                        Configuración
                      </p>
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <p
                      onClick={handleLogOut}
                      className={`dropdown-item ${style.logOut}`}
                      href="#"
                    >
                      Log Out
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <>
        <Header />
      </>
    )
  }

};

export default Headerlogin;
