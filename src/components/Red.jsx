import { useState, useEffect } from "react";
import Redes from "../utils/Redes.jsx"

import home from "../img/home_3.webp";
import imagen from "../img/Foto_3.webp";
import estrella from "../img/estrella_blanca.webp";

import {red} from "../utils/idiomas.js";

const Red = ({desactivar, animar, idioma}) => {
    const[activar, setActivar] = useState(false);
    const [estrellaActiva, setEstrellaActiva] = useState(false);

    useEffect(() => {
        if(animar) setActivar(true);
        if(!animar) setActivar(false);
    }, [animar])

    useEffect(() => {
        setTimeout(() => {
            setEstrellaActiva(true);
        }, 1000);
    }, [])

    return ( 
        <div id="red"  className={`transicion ${activar ? "menuActivo" : ""}`}>

            <img className={`estrella ${estrellaActiva ? "activo" : null}`} loading="lazy" src={estrella} ></img>

            <div className="contenedor">
                <div className="house" onClick={desactivar}>
                    <img loading="lazy" src={home}></img>
                </div>
                
                <h2>{red[idioma]["titulo1"]}</h2>
                
                <div className="content">
                    <img loading="lazy" src={imagen}></img>
                    <Redes />
                </div>
            </div>
        </div>
     );
}
 
export default Red;