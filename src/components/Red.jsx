import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Redes from "../utils/Redes.jsx"

import home from "../img/home_3.webp";
import imagen from "../img/Foto_3.webp";
import estrella from "../img/estrella_blanca.webp";

import {red} from "../utils/idiomas.js";

const Red = ({idioma}) => {
   
    const [estrellaActiva, setEstrellaActiva] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setEstrellaActiva(true);
        }, 1000);
    }, [])

    return ( 
        <div id="red">

            <img className={`estrella ${estrellaActiva ? "activo" : null}`} loading="lazy" src={estrella} ></img>

            <div className="contenedor">
                <Link to="/" className="house">
                    <img loading="lazy" src={home}></img>
                </Link>
                
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