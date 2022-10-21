import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Ranking.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { getUsersRanking, getWorldCup } from "../../redux/actions";
import Loading from "../Loading/LoadingComponent";
import { Link } from 'react-router-dom';
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
  const { isAuthenticated } = useAuth0();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    dispatch(getUsersRanking(page, setLoading));
    dispatch(getWorldCup(setIsLoading))
  }, [dispatch, page]);


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