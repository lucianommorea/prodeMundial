import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Premios.module.css';
import Loading from '../Loading/LoadingComponent';
import { useAuth0 } from "@auth0/auth0-react";
import { getWorldCup, putBestPlayer, putChampion, putSecond, putThird } from '../../redux/actions';
import oro from '../../images/oro.png';
import plata from '../../images/plata.png';
import bronce from '../../images/bronce.png';
import balondeoro from '../../images/balondeoro.png';
import Footer from '../Footer/Footer';


export default function Premios() {

    const dispatch = useDispatch();
    const { isLoading } = useAuth0();
    let worldcup = useSelector(state=> state.worldcup);
    let [champion, setChampion] = useState(worldcup.first);
    let [second, setSecond] = useState(worldcup.second);
    let [third, setThird] = useState(worldcup.third);
    let [bestPlayer, setBestPlayer] = useState(worldcup.bestPlayer);
    let [input1, setInput1] = useState(false);
    let [input2, setInput2] = useState(false);
    let [input3, setInput3] = useState(false);
    let [input4, setInput4] = useState(false);
    let [loading, setLoading] = useState(true);
    let userInfo = useSelector(state=> state.user);

    useEffect(() => {
        dispatch(getWorldCup(setLoading))
      // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setChampion(worldcup.first);
        setSecond(worldcup.second);
        setThird(worldcup.third);
        setBestPlayer(worldcup.bestPlayer);
    }, [worldcup])

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
        await dispatch(putChampion(newChampion));
        setInput1(!input1)
    };

    async function handleConfirmSecond(){
        let newSecond = {second: second};
        await dispatch(putSecond(newSecond));
        setInput2(!input2)
    };

    async function handleConfirmThird(){
        let newThird = {third: third};
        await dispatch(putThird(newThird));
        setInput3(!input3)
    };

    async function handleConfirmBestPlayer(){
        let newBestPlayer = {bestPlayer: bestPlayer};
        await dispatch(putBestPlayer(newBestPlayer));
        setInput4(!input4)
    };


    
    if(loading) {
        // setTimeout(() => {
        //       setLoading(false)
        // }, 3000)
            return <Loading />
    }
    if(isLoading) {
        return <Loading />
      }
    else if (userInfo.statusAdmin) {   
        return (
        <div className={style.back}>
            <div className={style.title}>
                <h1>Premios</h1>
            </div>
            <div className={style.up}>
                <div className={style.left}> 
                    <div className={style.subtitle}>
                        <h4>Campeón</h4>
                        <img src={oro} alt='' className={style.medal}></img>
                    </div>
                    <div className={style.complete}>
                        {   
                            !input1 ?
                            <div className={style.div1}> {worldcup.first || 'Sin determinar'} </div> :
                            <input className={style.input} type='text' defaultValue={champion} onChange={handleChangeChampion} /> 
                        }
                            <button className={ !input1 ? style.btn : style.none} onClick={handleInput1}>
                                Modificar
                            </button> 
                            <button className={ !input1 ? style.none : style.btn } onClick={handleConfirmChampion}>
                                Confirmar
                            </button>
                    </div>
                </div>


                <div className={style.right}>
                    <div className={style.subtitle}>
                        <h4>Subcampeón</h4>
                        <img src={plata} alt='' className={style.medal}></img>
                    </div>
                    <div className={style.complete}>
                        {   
                            !input2 ?
                            <div className={style.div1}> {worldcup.second || 'Sin determinar'} </div> :
                            <input className={style.input} type='text' defaultValue={second} onChange={handleChangeSecond} /> 

                        }
                        <button className={ !input2 ? style.btn : style.none} onClick={handleInput2}>
                            Modificar
                        </button> 
                        <button className={ !input2 ? style.none : style.btn } onClick={handleConfirmSecond}>
                            Confirmar
                        </button>                        

                    </div>
                </div>
            </div>
            <div className={style.down}>
                <div className={style.left}> 
                    <div>
                        <div className={style.subtitle}>
                            <h4>Tercer Puesto</h4>
                            <img src={bronce} alt='' className={style.medal}></img>
                        </div>
                        <div className={style.complete}>
                            {   
                                !input3 ?
                                <div className={style.div1}> {worldcup.third || 'Sin determinar'} </div> :
                                <input className={style.input} type='text' defaultValue={third} onChange={handleChangeThird} />
                            }
                            <button className={ !input3 ? style.btn : style.none} onClick={handleInput3}>
                                Modificar
                            </button> 
                            <button className={ !input3 ? style.none : style.btn } onClick={handleConfirmThird}>
                                Confirmar
                            </button>                        
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.subtitle}>
                        <h4>Mejor Jugador</h4>
                        <img src={balondeoro} alt='' className={style.medal}></img>
                    </div>
                    <div className={style.complete}>
                    {   
                        !input4 ?
                        <div className={style.div1}> {worldcup.bestPlayer || 'Sin determinar'} </div> :
                        <input className={style.input} type='text' defaultValue={bestPlayer} onChange={handleChangeBestPlayer} />
                    }
                        <button className={ !input4 ? style.btn : style.none} onClick={handleInput4}>
                            Modificar
                        </button> 
                        <button className={ !input4 ? style.none : style.btn } onClick={handleConfirmBestPlayer}>
                            Confirmar
                        </button>                     
                    </div>
                </div>
            </div>
            <div className={style.octavos}>
                <div className={style.subtitle}>
                    <h4 className={style.clasificados}>Clasificados a Octavos de Final</h4>
                </div>
                <div className={`row`}>
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo A </div>
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[0] ? worldcup.octavos[0] : 'Sin determinar'}</div>
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[1] ? worldcup.octavos[1] : 'Sin determinar'}</div>
                </div>
                <div className={`row`}>
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo B </div>
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[2] ? worldcup.octavos[2] : 'Sin determinar'}</div>
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[3] ? worldcup.octavos[3] : 'Sin determinar'}</div>
                </div>
                <div className={`row`}>
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo C </div>
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[4] ? worldcup.octavos[4] : 'Sin determinar'}</div>
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[5] ? worldcup.octavos[5] : 'Sin determinar'}</div>
                </div>
                <div className={`row`}>
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo D </div>
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[6] ? worldcup.octavos[6] : 'Sin determinar'}</div>
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[7] ? worldcup.octavos[7] : 'Sin determinar'}</div>
                </div>
                <div className={`row`}> 
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo E </div>               
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[8] ? worldcup.octavos[8] : 'Sin determinar'}</div>
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[9] ? worldcup.octavos[9] : 'Sin determinar'}</div>
                </div>
                <div className={`row`}> 
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo F </div>  
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[10] ? worldcup.octavos[10] : 'Sin determinar'}</div>
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[11] ? worldcup.octavos[11] : 'Sin determinar'}</div>
                </div>
                <div className={`row`}> 
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo G </div>  
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[12] ? worldcup.octavos[12] : 'Sin determinar'}</div>
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[13] ? worldcup.octavos[13] : 'Sin determinar'}</div>
                </div>
                <div className={`row`}> 
                    <div className={`col-sm-2 ${style.octavosCol1}`}> Grupo H </div>  
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[14] ? worldcup.octavos[14] : 'Sin determinar'}</div>
                    <div className={`col ${style.octavosCol}`}>{worldcup.octavos[15] ? worldcup.octavos[15] : 'Sin determinar'}</div>
                </div>
            </div>
            <div className={style.fantasma}>

            </div>
            <div className={style.footer}>
                <Footer />
            </div>
        </div>
        )
    }
}