import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './MisPremios.module.css';
import Loading from '../Loading/LoadingComponent';
import { useAuth0 } from "@auth0/auth0-react";
import { putUserInfo } from '../../redux/actions';
import oro from '../../images/oro.png';
import plata from '../../images/plata.png';
import bronce from '../../images/bronce.png';
import balondeoro from '../../images/balondeoro.png';
import Footer from '../Footer/Footer';


export default function MisPremios() {

    const dispatch = useDispatch()
    let userInfo = useSelector(state=> state.user);
    const { isAuthenticated, isLoading } = useAuth0();
    let [champion, setChampion] = useState(userInfo.first)
    let [second, setSecond] = useState(userInfo.second)
    let [third, setThird] = useState(userInfo.third)
    let [bestPlayer, setBestPlayer] = useState(userInfo.bestPlayer);
    let [input1, setInput1] = useState(false);
    let [input2, setInput2] = useState(false);
    let [input3, setInput3] = useState(false);
    let [input4, setInput4] = useState(false);
    let [loading, setLoading] = useState(true);

    console.log(userInfo);

    useEffect(() => {
        setChampion(userInfo.first);
        setSecond(userInfo.second);
        setThird(userInfo.third);
        setBestPlayer(userInfo.bestPlayer);
    }, [])


    function handleInput1() {
        setInput1(!input1)
    }

    function handleInput2() {
        setInput2(!input2)
    }

    function handleInput3() {
        setInput3(!input3)
    }

    function handleInput4() {
        setInput4(!input4)
    }

    function handleChangeChampion(e){
        e.preventDefault();
        setChampion(e.target.value);
    };

    function handleChangeSecond(e){
        e.preventDefault();
        setSecond(e.target.value);
    };

    function handleChangeThird(e){
        e.preventDefault();
        setThird(e.target.value);
    };

    function handleChangeBestPlayer(e){
        e.preventDefault();
        setBestPlayer(e.target.value);
    };

    async function handleConfirmChampion(){
        let newChampion = {first: champion};
        await dispatch(putUserInfo(userInfo.sub, newChampion, setLoading, null));
        setInput1(!input1)
    };

    async function handleConfirmSecond(){
        let newSecond = {second: second};
        await dispatch(putUserInfo(userInfo.sub, newSecond, setLoading, null));
        setInput2(!input2)
    };

    async function handleConfirmThird(){
        let newThird = {third: third};
        await dispatch(putUserInfo(userInfo.sub, newThird, setLoading, null));
        setInput3(!input3)
    };

    async function handleConfirmBestPlayer(){
        let newBestPlayer = {bestPlayer: bestPlayer};
        await dispatch(putUserInfo(userInfo.sub, newBestPlayer, setLoading, null));
        setInput4(!input4)
    };

    let fecha = new Date()
    // let dateGrupos = new Date("2022, 09, 19");
    let dateGrupos = new Date("2022, 11, 20");

    
    if(loading) {
        setTimeout(() => {
              setLoading(false)
        }, 3000)
            return <Loading />
    }
    if(isLoading) {
        return <Loading />
      }
    else if (isAuthenticated) {   
        return (
        <div className={style.back}>
            <div className={style.title}>
                <h2>Mis Premios</h2>
            </div>
            <div className={style.up}>
                <div className={style.left}> 
                    <div className={style.subtitle}>
                        <h4>Mi Campeón</h4>
                        <img src={oro} alt='' className={style.medal}></img>
                    </div>
                    <div className={style.complete}>
                    {   
                        !input1 ?
                        <div className={style.div1}> {userInfo.first || 'Sin determinar'} </div> :
                        <input className={style.input} type='text' defaultValue={userInfo.first} onChange={handleChangeChampion} /> 
                    }
                    {   
                        fecha < dateGrupos ?
                        <div>
                            <button className={ !input1 ? style.btn : style.none} onClick={handleInput1}>
                                Modificar
                            </button> 
                            <button className={ !input1 ? style.none : style.btn } onClick={handleConfirmChampion}>
                                Confirmar
                            </button>
                        </div> :
                        null
                    }

                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.subtitle}>
                        <h4>Mi Subcampeón</h4>
                        <img src={plata} alt='' className={style.medal}></img>
                    </div>
                    <div className={style.complete}>
                        {   
                            !input2 ?
                            <div className={style.div1}> {userInfo.second || 'Sin determinar'} </div> :
                            <input className={style.input} type='text' defaultValue={userInfo.second} onChange={handleChangeSecond} /> 
                        }
                        {   
                            fecha < dateGrupos ?
                            <div>
                                <button className={ !input2 ? style.btn : style.none} onClick={handleInput2}>
                                    Modificar
                                </button> 
                                <button className={ !input2 ? style.none : style.btn } onClick={handleConfirmSecond}>
                                    Confirmar
                                </button>
                            </div> :
                            null
                        }
                    </div>
                </div>
            </div>
            <div className={style.down}>
                <div className={style.left}> 
                    <div>
                        <div className={style.subtitle}>
                            <h4>Mi Tercer Puesto</h4>
                            <img src={bronce} alt='' className={style.medal}></img>
                        </div>
                        <div className={style.complete}>
                        {   
                            !input3 ?
                            <div className={style.div1}> {userInfo.third || 'Sin determinar'} </div> :
                            <input className={style.input} type='text' defaultValue={userInfo.third} onChange={handleChangeThird} />
                        }
                        {   
                            fecha < dateGrupos ?
                            <div>
                                <button className={ !input3 ? style.btn : style.none} onClick={handleInput3}>
                                    Modificar
                                </button> 
                                <button className={ !input3 ? style.none : style.btn } onClick={handleConfirmThird}>
                                    Confirmar
                                </button>
                            </div> :
                            null
                        } 
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.subtitle}>
                        <h4>Mi Mejor Jugador</h4>
                        <img src={balondeoro} alt='' className={style.medal}></img>
                    </div>
                    <div className={style.complete}>
                    {   
                        !input4 ?
                        <div className={style.div1}> {userInfo.bestPlayer || 'Sin determinar'} </div> :
                        <input className={style.input} type='text' defaultValue={userInfo.bestPlayer} onChange={handleChangeBestPlayer} />
                    }
                    {   
                        fecha < dateGrupos ?
                        <div>
                            <button className={ !input4 ? style.btn : style.none} onClick={handleInput4}>
                                Modificar
                            </button> 
                            <button className={ !input4 ? style.none : style.btn } onClick={handleConfirmBestPlayer}>
                                Confirmar
                            </button>
                        </div> :
                        null
                    }  
                    </div>
                </div>
            </div>
            <div className={style.octavos}>
                <div className={style.subtitle}>
                    <h4 className={style.clasificados}>Mis clasificados a Octavos de Final</h4>
                </div>
                <div className={`row`}>
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo A </div>
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[0] ? userInfo.octavos[0] : 'Sin completar'}</div>
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[1] ? userInfo.octavos[1] : 'Sin completar'}</div>
                </div>
                <div className={`row`}>
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo B </div>
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[2] ? userInfo.octavos[2] : 'Sin completar'}</div>
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[3] ? userInfo.octavos[3] : 'Sin completar'}</div>
                </div>
                <div className={`row`}>
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo C </div>
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[4] ? userInfo.octavos[4] : 'Sin completar'}</div>
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[5] ? userInfo.octavos[5] : 'Sin completar'}</div>
                </div>
                <div className={`row`}>
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo D </div>
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[6] ? userInfo.octavos[6] : 'Sin completar'}</div>
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[7] ? userInfo.octavos[7] : 'Sin completar'}</div>
                </div>
                <div className={`row`}> 
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo E </div>               
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[8] ? userInfo.octavos[8] : 'Sin completar'}</div>
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[9] ? userInfo.octavos[9] : 'Sin completar'}</div>
                </div>
                <div className={`row`}> 
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo F </div>  
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[10] ? userInfo.octavos[10] : 'Sin completar'}</div>
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[11] ? userInfo.octavos[11] : 'Sin completar'}</div>
                </div>
                <div className={`row`}> 
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo G </div>  
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[12] ? userInfo.octavos[12] : 'Sin completar'}</div>
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[13] ? userInfo.octavos[13] : 'Sin completar'}</div>
                </div>
                <div className={`row`}> 
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo H </div>  
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[14] ? userInfo.octavos[14] : 'Sin completar'}</div>
                    <div className={`col ${style.octavosCol}`}>{userInfo.octavos[15] ? userInfo.octavos[15] : 'Sin completar'}</div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
        )
    }
}