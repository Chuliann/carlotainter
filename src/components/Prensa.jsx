import { useState, useEffect } from "react";

import Links from "../utils/Links.jsx"
import home from "../img/Home_2.webp";
import estrella from "../img/estrella_blanca.webp";

import { prensa } from "../utils/idiomas.js";

const Prensa = ({desactivar, animar, idioma}) => {


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
        <div id="prensa" className={`transicion ${activar ? "menuActivo" : ""}`}>

            <img className={`estrella ${estrellaActiva ? "activo" : null}`} loading="lazy" src={estrella} ></img>

            <div className="contenedor">
                <div className="house" onClick={desactivar}>
                    <img loading="lazy" src={home}></img>
                </div>
                <h2>{prensa[idioma]["titulo1"]}</h2>
                <Links />
            </div>
        </div>
     );
}
 
export default Prensa;