import { Route, Routes } from "react-router-dom";
import MisPronosticos from "./components/MisPronosticos/MisPronosticos";
import Headerlogin from "./components/NavBar/HeaderLogin";
import Landing from "./components/Landing/Landing";
import Resultados from "./components/Resultados/Resultados";

//importacion de páginas

function App() {
  return (
    <>
      <Headerlogin />
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/mispronosticos"} element={<MisPronosticos />} />
        <Route path={"/resultados"} element={<Resultados />} />
        {/* <Route path={"/pagolisto"} element={<PagoListo />} />
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/easter"} element={<Easter />} />
        <Route path={"/codenothere/alertas"} element={<ProtectedRoute component={Alertas}/>} />
        <Route path={"/codenothere/usuarios"} element={<ProtectedRoute component={ListaUsuarios}/>} />
        <Route path={"/codenothere/admins"} element={<ProtectedRoute component={AgregarAdmin}/>} />
        <Route path={"/codenothere/mensajes"} element={<ProtectedRoute component={PreguntasDirectas}/>} />
        <Route path={"/user/:sub"} element={<ProtectedRoute component={UserPage}/>} />  */}
      </Routes>
    </>
  );
}

export default App;
