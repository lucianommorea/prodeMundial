import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Ranking.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllUsersRanking, getWorldCup } from "../../redux/actions";
import Loading from "../Loading/LoadingComponent";
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Footer3 from "../Footer/Footer3";
import BannedUser from '../GeneralComponents/BannedUser';

const Ranking = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const userInfo = useSelector(state => state.user);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true)
  const { isAuthenticated } = useAuth0();
  const [width, setWidth] = useState(window.innerWidth);

  let usersRank = users.filter(u => u.sub === "google-oauth2|112846913444083067920" || u.sub === "google-oauth2|104390713065538550530" ||  
                                    u.sub === "google-oauth2|100839931877560686273" || u.sub === "google-oauth2|117925862186927959268" ||  
                                    u.sub === "google-oauth2|102464354659192285279" || u.sub === "auth0|6372bfc832de0084d4edb6a6" ||
                                    u.sub === "auth0|637a2cae9b9c4feffbf6ddbc" || u.sub === "google-oauth2|113854506073878706366" ||
                                    u.sub === "google-oauth2|112059618905832159120" || u.sub === "auth0|6376b8cc32de0084d4edcf6e" ||
                                    u.sub === "auth0|637975c937595e4c9956735d" || u.sub === "google-oauth2|104833078696717606825" ||
                                    u.sub === "google-oauth2|106630260573000607895" || u.sub === "auth0|637a302ac0f8aabff64a5a46" ||
                                    u.sub === "auth0|637a2be437595e4c995674af" || u.sub === "google-oauth2|108300164928062839224" ||     
                                    u.sub === "google-oauth2|113301474339683192139" || u.sub === "google-oauth2|102654642075479264023" ||
                                    u.sub === "google-oauth2|110039047134883705915" || u.sub === "google-oauth2|113235571860404907654" ||
                                    u.sub === "google-oauth2|106876270763901161911" || u.sub === "auth0|6372a8dc9b9c4feffbf6b5bf" ||
                                    u.sub === "google-oauth2|103062773572419589423" || u.sub === "google-oauth2|108291660713821019132" ||
                                    u.sub === "google-oauth2|106307466001353733048" || u.sub === "google-oauth2|116052921635554878557" ||
                                    u.sub === "google-oauth2|111136597433280594146" || u.sub === "auth0|63755d65c0f8aabff64a44d1" ||
                                    u.sub === "auth0|6378d6cec3cfed678ac0d96b" || u.sub === "auth0|63756f0ea8b2c2ec60b2eb01" ||
                                    u.sub === "auth0|6360709688fc27a1c8a6f246" || u.sub === "google-oauth2|106181968528748102349" ||
                                    u.sub === "google-oauth2|105429461518880619446" || u.sub === "google-oauth2|107871195702048147770" ||  
                                    u.sub === "google-oauth2|116575952033160991892" || u.sub === "auth0|6379632aa8b2c2ec60b2ffe1" ||  
                                    u.sub === "auth0|637a2f508d21b4f604c91765" 
  );

  useEffect(() => {
    dispatch(getAllUsersRanking(setLoading));
    dispatch(getWorldCup(setIsLoading))
  }, [dispatch]);


  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };


  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  } 
  if(isLoading) {
    // setTimeout(() => {
    //       setIsLoading(false)
    // }, 1000)
        return <Loading />
  }
   else if (isAuthenticated && userInfo.statusBanned === true) {
    return (
      <>
        <BannedUser />
        <div className={style.footer}>
          <Footer />
        </div>
      </>
    );
  } 
  else return (
      <div className={style.fullContainer}>
        <div className={style.middleRow}>
          <div className={style.title}>
                Ranking
          </div>    
            
          <div className={`container-fluid ${style.container}`}>
            <div className={`row align-items-start ${style.columnsname}`}>
              <p className={`col-2 ${style.userImageTop}`}></p>
              <p className={`col-1 ${style.colunmNroTop}`}>Posición</p>
              <p className={`col-5 ${style.colunmNickTop}`}>Nickname</p>
              <p className={`col-2 ${style.colunmTeachTop}`}>Puntos</p>       
            </div>

            {usersRank?.map((e) => 
              <Link to={`/user/${e.sub}`} className={style.toUser1}>
                <div
                  className={userInfo.sub === e.sub ? `row align-items-start ${style.infosub}` : `row align-items-start ${style.info}`}
                  key={e.sub}
                >
                  <img
                    src={e.picture}
                    className={`col-2 ${style.userImage}`}
                    referrerPolicy="no-referrer"
                    alt=''
                    // alt={e.name}
                  />
                  <p className={`col-3 ${style.colunmNro}`}>{usersRank.indexOf(e) + 1}</p>
                  {width > 800 ? (
                    <p className={`col-3 ${style.colunmNick}`}>{e.nickname}</p>
                  ) : (
                    <p className={`col-3 ${style.colunmNick}`}>{e.nickname.slice(0,15)}</p>
                  )}
                  <p className={`col-4 ${style.colunmTeach}`}>{e.totalPoints}</p>

                </div> 
               </Link> 
            )}
          </div>
        </div>
        <div className={style.footer}>
          <Footer3 />
        </div>
      </div>
    );
};

export default Ranking;