import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./BotonesAdmin.module.css";
import { toggleDarkmode } from "../../redux/actions";


export default function BotonesAdmin({usuariosOn, adminOn}) {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.dark);

  const toggleDark = () => {
    dispatch(toggleDarkmode());
  };

  const darkmode = {
    backgroundColor: dark ? "rgb(18, 18, 18)" : null,
  };

  const darkButtonStyle = {
    backgroundColor: dark ? "rgb(209, 219, 255)" : null,
    border: dark ? "none" : null,
    color: dark ? "black" : null,
  };

  const buttonStylesUsuarios = {
    backgroundColor: usuariosOn ? "#ff8800" : dark ? "rgb(22, 43, 120)" : null,
    color: dark ? "white" : "black",
    border: dark ? "none" : null,
  };

  const buttonStylesAdmin = {
    backgroundColor: adminOn ? "#ff8800" : dark ? "rgb(22, 43, 120)" : null,
    color: dark ? "white" : "black",
    border: dark ? "none" : null,
  };

  return (
    <div>
      <div className={`container-fluid ${style.container}`} style={darkmode}>
        <div className={`row ${style.row}`}>
          <div className={`col-lg ${style.col}`}>
            <div className="d-grid gap-2 mx-auto">
              <button
                onClick={toggleDark}
                className={`btn btn-dark ${style.buttonAlertas}`}
                style={darkButtonStyle}
              >
                {dark ? "Modo nocturno OFF" : "Modo nocturno ON"}
              </button>
              <Link className={style.link} to="/statusadm/usuarios">
                <button
                  className={`btn btn-warning ${style.buttonUsuarios}`}
                  data-toggle="button"
                  type="button"
                  style={buttonStylesUsuarios}
                >
                  Lista usuarios
                </button>
              </Link>
              <Link className={style.link} to="/statusadm/admins">
                <button
                  className={`btn btn-warning ${style.buttonAdmin}`}
                  data-toggle="button"
                  type="button"
                  style={buttonStylesAdmin}
                >
                  Agregar Admin
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
