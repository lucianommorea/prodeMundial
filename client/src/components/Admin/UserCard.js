import React from "react";
import style from "./UserCard.module.css";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useSelector } from "react-redux";

const UserCard = ({ email, nickname, statusBanned, sub, points, setBanFlag, setInput}) => {
  
  const banUser = (e) => {
    e.preventDefault();
    setInput("");
    let modify = { statusBanned: !statusBanned };
    axios.put(`/user/${sub}`, modify);
    setBanFlag((prevFlag) => !prevFlag);
    setInput("");
  };

  const confirmBanUser = (e) => {
    confirmAlert({
      title: "Cambiar statusBan del usuario",
      message: "¿Está seguro?",
      buttons: [
        {
          label: "Sí",
          onClick: () => banUser(e),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const dark = useSelector((state) => state.dark);

  const darkmode = {
    backgroundColor: dark ? "rgb(11, 13, 43)" : "#BEBECC",
    color: dark ? "rgb(199, 199, 201)" : null,
    boxShadow: "0px 0px 2px white",
    border: dark ? "none" : null,
    marginBottom: dark ? "0.7vh" : null,
  };

  return (
    <div className={`container-fluid ${style.container}`} style={darkmode}>
      <div className={`row ${style.row}`}>
        <div className={`col-2 ${style.column}`}>
          <p>{nickname}</p>
        </div>
        <div className={`col-3 ${style.column}`}>
          <p>{sub}</p>
        </div>
        <div className={`col-2 ${style.column}`}>
          <p>{email}</p>
        </div>
        <div className={`col  ${style.column}`}>
          <p>{points}</p>
        </div>
        <div className={`col  ${style.column}`}>
          <p>{String(statusBanned)}</p>
        </div>
        <div className={`col  ${style.column}`}>
          <button
            className={
              statusBanned === false ? style.unbanButton : style.banButton
            }
            onClick={(e) => confirmBanUser(e)}
          >
            Ban
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
