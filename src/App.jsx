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

import Estrella from "./img/estrella_amarilla.webp";

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

    /* Carga el video, y el sitio */
    const [carga, setCarga] = useState(true);

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

    const cargoElsitio = () => {
        let cargo = localStorage.getItem("cargoElsitio");
        let tiempo;
        if(cargo) {
            tiempo = 1000;
        } else {
            tiempo = 5000;
            localStorage.setItem("cargoElsitio", true);
        }
        setTimeout(() => {
            
            setCarga(false);
        }, tiempo);
    }

    useEffect(() => {
        setAnimar(true);
    }, [activo]);

    useEffect(() => {
        cargoElsitio();
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
                                    <div className={`contenedor_estrella ${!carga ? "d-none" : ""}`}>
                                        <img
                                            className="estrella_carga"
                                            src={Estrella}
                                            alt="spinnin_carga"
                                        ></img>
                                        <h2>Cargando</h2>
                                    </div>
                                    <div className={`${!carga ? "" : "o-0"}`}>
                                        <Inicio
                                            handleIdioma={handleIdioma}
                                            idioma={idioma}
                                            setCarga={setCarga}
                                            cargoElsitio={cargoElsitio}
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
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </Router>
    );
}

export default App;
