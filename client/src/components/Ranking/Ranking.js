import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Ranking.module.css";
// import BannedUser from "../components/BannedUser";
import { useAuth0 } from "@auth0/auth0-react";
// import oro from '../images/oro.png';
// import plata from '../images/plata.png';
// import bronce from '../images/bronce.png';
import { getUsersRanking } from "../../redux/actions";
// import { Link } from "react-router-dom";
import Loading from "../Loading/LoadingComponent"

const Ranking = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const userInfo = useSelector(state => state.user)

  const [loading, setLoading] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  const [width, setWidth] = useState(window.innerWitdh);

  useEffect(() => {
    dispatch(getUsersRanking());
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
//   else if (isAuthenticated && user.email_verified === false) {
//     return (
//       <>
//         <NotVerified />
//         <div className={style.footer}>
//           <Footer />
//         </div>
//       </>
//     );
//   }
//    else if (isAuthenticated && userInfo.statusBanned === true) {
//     return (
//       <>
//         <BannedUser />
//         <div className={style.footer}>
//           <Footer />
//         </div>
//       </>
//     );
//   } 
  else return (
      <div className={style.fullContainer}>
        <div className={style.middleRow}>
          {/* Acá el contenido para logueados */}
            
          <div className={`container-fluid ${style.container}`}>
            <div className={`row align-items-start ${style.columnsname}`}>
              <p className={`col-2 ${style.userImageTop}`}></p>
              <p className={`col-1 ${style.colunmNroTop}`}>Nro.</p>
              <p className={`col-5 ${style.colunmNickTop}`}>Nickname</p>
              <p className={`col-2 ${style.colunmTeachTop}`}>Puntos</p>       
            </div>
            {/* { users.map((e) => e.myPosition === 1 ? 
            //   <Link to={`/user/${e.sub}`} className={style.toUser1}>
                <div
                className={userInfo.sub === e.sub ? `row align-items-start ${style.info1sub}` : `row align-items-start ${style.info1}`}
                key={e.sub}
                > 
                  <img
                    src={e.picture}
                    className={`col-1 ${style.userImage}`}
                    referrerPolicy="no-referrer"
                    alt={e.name}
                  />
                <p className={`col-1 ${style.colunmNro}`}><img src={oro} className={style.medal} alt="1" /></p>
                {width > 800 ? (
                  <p className={`col ${style.colunmNick}`}>{e.nickname}</p>
                ) : (
                  <p className={`col ${style.colunmNick}`}>{e.nickname.slice(0,15)}</p>
                )}
                <p className={`col ${style.colunmTeach}`}>{e.myTeachPoints}</p>
                <p className={`col-1 ${style.colunmResp}`}>{e.cantAns}</p>
                <p className={`col-1 ${style.colunmPreg}`}>{e.cantQuest}</p>
              </div>
            // </Link>
            : null )
            }
            { sort.includes('desc') &&
              ranking.map((e) => e.myPosition === 2 ? 
              <Link to={`/user/${e.sub}`} className={style.toUser1}>
                <div
                className={userInfo.sub === e.sub ? `row align-items-start ${style.info2sub}` : `row align-items-start ${style.info2}`}
                key={e.sub}
                >
                <img
                  src={e.picture}
                  className={`col-1 ${style.userImage}`}
                  referrerPolicy="no-referrer"
                  alt={e.name}
                />
                <p className={`col-1 ${style.colunmNro}`}><img src={plata} className={style.medal} alt="2" /></p>
                {width > 800 ? (
                  <p className={`col ${style.colunmNick}`}>{e.nickname}</p>
                ) : (
                  <p className={`col ${style.colunmNick}`}>{e.nickname.slice(0,13)}</p>
                )}
                <p className={`col ${style.colunmTeach}`}>{e.myTeachPoints}</p>
                <p className={`col-1 ${style.colunmResp}`}>{e.cantAns}</p>
                <p className={`col-1 ${style.colunmPreg}`}>{e.cantQuest}</p>
              </div>
            </Link> :
            null )
            }
            { sort.includes('desc') &&
              ranking.map((e) => e.myPosition === 3 ? 
              <Link to={`/user/${e.sub}`} className={style.toUser1}>
                <div
                className={userInfo.sub === e.sub ? `row align-items-start ${style.info3sub}` : `row align-items-start ${style.info3}`}
                key={e.sub}
                >
                <img
                  src={e.picture}
                  className={`col-1 ${style.userImage}`}
                  referrerPolicy="no-referrer"
                  alt={e.name}
                />
                <p className={`col-1 ${style.colunmNro}`}><img src={bronce} className={style.medal} alt="3" /></p>
                {width > 800 ? (
                  <p className={`col ${style.colunmNick}`}>{e.nickname}</p>
                ) : (
                  <p className={`col ${style.colunmNick}`}>{e.nickname.slice(0,13)}</p>
                )}
                <p className={`col ${style.colunmTeach}`}>{e.myTeachPoints}</p>
                <p className={`col-1 ${style.colunmResp}`}>{e.cantAns}</p>
                <p className={`col-1 ${style.colunmPreg}`}>{e.cantQuest}</p>
              </div> 
            </Link> :
            null )
            } */}
            {users?.map((e) => (
            //   <Link to={`/user/${e.sub}`} className={style.toUser1}>
                <div
                  className={userInfo.sub === e.sub ? `row align-items-start ${style.infosub}` : `row align-items-start ${style.info}`}
                  key={e.sub}
                >
                  <img
                    src={e.picture}
                    className={`col-2 ${style.userImage}`}
                    referrerPolicy="no-referrer"
                    alt={e.name}
                  />
                  <p className={`col-3 ${style.colunmNro}`}>{e.myPosition}</p>
                  {width > 800 ? (
                    <p className={`col-3 ${style.colunmNick}`}>{e.nickname}</p>
                  ) : (
                    <p className={`col-3 ${style.colunmNick}`}>{e.nickname.slice(0,15)}</p>
                  )}
                  <p className={`col-4 ${style.colunmTeach}`}>{e.totalPoints}</p>

                </div> )
            //   </Link> 
            )}
          </div>
          {/* <Paginated page={page} setPage={setPage} /> */}
        </div>
        {/* <div className={style.footer}>
          <Footer />
        </div> */}
      </div>
    );
};

export default Ranking;