import React from 'react'
import style from './Footer2.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const github = 'https://github.com/lucianommorea'
const linkedIn = 'https://www.linkedin.com/in/luciano-morea/'

function Footer2() {
  return (
    <div className={style.footer}>
        <div className={style.menu2}>
            <div className={style.icon1}>
              <a href={linkedIn} className={style.link} target="_blank" rel="noreferrer">   
                <LinkedInIcon fontSize='medium' />
              </a>
            </div>
            
            <div className={style.icon2}>
              <a href={github} className={style.link} target="_blank" rel="noreferrer">   
              <GitHubIcon fontSize='medium'/> 
              </a>
            </div>

            <div className={style.icon2}>
              <a href='mailto:lucianommorea@gmail.com' className={style.link} target="_blank" rel="noreferrer">   
              <EmailIcon fontSize='medium'/> 
              </a>
            </div>
        </div>
        <div className={style.me}>
            @2022 Desarrollado por Luciano Morea    
        </div>
    </div>
  )
}

export default Footer2