import { useState, useEffect } from "react";
import home from "../img/home_3.webp";

import {peliculas} from "../utils/idiomas.js";

import proyecto1 from "../img/proyecto1.webp";
import proyecto2 from "../img/proyecto2.webp";
import proyecto3 from "../img/proyecto3.webp";

const Peliculas = ({desactivar, animar, idioma}) => {

    const[activar, setActivar] = useState(false);

    useEffect(() => {
        if(animar) setActivar(true);
        if(!animar) setActivar(false);
    }, [animar])

    return(
        <div id="peliculas" className={`transicion ${activar ? "menuActivo" : ""} `}>
            <div className="contenedor">
                <div className="house" onClick={desactivar}>
                    <img  src={home}></img>
                </div>
                <h2>{peliculas[idioma]["titulo1"]}</h2>
                <div className="contenedor__proyectos">
                    <div className="proyecto">
                        <img  src={proyecto1}></img>
                        <h3>{peliculas[idioma]["pelicula1"]}, 2023</h3>
                    </div>
                    <div className="proyecto">
                        <img  src={proyecto2}></img>
                        <h3>{peliculas[idioma]["pelicula2"]}, 2023</h3>
                    </div>
                    <div className="proyecto">
                        <img  src={proyecto3}></img>
                        <h3>{peliculas[idioma]["pelicula3"]}, 2023</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Peliculas;