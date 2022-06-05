import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams , useNavigate} from 'react-router-dom'
import {getCountryById} from '../../redux/actions/actions'
import logo from '../../images/info3.png'
import {Link} from 'react-router-dom'
import s from './CountryDetail.module.css'

export default function Detail(){

    let { id } = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let detail = useSelector(state=> state.countryDetail);

    useEffect(()=> {
        dispatch(getCountryById(id))
    }, [dispatch, id])

    function formatNumber(number){
        return new Intl.NumberFormat().format(number)
    }

    return(
        <div className={s.all}>
                    <div className={s.up}>
                        <div id={s.flag}>
                            <img id={s.img} src={detail.img} alt={detail.name} />
                        </div>
                        <span className={s.name}>
                            {detail.name}
                        </span>
                    </div>
                    
                    <div className={s.down}>
                        <div id={s.cuadro}>
                            <span className={s.info}> Country Information</span>
                            <img id={s.maps} src={logo} alt='logo' />
                        </div>
                        <div className={s.cuadro}>
                            <span className={s.span1}>Code:</span>
                            <span className={s.span2}>{detail.id}</span>
                        </div>
                        <div className={s.cuadro}>
                            <span className={s.span1}>Continent:</span>
                            <span className={s.span2}>{detail.continents}</span>
                        </div>
                        <div className={s.cuadro}>
                            <span className={s.span1}>Capital:</span>
                            <span className={s.span2}>{detail.capital}</span>
                        </div>
                        <div className={s.cuadro}>
                            <span className={s.span1}>Subregion:</span>
                            <span className={s.span2}>{detail.subregion}</span>
                        </div>
                        <div className={s.cuadro}>
                            <span className={s.span1}>Area:</span>
                            <span className={s.span2}>{formatNumber(detail.area)} km2</span>
                        </div>
                        <div className={s.cuadro}>
                            <span className={s.span1}>Population</span>
                            <span className={s.span2}>{formatNumber(detail.population)}</span>
                        </div>
                    </div>
                
                <div className={s.card2}>
                    <div id={s.title}>
                        <p>Activities</p>
                    </div>
                        {
                            detail.activities && detail.activities.map(a=>{
                                return(
                                    <div key={a.id}>
                                        <div className={s.cuadro}>
                                            <span id={s.activity}>{a.name}</span>
                                        </div>
                                        <div className={s.cuadro}>
                                            <span className={s.span3}>Difficult:</span>
                                            <span className={s.span4}>{a.difficult}</span>
                                        </div>
                                        <div className={s.cuadro}>
                                            <span className={s.span3}>Duration:</span>
                                            <span className={s.span4}>{a.duration}</span>
                                        </div>
                                        <div className={s.cuadro}>
                                            <span className={s.span3}>Season:</span>
                                            <span className={s.span4}>{a.season}</span>
                                        </div>
                                    </div>
                                    )
                            })      
                        }
                </div>
                <div className={s.btn}>   
                    {/* <Link to='/home'>    */}
                        <button onClick={()=> navigate(-1)}> Back to countries </button>
                    {/* </Link>  */}
                </div> 
        </div>
        
    )
}
