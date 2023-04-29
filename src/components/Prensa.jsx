import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Links from "../utils/Links.jsx"
import home from "../img/Home_2.webp";
import estrella from "../img/estrella_blanca.webp";

import { prensa } from "../utils/idiomas.js";

const Prensa = ({ idioma}) => {

    const [estrellaActiva, setEstrellaActiva] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setEstrellaActiva(true);
        }, 1000);
    }, [])

    return ( 
        <div id="prensa">

            <img className={`estrella ${estrellaActiva ? "activo" : null}`} loading="lazy" src={estrella} ></img>


            <div className="contenedor">
                <Link to="/" className="house">
                    <img loading="lazy" src={home}></img>
                </Link>
                <h2>{prensa[idioma]["titulo1"]}</h2>
                <Links />
            </div>
        </div>
     );
}
 
export default Prensa;