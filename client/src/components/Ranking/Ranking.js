import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Ranking.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserId, getUsersRanking, getWorldCup } from "../../redux/actions";
import Loading from "../Loading/LoadingComponent";
import { Link, useNavigate } from 'react-router-dom';
import Paginated from "../Paginated/Paginated";
import Footer from "../Footer/Footer";
import Footer3 from "../Footer/Footer3";
import BannedUser from '../GeneralComponents/BannedUser';

const Ranking = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const userInfo = useSelector(state => state.user);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true)
  const { isAuthenticated, user } = useAuth0();
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsersRanking(page, setLoading));
    dispatch(getWorldCup(setIsLoading));
    dispatch(getUserId(user.sub))
  }, [dispatch, page]);


  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  function navigateTo() {
    navigate('/rankingprode');
  }


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
          {
            user.sub === "google-oauth2|112846913444083067920" || user.sub === "google-oauth2|104390713065538550530" ||  
            user.sub === "google-oauth2|100839931877560686273" || user.sub === "google-oauth2|117925862186927959268" ||  
            user.sub === "google-oauth2|102464354659192285279" || user.sub === "auth0|6372bfc832de0084d4edb6a6" ||
            user.sub === "auth0|637a2cae9b9c4feffbf6ddbc" || user.sub === "google-oauth2|113854506073878706366" ||
            user.sub === "google-oauth2|112059618905832159120" || user.sub === "auth0|6376b8cc32de0084d4edcf6e" ||
            user.sub === "auth0|637975c937595e4c9956735d" || user.sub === "google-oauth2|104833078696717606825" ||
            user.sub === "google-oauth2|106630260573000607895" || user.sub === "auth0|637a302ac0f8aabff64a5a46" ||
            user.sub === "auth0|637a2be437595e4c995674af" || user.sub === "google-oauth2|108300164928062839224" ||     
            user.sub === "google-oauth2|113301474339683192139" || user.sub === "google-oauth2|102654642075479264023" ||
            user.sub === "google-oauth2|110039047134883705915" || user.sub === "google-oauth2|113235571860404907654" ||
            user.sub === "google-oauth2|106876270763901161911" || user.sub === "auth0|6372a8dc9b9c4feffbf6b5bf" ||
            user.sub === "google-oauth2|103062773572419589423" || user.sub === "google-oauth2|108291660713821019132" ||
            user.sub === "google-oauth2|106307466001353733048" || user.sub === "google-oauth2|116052921635554878557" ||
            user.sub === "google-oauth2|111136597433280594146" || user.sub === "auth0|63755d65c0f8aabff64a44d1" ||
            user.sub === "auth0|6378d6cec3cfed678ac0d96b" || user.sub === "auth0|63756f0ea8b2c2ec60b2eb01" ||
            user.sub === "auth0|6360709688fc27a1c8a6f246" || user.sub === "google-oauth2|106181968528748102349" ||
            user.sub === "google-oauth2|105429461518880619446" || user.sub === "google-oauth2|107871195702048147770" ||  
            user.sub === "google-oauth2|116575952033160991892" || user.sub === "auth0|6379632aa8b2c2ec60b2ffe1" ||  
            user.sub === "auth0|637a2f508d21b4f604c91765" ?
            <button type="button" className={`btn btn-warning ${style.btnHide}`} onClick={navigateTo}>Prode</button> :
            null
          }
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
             { users.map((e) => e.myPosition === 1 ? 
               <Link to={`/user/${e.sub}`} className={style.toUser1}>
                <div
                className={userInfo.sub === e.sub ? `row align-items-start ${style.info1sub}` : `row align-items-start ${style.info1}`}
                key={e.sub}
                > 
                  <img
                    src={e.picture}
                    className={`col-2 ${style.userImage}`}
                    referrerPolicy="no-referrer"
                    alt=''
                    // alt={e.name}
                  />
                <p className={`col-3 ${style.colunmNro}`}>{e.myPosition}</p>
                {width > 800 ? (
                  <p className={`col-3 ${style.colunmNick}`}>{e.nickname}</p>
                ) : (
                  <p className={`col-3 ${style.colunmNick}`}>{e.nickname.slice(0,15)}</p>
                )}
                <p className={`col-4 ${style.colunmTeach}`}>{e.totalPoints}</p>
               
              </div>
              </Link>
            : null )
            }
            { users.map((e) => e.myPosition === 2 ? 
              <Link to={`/user/${e.sub}`} className={style.toUser1}>
                <div
                className={userInfo.sub === e.sub ? `row align-items-start ${style.info2sub}` : `row align-items-start ${style.info2}`}
                key={e.sub}
                >
                <img
                  src={e.picture}
                  className={`col-2 ${style.userImage}`}
                  referrerPolicy="no-referrer"
                  // alt={e.name}
                  alt=''
                />
                <p className={`col-3 ${style.colunmNro}`}>{e.myPosition}</p>
                {width > 800 ? (
                  <p className={`col-3 ${style.colunmNick}`}>{e.nickname}</p>
                ) : (
                  <p className={`col-3 ${style.colunmNick}`}>{e.nickname.slice(0,13)}</p>
                )}
                <p className={`col-4 ${style.colunmTeach}`}>{e.totalPoints}</p>
              </div>
            </Link> :
            null )
            }
            { users.map((e) => e.myPosition === 3 ? 
              <Link to={`/user/${e.sub}`} className={style.toUser1}>
                <div
                className={userInfo.sub === e.sub ? `row align-items-start ${style.info3sub}` : `row align-items-start ${style.info3}`}
                key={e.sub}
                >
                <img
                  src={e.picture}
                  className={`col-2 ${style.userImage}`}
                  referrerPolicy="no-referrer"
                  alt=''
                  // alt={e.name}
                />
                <p className={`col-3 ${style.colunmNro}`}>{e.myPosition}</p>
                {width > 800 ? (
                  <p className={`col-3 ${style.colunmNick}`}>{e.nickname}</p>
                ) : (
                  <p className={`col-3 ${style.colunmNick}`}>{e.nickname.slice(0,13)}</p>
                )}
                <p className={`col-4 ${style.colunmTeach}`}>{e.totalPoints}</p>
              </div> 
            </Link> :
            null )
            } 
            {users?.map((e) => e.myPosition > 3 ?  
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
                  <p className={`col-3 ${style.colunmNro}`}>{e.myPosition}</p>
                  {width > 800 ? (
                    <p className={`col-3 ${style.colunmNick}`}>{e.nickname}</p>
                  ) : (
                    <p className={`col-3 ${style.colunmNick}`}>{e.nickname.slice(0,15)}</p>
                  )}
                  <p className={`col-4 ${style.colunmTeach}`}>{e.totalPoints}</p>

                </div> 
               </Link> :
               null
            )}
          </div>
          <Paginated page={page} setPage={setPage} />
        </div>
        <div className={style.footer}>
          <Footer3 />
        </div>
      </div>
    );
};

export default Ranking;