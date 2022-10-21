import React, {useEffect} from 'react';
import  {useSelector, useDispatch } from 'react-redux'
import { getAllTeams, getWorldCup } from '../../redux/actions';
import style from './Champion.module.css';
import cup from '../../images/copa-mundial.png';
import best from '../../images/balondeoro.png'

function Champion() {

    const worldcup = useSelector(state=> state.worldcup);
    const teams = useSelector(state=> state.teams)
    // const dispatch = useDispatch();
    let champion = teams?.find(team => team.name.toUpperCase() === worldcup.first.toUpperCase());

    // useEffect(() => {
    //     dispatch(getWorldCup());
    //     dispatch(getAllTeams())
    // }, [dispatch])
    

    return (
        <div>
        {
            worldcup.first && worldcup.bestPlayer ?
            <div className={style.card} >
            <div className={style.game}>
                <div className={style.next}>
                    Campeon del Mundo
                </div>
            
                <div className={style.points}>
                    {
                        champion &&     
                        <div className={style.nextGame}>
                            <img    src={champion.img}
                                    alt=''
                                    className={style.flag}
                            />
                            <div className={style.premio}>
                            {champion.name}
                            </div>
                            <img src={cup}
                                alt=''
                                className={style.cup}
                            />
                        </div>                
                    }
                </div>
                <div className={style.next}>
                    Mejor Jugador
                </div>
            
                <span className={style.premio}>
                    {worldcup.bestPlayer} 
                </span>

                <img    src={best}
                        alt=''
                        className={style.balon}
                />

            </div>
            </div> :
            null
        }
           
        </div>
    )
}

export default Champion