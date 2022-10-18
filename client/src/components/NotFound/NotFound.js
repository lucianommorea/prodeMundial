import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import style from './NotFound.module.css';
import Loading from '../Loading/LoadingComponent';
import mascota from '../../images/mascota.jpg';
import mascota2 from '../../images/mascota2.jpg';
import Footer from '../Footer/Footer';

export default function NotFound() {

    const [isLoading, setIsLoading] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=> {
        setIsLoading(true);
        window.addEventListener("resize", handleResize, false);
    }, [])

    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    if(isLoading) {
        setTimeout(() => {
              setIsLoading(false)
        }, 1000)
            return <Loading />
    }
    
    return (
        <div className={style.back}>
            <div id={style.notFoundCountry} > 
                {
                    width > 800 ?
                    <img src={mascota} alt='404-NOT FOUND' className={style.notFound}/> :
                    <img src={mascota2} alt='404-NOT FOUND' className={style.notFound2}/>
                }

            </div>
            <div id={style.btn}>
                <Link to='/'>   
                        <button> Volver al Inicio </button>
                </Link> 
            </div>
            <div className={style.footer}>
                <Footer />
            </div>
        </div>
    )
}