import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./UserPage.module.css";
// import Footer from "../components/Footer.js";
// import { getUserInfo2 } from "../redux/actions";
import Loading from "../Loading/LoadingComponent";
// import NotVerified from "../components/NotVerified";
// import BannedUser from "../components/BannedUser";
import { useParams } from "react-router-dom";
import { getAllGames, getUserId2 } from "../../redux/actions";
// import NotFound from "./NotFound";
import CardLanding from '../Landing/CardLanding';
import CardPoints from '../Landing/CardPoints';
import Pronostico from "./Pronostico";


const UserPage = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const userInfo = useSelector((state) => state.userProfile);
  const users = useSelector(state=> state.users);
  const dispatch = useDispatch();
  const { sub } = useParams();
  const [loading, setLoading] = useState(true);
  const index = users.findIndex(user => user.sub === userInfo.sub);
  let games = useSelector(state=> state.games);

  useEffect(() => {
      dispatch(getAllGames());
  }, [dispatch])

  useEffect(() => {
    // dispatch(getUsersRanking());
    if (isAuthenticated) {
      dispatch(getUserId2(sub, setLoading))
    }
  }, [dispatch, user, isAuthenticated, sub]);

  let fecha = new Date()
  let dateGrupos = new Date("2022, 09, 19");
  // let dateOctavos = new Date("2022, 09, 19");
  // let dateCuartos = new Date("2022, 09, 19");
  // let dateSemis = new Date("2022, 09, 19");
  // let dateFinales = new Date("2022, 09, 19");
  // let dateGrupos = new Date("2022, 11, 20");
  let dateOctavos = new Date("2022, 12, 02");
  let dateCuartos = new Date("2022, 12, 08");
  let dateSemis = new Date("2022, 12, 12");
  let dateFinales = new Date("2022, 12, 16");

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } 
//   else if (user.email_verified === false) {
//     return (
//       <>
//         <NotVerified />
//         <div className={style.footer}>
//           <Footer />
//         </div>
//       </>
//     );
//   } 
//   else if (userInfo.statusBanned === true) {
//     return (
//       <>
//         <BannedUser />
//         <div className={style.footer}>
//           <Footer />
//         </div>
//       </>
//     );
//   } 
  else if(loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
//   if(!userInfo.sub) {
//     return <NotFound />
//   }
   else
    return (
        <div className={`container-fluid ${style.fullContainer}`}>
            <div className={`row ${style.perfil}`}> 
                <div className={`col-lg-1`}>  
                </div>
                <div className={`col-lg-4 ${style.col11}`}>
                  <div className={`row ${style.row} ${style.rowTitle}`}>
                    <span>Perfil</span>
                  </div>

                  <div className={`row ${style.row}`}>
                    <div className={`col-lg-6 ${style.col2} ${style.text}`}>
                      Nombre:
                    </div>
                    <div className={`col-lg-6 ${style.col2}`}>
                      {userInfo.name}
                    </div>
                 </div>

                 <div className={`row ${style.row}`}>
                    <div className={`col-lg-6 ${style.col2} ${style.text}`}>
                        Foto:
                    </div>
                    <div className={`col-lg-6 ${style.col2} ${style.photo}`}>
                        <div className={style.loader}>
                            <img src={userInfo.picture} alt="foto usuario" className={style.foto} referrerPolicy="no-referrer"/>
                        </div>
                    </div>
                  </div>

                  <div className={`row ${style.row}`}>
                    <div className={`col-lg-6 ${style.col2} ${style.text}`}>
                      Nickname:
                    </div>
                    <div className={`col-lg-6 ${style.col2}`}>
                      {userInfo.nickname}
                    </div>
                  </div>

                </div>

                <div className={`col-lg-1`}>  
                </div>

                <div className={`col-lg-4 ${style.col11}`}>
                    <div className={`row ${style.row} ${style.rowTitle}`}>
                        <span>Actividad</span>
                    </div>

                    <div className={`row ${style.row1}`}>
                        <div className={style.first}>
                            <CardPoints pointsUser={userInfo.totalPoints} />
                        </div>
                        <div className={style.first}>
                            <CardLanding myPosition={index+1} />
                        </div>

                    </div>
                </div>
            </div>

            <div className={`row ${fecha > dateFinales ? style.resultados : style.none }`}> 
                <div>
                    {   
                        fecha > dateFinales ?
                        <div className={style.fase}>Final y Tercer Puesto</div> :
                        null
                    }
                    {   
                        fecha > dateFinales ?
                        games.filter(g => g.id > 62 && g.id < 65).map(game=> <Pronostico 
                            img1={ game.local !== null ? game.local === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null }
                            team1={game.local !== null ? game.local === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                            result1={userInfo.userResults[game.id-1][0]}
                            img2={game.away !== null ? game.away === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null}
                            team2={game.away !== null ? game.away === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                            result2={userInfo.userResults[game.id-1][1]}
                            />) :
                            null
                    }
                </div>
            </div>

            <div className={`row ${fecha > dateSemis ? style.resultados : style.none }`}> 
                <div>
                    {   
                        fecha > dateSemis ?
                        <div className={style.fase}>Semifinales</div> :
                        null
                    }
                    {   
                        fecha > dateSemis ?
                        games.filter(g => g.id > 60 && g.id < 63).map(game=> <Pronostico 
                            img1={ game.local !== null ? game.local === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null }
                            team1={game.local !== null ? game.local === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                            result1={userInfo.userResults[game.id-1][0]}
                            img2={game.away !== null ? game.away === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null}
                            team2={game.away !== null ? game.away === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                            result2={userInfo.userResults[game.id-1][1]}
                            />) :
                            null
                    }
                </div>
            </div>

            <div className={`row ${fecha > dateCuartos ? style.resultados : style.none }`}> 
                <div >
                    {   
                        fecha > dateCuartos ?
                        <div className={style.fase}>Cuartos de Final</div> :
                        null
                    }
                    {   
                        fecha > dateCuartos ?
                        games.filter(g => g.id > 56 && g.id < 61).map(game=> <Pronostico 
                            img1={ game.local !== null ? game.local === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null }
                            team1={game.local !== null ? game.local === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                            result1={userInfo.userResults[game.id-1][0]}
                            img2={game.away !== null ? game.away === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null}
                            team2={game.away !== null ? game.away === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                            result2={userInfo.userResults[game.id-1][1]}
                            />) :
                            null
                    }
                </div>
            </div>

            <div className={`row ${fecha > dateOctavos ? style.resultados : style.none }`}> 
                <div>
                    {   
                        fecha > dateOctavos ?
                        <div className={style.fase}>Octavos de Final</div> :
                        null
                    }
                    {   
                        fecha > dateOctavos ?
                        games.filter(g => g.id > 48 && g.id < 57).map(game=> <Pronostico 
                            img1={ game.local !== null ? game.local === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null }
                            team1={game.local !== null ? game.local === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                            result1={userInfo.userResults[game.id-1][0]}
                            img2={game.away !== null ? game.away === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null}
                            team2={game.away !== null ? game.away === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                            result2={userInfo.userResults[game.id-1][1]}
                            />) :
                            null
                    }
                </div>
            </div>
            
            <div className={`row ${fecha > dateGrupos ? style.resultados : style.none }`}> 
                <div>
                    {   
                        fecha > dateGrupos ?
                        <div className={style.fase}>Primera Fase</div> :
                        null
                    }
                    {   
                        fecha > dateGrupos ?
                        games.filter(g => g.id > 0 && g.id < 49).map(game=> <Pronostico 
                            img1={ game.local !== null ? game.local === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null }
                            team1={game.local !== null ? game.local === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                            result1={userInfo.userResults[game.id-1][0]}
                            img2={game.away !== null ? game.away === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null}
                            team2={game.away !== null ? game.away === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                            result2={userInfo.userResults[game.id-1][1]}
                            />) :
                            null
                    }
                </div>
            </div>

            


        </div>
    );
};

export default UserPage;
