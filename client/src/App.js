import { Route, Routes } from "react-router-dom";
import MisPronosticos from "./components/MisPronosticos/MisPronosticos";
import Headerlogin from "./components/NavBar/HeaderLogin";
import Landing from "./components/Landing/Landing";
import Resultados from "./components/Resultados/Resultados";
import Ranking from "./components/Ranking/Ranking";
import './App.css';
import PublicProde from "./components/PublicProde/PublicProde";
import MisPremios from "./components/MisPremios/MisPremios";
import Premios from "./components/Premios/Premios";
import Rules from "./components/Rules/Rules";
import UserPage from "./components/UserPage/UserPage";
import Configuracion from "./components/Configuracion/Configuracion";
import Admin from './components/Admin/Admin';
import ListaUsuarios from './components/Admin/ListaUsuarios';
import AgregarAdmin from './components/Admin/AgregarAdmin';
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoute from "./components/Auth0/ProtectedRoute";
import Ranking2 from "./components/Ranking/Ranking2";

function App() {
  return (
    <>
      <Headerlogin />
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/prode"} element={<PublicProde />} />
        <Route path={"/reglas"} element={<Rules />} />
        <Route path={"/mispronosticos"} element={<ProtectedRoute component={MisPronosticos} />} />
        <Route path={"/resultados"} element={<ProtectedRoute component={Resultados}/>} />
        <Route path={"/ranking"} element={<ProtectedRoute component={Ranking}/>} />
        <Route path={"/rankingprode"} element={<ProtectedRoute component={Ranking2}/>} />
        <Route path={"/mispremios"} element={<ProtectedRoute component={MisPremios}/>} />
        <Route path={"/premios"} element={<ProtectedRoute component={Premios}/>} />
        <Route path={"/configuracion/:sub"} element={<ProtectedRoute component={Configuracion}/>} />
        <Route path={"/statusadm"} element={<ProtectedRoute component={Admin}/>} />
        <Route path={"/statusadm/usuarios"} element={<ProtectedRoute component={ListaUsuarios}/>} />
        <Route path={"/statusadm/admins"} element={<ProtectedRoute component={AgregarAdmin}/>} />
        <Route path={"/user/:sub"} element={<ProtectedRoute component={UserPage}/>} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
