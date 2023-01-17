import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Inicio from "./components/Inicio.jsx";
import Menu from "./components/Menu.jsx";
import Comentarios from "./components/Comentarios.jsx";
import Tu from "./components/Tu.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Prensa from "./components/Prensa.jsx";
import Red from "./components/Red.jsx";
import Peliculas from "./components/Peliculas.jsx";
import Carlota from "./components/Carlota.jsx";
import Login from "./components/admin/Login.jsx";
import Admin from "./components/admin/Admin.jsx";

function App() {
    /* Estado de seccion activa */
    const [activo, setActivo] = useState({
        tu: false,
        proyectos: false,
        prensa: false,
        red: false,
        carlota: false,
    });

    /* Estado de animar una seccion luego de aparecer el componente */
    const [animar, setAnimar] = useState(false);

    /* Estado de ocultar la landing page */
    const [ocultar, setOcultar] = useState(false);

    /* Estado del idioma */
    const [idioma, setIdioma] = useState("en");

    /* Cambia el idioma de localstorage y el estado de react */
    const handleIdioma = (idioma) => {
        localStorage.setItem("idioma_carlota", idioma);
        setIdioma(idioma);
    };

    /* Desactiva la seccion abierta */
    const desactivar = () => {
        setOcultar(false);
        setAnimar(false);
        setTimeout(() => {
            setActivo({
                tu: false,
                proyectos: false,
                prensa: false,
                red: false,
                peliculas: false,
                carlota: false,
            });
        }, 500);
    };

    useEffect(() => {
        setAnimar(true);
    }, [activo]);

    useEffect(() => {
        /* Chequea el idioma elegido o setea el default */
        let idioma = localStorage.getItem("idioma_carlota");
        if (idioma) {
            setIdioma(idioma);
        } else {
            handleIdioma("en");
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route
                    index
                    path="/"
                    element={
                        <>
                            {!ocultar ? (
                                <div>
                                    <Inicio
                                        handleIdioma={handleIdioma}
                                        idioma={idioma}
                                    />
                                    <Menu
                                        setActivo={setActivo}
                                        activo={activo}
                                        setAnimar={setAnimar}
                                        setOcultar={setOcultar}
                                        idioma={idioma}
                                    />
                                    <Comentarios idioma={idioma} />
                                </div>
                            ) : null}

                            {activo.tu ? (
                                <Tu
                                    animar={animar}
                                    desactivar={desactivar}
                                    idioma={idioma}
                                />
                            ) : null}
                            {activo.proyectos ? (
                                <Proyectos
                                    animar={animar}
                                    desactivar={desactivar}
                                    idioma={idioma}
                                />
                            ) : null}
                            {activo.prensa ? (
                                <Prensa
                                    animar={animar}
                                    desactivar={desactivar}
                                    idioma={idioma}
                                />
                            ) : null}
                            {activo.red ? (
                                <Red
                                    animar={animar}
                                    desactivar={desactivar}
                                    idioma={idioma}
                                />
                            ) : null}
                            {activo.peliculas ? (
                                <Peliculas
                                    animar={animar}
                                    desactivar={desactivar}
                                    idioma={idioma}
                                />
                            ) : null}
                            {activo.carlota ? (
                                <Carlota
                                    animar={animar}
                                    desactivar={desactivar}
                                    idioma={idioma}
                                />
                            ) : null}
                        </>
                    } />
                  <Route path="/login" element={<Login />}/>
                  <Route path="/admin" element={<Admin />}/>
            </Routes>
        </Router>
    );
}

export default App;
