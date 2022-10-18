import React from 'react';
import style from './BannedUser.module.css';

function BannedUser() {
  return (
    <div className={style.container}>        
        <p>Su cuenta ha sido suspendida por infringir las normas, comuníquese con un administrador para mas información.</p>        
    </div>
  )
}

export default BannedUser;