import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import style from "./ListaUsuarios.module.css";
import Paginated from "../Paginated/Paginated";
import { useEffect, useState } from "react";
import BotonesAdmin from "./BotonesAdmin";
import { getSearchUsers, getAllUsersNoAdmin, resetAllGames } from "../../redux/actions";
import NotFound from "../NotFound/NotFound";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";


const ListaUsuarios = () => {
  const usersNoAdmin = useSelector((state) => state.usersNoAdmin);
  const totalPages = useSelector((state) => state.totalPages);
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.dark);
  // eslint-disable-next-line
  const [usuariosOn, setListaUsuariosOn] = useState(true);


  const darkmode = {
    backgroundColor: dark ? "#6C1D45" : "#BEBEBE",
  };

  const darkSearchbar = {
    border: dark ? "none" : null,
    backgroundColor: dark ? "rgb(218, 219, 227)" : null,
  };

  const darkRefresh = {
    border: dark ? "none" : null,
    backgroundColor: dark ? "#cd75a1" : null,
    color: dark ? "black" : null,
  };

  const darkInfo = {
    backgroundColor: dark ? "#6C1D45" : "#cd75a1",
    color: dark ? "rgb(218, 219, 227)" : null,
  };

  const [usersFlag, setUsersFlag] = useState(true);
  const [usersPage, setUsersPage] = useState(1);
  const [banFlag, setBanFlag] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (usersPage > 1 && usersPage > totalPages) {
      setUsersPage((prev) => prev - 1);
    }
    if (input === "") {
      dispatch(getAllUsersNoAdmin(usersPage));
    }
  }, [dispatch, usersFlag, usersPage, totalPages, banFlag, input]);

  const onChangeSearch = (e) => {
    setInput(e.target.value);
    dispatch(getSearchUsers(1, e.target.value));
  };

  const handlerRefresh = (e) => {};

  async function resetAllResults(e){
    await dispatch(resetAllGames());
  }

  const confirmChange = (e) => {
    confirmAlert({
      title: "Resetear todos los resultados",
      message: "¿Está seguro?",
      buttons: [
        {
          label: "Sí",
          onClick: () => resetAllResults(e),
        },
        {
          label: "No",
        },
      ],
    });
  };


  if(user.statusAdmin) {
    return (
     <div className={style.all}>
       <div>
         <BotonesAdmin usuariosOn={usuariosOn} />
       </div>
       <div style={darkmode}>
         <div>
           <form className="d-flex">
             <input
               onChange={(e) => onChangeSearch(e)}
               className={`form-control me-2 ${style.input}`}
               type="search"
               placeholder="Buscar..."
               aria-label="Search"
               style={darkSearchbar}
               value={input}
             />
             <button
               onClick={() => handlerRefresh()}
               className={`btn btn-outline-dark ${style.button}`}
               type="submit"
               style={darkRefresh}
             >
               Refresh
             </button>
           </form>
         </div>
          <div className={style.divBtnRestart}>
            <button className={style.btnRestart} onClick={confirmChange}> Resetar Resultados </button>
          </div>
         <div className={`container-fluid ${style.container}`}>
           <div className={`row ${style.info}`} style={darkInfo}>
             <p className={`col-2 ${style.col}`}>Nickname</p>
             <p className={`col-3 ${style.col}`}>Sub</p>
             <p className={`col-2 ${style.col}`}>Email</p>
             <p className={`col ${style.col}`}>Points</p>
             <p className={`col ${style.col}`}>Ban</p>
             <p className={`col ${style.col}`}>Banear</p>
           </div>
           {usersNoAdmin.length > 0 ? (
             <>
               {usersNoAdmin?.map((e) => {
                 return (
                   <div className={`row ${style.data}`} key={e.sub}>
                     <UserCard
                       email={e.email}
                       nickname={e.nickname}
                       statusBanned={e.statusBanned}
                       sub={e.sub}
                       points={e.totalPoints}
                       setUsersFlag={setUsersFlag}
                       setBanFlag={setBanFlag}
                       setInput={setInput}
                     />
                   </div>
                 );
               })}
             </>
           ) : (
             <div className={style.notFound}>No se encontraron usuarios</div>
           )}
         </div>
         <div className={style.paginated}>
           {usersNoAdmin.length > 0 && (
             <Paginated setPage={setUsersPage} page={usersPage} />
           )} 
         </div>
       </div>
     </div>
   );
  } else {
    return (
      <>
        <NotFound />
      </>
    )
  }
};

export default ListaUsuarios;
