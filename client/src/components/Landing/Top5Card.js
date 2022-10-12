import React from "react";
import style from "./Top5Card.module.css";
import { Link } from 'react-router-dom';

const Top5Card = ({ nickname, position, points, sub }) => {
  return (
    <div className={`container-fluid ${style.container}`}>
      <div className={`row ${style.row}`}>
        <div className={`col-2 ${style.column1}`}>
          <p>{position}</p>
        </div>
        <div className={`col-7 ${style.column}`}>
          <Link to={`/user/${sub}`} className={style.toUser}>
            <p>{nickname}</p>
          </Link>
        </div>
        <div className={`col-3  ${style.column}`}>
          <p>{points}</p>
        </div>
      </div>
    </div>
  );
};

export default Top5Card;