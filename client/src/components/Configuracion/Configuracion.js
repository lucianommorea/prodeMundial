import React, { useState, useEffect } from 'react';
import style from './Configuracion.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersRanking, getUserId, putUserInfo } from '../../redux/actions';
import CheckIcon from "@mui/icons-material/Check";
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import cloudinary from "cloudinary/lib/cloudinary";
import Loading from '../Loading/LoadingComponent';
import CardPoints from '../Landing/CardPoints';
import CardLanding from '../Landing/CardLanding';
import Footer from '../Footer/Footer';
import BannedUser from '../GeneralComponents/BannedUser'
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUD_NAME,
  api_key: process.env.REACT_APP_API_KEY.toString(),
  api_secret: process.env.REACT_APP_API_SECRET
});

function Configuracion() {

    let userInfo = useSelector(state=> state.user);
    let users = useSelector(state=> state.users);
    const dispatch = useDispatch();
    const [nameUser, setNameUser] = useState(false);
    const [loading2, setLoading2] = useState(true);
    const [input, setInput] = useState({
      name: "",
      nickname: "",
    });
    const [nicknameUser, setNicknameUser] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setInput({
          name: userInfo.name,
          nickname: userInfo.nickname,
        });
      }, [dispatch, userInfo]);

    
    function validate(input) {
        let errors = {};
        if (!input.name) errors.name = "Se requiere un Nombre";
        if (input.name.length > 20) errors.name = "Máximo 20 caracteres";
        if (!input.nickname) errors.nickname = "Se requiere un Nickname";
        if (input.nickname.length > 20) errors.nickname = "Máximo 20 caracteres";
        return errors;
    }

    function handlerChange(e) {
        e.preventDefault();
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
        setErrors(
          validate({
            ...input,
            [e.target.name]: e.target.value,
          })
        );
    }

    function handlerEditName(e) {
        e.preventDefault();
        setNameUser(true);
    }

    function handlerEditNickname(e) {
        e.preventDefault();
        setNicknameUser(true);
    }

    async function handlerConfirmEditNickname() {
        if (userInfo.nickname !== input.nickname) {
          await dispatch(
            putUserInfo(userInfo.sub, {
              nickname: input.nickname,
              nameChanges: userInfo.nameChanges,
            })
          );
          dispatch(getUserId(userInfo.sub));
          setNicknameUser(false);
          setErrors({});
        } else {
          setNicknameUser(false);
          setErrors({});
        }
    }

    async function handlerConfirmEditName() {
        await dispatch(
          putUserInfo(userInfo.sub, {
            name: input.name,
          })
        );
        dispatch(getUserId(userInfo.sub));
        setNameUser(false);
        setErrors({});
    }

    function handlerResetName(e){
        e.preventDefault();
        setNameUser(!nameUser);
        setInput({
            ...input,
            name: userInfo.name,
          });
    }

    function handlerResetNickname(e){
        e.preventDefault();
        setNicknameUser(!nicknameUser);
        setInput({
            ...input,
            nickname: userInfo.nickname,
          });
    }

    function handlerResetPhoto(e){
        e.preventDefault();
        setImage(null);
    }
    
