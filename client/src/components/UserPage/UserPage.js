import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./UserPage.module.css";
import Loading from "../Loading/LoadingComponent";
import BannedUser from "../GeneralComponents/BannedUser";
import Footer from '../Footer/Footer'
import { useParams } from "react-router-dom";
import { getAllGames, getAllUsers, getUserId2 } from "../../redux/actions";
import NotFound from "../NotFound/NotFound";
import CardLanding from '../Landing/CardLanding';
import CardPoints from '../Landing/CardPoints';
import Pronostico from "./Pronostico";


const UserPage = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const userInfo = useSelector((state) => state.userProfile);
  const userLogged = useSelector((state) => state.user);
  const users = useSelector(state=> state.users);
  const dispatch = useDispatch();
  const { sub } = useParams();
  const [loading, setLoading] = useState(true);
  const index = users.findIndex(user => user.sub === userInfo.sub);
  let games = useSelector(state=> state.games);

  useEffect(() => {
      dispatch(getAllGames(setLoading));
      dispatch(getAllUsers());
  }, [dispatch])

  useEffect(() => {
    // dispatch(getUsersRanking());
    if (isAuthenticated) {
      dispatch(getUserId2(sub, setLoading))
    }
  }, [dispatch, user, isAuthenticated, sub]);

  let fecha = new Date();
  let now = Date.now();
  // let dateGrupos = new Date("2022, 10, 19");
  // let dateOctavos = new Date("2022, 10, 13");
  // let dateCuartos = new Date("2022, 10, 13");
  // let dateSemis = new Date("2022, 10, 13");
  // let dateFinales = new Date("2022, 10, 13");
  let dateGrupos = new Date("2022, 11, 20");
  let dateOctavos = new Date("2022, 12, 03");
  let dateCuartos = new Date("2022, 12, 09");
  let dateSemis = new Date("2022, 12, 13");
  let dateFinales = new Date("2022, 12, 17");

  console.log(fecha)
  console.log(now)
  console.log(dateGrupos)
  console.log(dateGrupos.toLocaleDateString())
  console.log(dateGrupos.toString())
  console.log(now > dateGrupos)
  console.log(fecha > dateGrupos)

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } 
  // else if (user.email_verified === false) {
  //   return (
  //     <>
  //       <NotVerified />
  //       <div className={style.footer}>
  //         <Footer />
  //       </div>
  //     </>
  //   );
  // } 
  else if (userLogged.statusBanned === true) {
    return (
      <>
        <BannedUser />
        <div className={style.footer}>
          <Footer />
        </div>
      </>
    );
  } 
  else if(loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if(!userInfo.sub) {
    return <NotFound />
  }
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
            
            <div className={style.allResults}>
              <h4 className={style.title}>Pronosticos </h4>
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
              
              <div className={`row ${ (fecha.toLocaleDateString() > dateGrupos.toLocaleDateString() || fecha.toString() > dateGrupos.toString() ) ? style.resultados : style.none }`}> 
                  <div>
                      {   
                          (fecha.toLocaleDateString() > dateGrupos.toLocaleDateString() || fecha.toString() > dateGrupos.toString() ) ?
                          <div className={style.fase}>Primera Fase</div> :
                          null
                      }
                      {   
                          (fecha.toLocaleDateString() > dateGrupos.toLocaleDateString() || fecha.toString() > dateGrupos.toString() ) ?
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

              <div className={`row ${ (fecha.toLocaleDateString() > dateGrupos.toLocaleDateString() || fecha.toString() > dateGrupos.toString() ) ? style.resultados : style.none }`}> 
                  <div>
                      {   
                          (fecha.toLocaleDateString() > dateGrupos.toLocaleDateString() || fecha.toString() > dateGrupos.toString() ) ?
                          <div className={style.fase}>Premios</div> :
                          null
                      }
                      {   
                          (fecha.toLocaleDateString() > dateGrupos.toLocaleDateString() || fecha.toString() > dateGrupos.toString() ) ?
                          <>
                          <div className={`row`}>
                            <div className={`col-lg-6 ${style.pos}`}> Campeon: <span className={style.resu}>{userInfo.first}</span> </div>
                            <div className={`col-lg-6 ${style.pos}`}> Subcampeon: <span className={style.resu}>{userInfo.second}</span> </div>
                          </div>
                          <div className={`row`}>
                            <div className={`col-lg-6 ${style.pos}`}> Tercer Puesto: <span className={style.resu}>{userInfo.third}</span> </div>
                            <div className={`col-lg-6 ${style.pos}`}> Mejor Jugador: <span className={style.resu}>{userInfo.bestPlayer}</span> </div>
                          </div> 
                          </> :
                          null
                      }
                  </div>
              </div>
              <div className={`row ${ (fecha.toLocaleDateString() > dateGrupos.toLocaleDateString() || fecha.toString() > dateGrupos.toString() ) ? style.resultados : style.none }`}> 
                  <div>
                      {   
                          (fecha.toLocaleDateString() > dateGrupos.toLocaleDateString() || fecha.toString() > dateGrupos.toString() || now > dateGrupos ) ?
                          <div className={style.fase}>Clasificados</div> :
                          null
                      }
                      {   
                          (fecha.toLocaleDateString() > dateGrupos.toLocaleDateString() || fecha.toString() > dateGrupos.toString() ) ?
                          <>
                          <div className={style.pos}> Grupo A: <br></br> 1º <span className={style.resu}> {userInfo.octavos[0] ? userInfo.octavos[0] : 'Sin determinar'} </span>
                                                              2º <span className={style.resu}> {userInfo.octavos[1] ? userInfo.octavos[1] : 'Sin determinar'} </span>
                          </div>
                          <div className={style.pos}> Grupo B: <br></br> 1º <span className={style.resu}> {userInfo.octavos[2] ? userInfo.octavos[2] : 'Sin determinar'} </span>
                                                              2º <span className={style.resu}> {userInfo.octavos[3] ? userInfo.octavos[3] : 'Sin determinar'} </span>
                          </div>
                          <div className={style.pos}> Grupo C: <br></br> 1º <span className={style.resu}> {userInfo.octavos[4] ? userInfo.octavos[4] : 'Sin determinar'} </span>
                                                              2º <span className={style.resu}> {userInfo.octavos[5] ? userInfo.octavos[5] : 'Sin determinar'} </span>
                          </div>
                          <div className={style.pos}> Grupo D: <br></br> 1º <span className={style.resu}> {userInfo.octavos[6] ? userInfo.octavos[6] : 'Sin determinar'} </span>
                                                              2º <span className={style.resu}> {userInfo.octavos[7] ? userInfo.octavos[7] : 'Sin determinar'} </span>
                          </div>
                          <div className={style.pos}> Grupo E: <br></br> 1º <span className={style.resu}> {userInfo.octavos[8] ? userInfo.octavos[8] : 'Sin determinar'} </span>
                                                              2º <span className={style.resu}> {userInfo.octavos[9] ? userInfo.octavos[9] : 'Sin determinar'} </span>
                          </div>
                          <div className={style.pos}> Grupo F: <br></br> 1º <span className={style.resu}> {userInfo.octavos[10] ? userInfo.octavos[10] : 'Sin determinar'} </span>
                                                              2º <span className={style.resu}> {userInfo.octavos[11] ? userInfo.octavos[11] : 'Sin determinar'} </span>
                          </div>
                          <div className={style.pos}> Grupo G: <br></br> 1º <span className={style.resu}> {userInfo.octavos[12] ? userInfo.octavos[12] : 'Sin determinar'} </span>
                                                              2º <span className={style.resu}> {userInfo.octavos[13] ? userInfo.octavos[13] : 'Sin determinar'} </span>
                          </div>
                          <div className={style.pos}> Grupo H: <br></br> 1º <span className={style.resu}> {userInfo.octavos[14] ? userInfo.octavos[14] : 'Sin determinar'} </span>
                                                              2º <span className={style.resu}> {userInfo.octavos[15] ? userInfo.octavos[15] : 'Sin determinar'} </span>
                          </div>
                          </> :
                          <div className={style.notResult}>
                            Los primeros pronósticos de {userInfo.name} se verán a partir del 20 de Noviembre de 2022, cuando comience el Mundial.
                          </div>
                      }
                  </div>
              </div>
            </div>

            <div className={style.fantasma}>

            </div>
            <div className={style.footer}>
              <Footer />
            </div>
        </div>
    );
};

export default UserPage;
