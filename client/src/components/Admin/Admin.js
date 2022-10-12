import React from "react";
import Footer from "../Footer/Footer";
import style from "./Admin.module.css";
import { useSelector } from "react-redux";
import BotonesAdmin from "./BotonesAdmin.js";
import NotFound from "../NotFound/NotFound";

const Admin = () => {
  
  const userInfo = useSelector((state) => state.user);

  if(userInfo.statusAdmin){
    return (
      <div className={style.container}>      
        <div>
          <p className={style.title}>Admin options</p>
            <BotonesAdmin />
          <p className={style.lowertitle}>Elegir la opción deseada</p>
        </div>
        {/* <div className={style.footer}>
          <Footer />
        </div> */}
      </div> 
    )
  } else {
    return (
      <>
        <NotFound />
      </>
    )
  }
};

export default Admin;