// Upload Image

    const { isAuthenticated, user, isLoading } = useAuth0();
    const [ image, setImage ] = useState(null);
    const [ loading, setLoading ] = useState(false)
    const [ isModify, setIsModify ] = useState(false);
    const [ public_id_home , setPublicIdHome ] = useState("")


    useEffect(() => {
    dispatch(getAllUsersRanking())
      if (isAuthenticated) {
        dispatch(getUserId(user.sub));
        // setLoading(false)
      }
    // eslint-disable-next-line
    }, [isModify])

    const handleClick = () => {
      if(image !== null){
        dispatch(putUserInfo(userInfo.sub, {
          picture: image
        }, null, setIsModify))
        setTimeout(() => {
  
          cloudinary.v2.uploader.destroy(public_id_home, function(error,result) {
            console.log(result, error) })
            .then(resp => console.log(resp))
            .catch(_err=> console.log("Something went wrong, please try again later."));
  
        }, 4000);
      }
    }

    const uploadImage = async (e) => {
      const files = e.target.files
      if (files[0]) {
        setLoading(true)
        const data = new FormData()
        data.append('file', files[0])
        data.append("upload_preset", process.env.REACT_APP_PRESET_NAME);
        const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,data);
        const file = res.data

        const pre_public_id = userInfo.picture.split("/")
        const local = pre_public_id.length -1
        const elemento = pre_public_id[local]
        setPublicIdHome("prodeqatar/"+elemento.split(".")[0])

        setImage(file.secure_url)
        setLoading(false)
      }
    }

    // INDEX RANKING

    const index = users.findIndex(user => user.sub === userInfo.sub);

    if(loading2) {
        setTimeout(() => {
              setLoading2(false)
        }, 2000)
            return <Loading />
    }
    if(isLoading) {
            return <Loading />
    }
    else if (userInfo.statusBanned === true) {
        return (
        <>
          <BannedUser />
          <div className={style.footer}>
            <Footer />
          </div>
        </>
      );
    }  
    return (
        <div className={style.fullContainer}>

            <div className={style.title}>
                Mi Perfil
            </div>          
                <div className={style.foto}>
                    {   loading
                        ? <h6 className={style.picture}>Cargando...</h6>
                        : <img src={image || userInfo.picture} alt="foto usuario" className={style.picture} referrerPolicy="no-referrer"/>}
                    {/* <img src={userInfo.picture} alt="foto usuario" className={style.picture} referrerPolicy="no-referrer"/> */}
                </div>  
            <div className={style.cuadro}>
                <div className={style.name}>
                    <div className={style.top}>
                        <div className={`${style.col2} ${style.text}`}>
                            Nombre
                        </div>
                    </div>
                    <div className={style.middle}>
                        <div
                        className={
                            nameUser === false
                            ? style.col2
                            : style.col2modify
                        } 
                        >
                        {userInfo.name}
                        </div>
                        <div
                        className={
                            nameUser === true
                            ? style.col2
                            : style.col2modify
                        }
                        >
                            <input
                                className={
                                errors.name ? style.errorInputs : style.inputs
                                }
                                name="name"
                                type="text"
                                autoComplete="off"
                                value={input.name}
                                onChange={(e) => handlerChange(e)}
                            />
                            {errors.name && (
                                <div className={style.error}>
                                <span> {errors.name}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={style.bottom}>
                        <div
                            className={
                            nameUser === false
                            ? style.col2
                            : style.col2modify
                        }
                        >
                        <button
                            className={style.btn}
                            onClick={handlerEditName}
                        >
                            Modificar
                        </button>
                        </div>
                        <div
                        className={
                            nameUser === true
                            ? style.col2
                            : style.col2modify
                        }
                        >
                            <div
                                className={errors.name ? style.col2modify : style.check}
                            >
                                <CheckIcon
                                fontSize="large"
                                color="info"
                                cursor="pointer"
                                onClick={handlerConfirmEditName}
                                />
                                <SettingsBackupRestoreIcon                             
                                    fontSize="large"
                                    color="info"
                                    cursor="pointer"
                                    onClick={handlerResetName}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.changePhoto}>
                    <div className={style.top}>
                        <div className={`${style.col2} ${style.text}`}>
                            Foto
                        </div>
                    </div>
                    <div className={style.middle}>
                        <div className={style.colFile}>
                            <div className={style.btn2}>
                            <input  type="file"
                                    name="file"
                                    placeholder='Click para elegir'
                                    accept=".jpg, .jpeg, .png"
                                    className={style.btn2}
                                    onChange={(e)=>uploadImage(e)}
                            />
                            </div>
                            <div id="archivoseleccionado"></div>
                        </div>
                    </div>
                    <div className={style.bottom}>
                        <div className={style.col3}>
                            <button className={style.btn} onClick={handleClick} disabled={!image}>Cambiar Foto</button>
                            {image !== null &&
                                // <button onClick={handlerResetPhoto} className={style.btn1}>Reset</button>     
                                <SettingsBackupRestoreIcon                             
                                    fontSize="large"
                                    color="info"
                                    cursor="pointer"
                                    onClick={handlerResetPhoto}
                                />       
                            }
                        </div>
                    </div>
                </div>
                <div className={style.nickName}>
                <div className={style.top}>
                        <div className={`${style.col2} ${style.text}`}>
                            Nickname
                        </div>
                    </div>
                    <div className={style.middle}>
                        <div
                        className={
                            nicknameUser === false
                            ? style.col2
                            : style.col2modify
                        } 
                        >
                        {userInfo.nickname}
                        </div>
                        <div
                        className={
                            nicknameUser === true
                            ? style.col2
                            : style.col2modify
                        }
                        >
                            <input
                                className={
                                errors.nicknameUser ? style.errorInputs : style.inputs
                                }
                                name="nickname"
                                type="text"
                                autoComplete="off"
                                value={input.nickname}
                                onChange={(e) => handlerChange(e)}
                            />
                            {errors.nickname && (
                                <div className={style.error}>
                                <span> {errors.nickname}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={style.bottom}>
                        <div
                            className={
                            nicknameUser === false
                            ? style.col2
                            : style.col2modify
                        }
                        >
                        <button
                            className={style.btn}
                            onClick={handlerEditNickname}
                        >
                            Modificar
                        </button>
                        </div>
                        <div
                        className={
                            nicknameUser === true
                            ? style.col2
                            : style.col2modify
                        }
                        >
                            <div
                                className={errors.nickname ? style.col2modify : style.check}
                            >
                                <CheckIcon
                                fontSize="large"
                                color="info"
                                cursor="pointer"
                                onClick={handlerConfirmEditNickname}
                                />
                                <SettingsBackupRestoreIcon                             
                                    fontSize="large"
                                    color="info"
                                    cursor="pointer"
                                    onClick={handlerResetNickname}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.cuadro2}>
                <CardPoints pointsUser={userInfo.totalPoints} />
                <CardLanding myPosition={index+1}/>
            </div>
            <div className={style.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Configuracion