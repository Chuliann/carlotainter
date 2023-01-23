import gif from "../img/gif-final.gif";
import foto1 from "../img/Foto_1.webp";
import logo_carlota from "../img/logo_carlota.webp";
import estrella from "../img/estrella_amarilla.webp";

import {inicio} from "../utils/idiomas.js";
import { useState } from "react";

const Inicio = ({handleIdioma, idioma}) => {

    const [imagen, setImagen] = useState(false);

    return ( 
        <div id="inicio">
            <img className="estrella" src={estrella} alt="decoracion"></img>
            <div className="idioma">
                <a onClick={() => handleIdioma("en")}>EN</a>
                /
                <a onClick={() => handleIdioma("es")}>ES</a>
            </div>
            <div className="contenedor">
                <div className="img">
                    <img className={`${imagen ? "logo_i" : "logo_f"}`} src={logo_carlota}></img>
                    <div className="movil">
                        <img onLoad={() => setImagen(true)} className={`foto ${imagen ? "" : "d-none"}`} src={gif}></img>
                        <img src={foto1} className={`foto ${imagen ? "d-none" : ""}`} alt="imagenInicio"></img>
                        <p>{inicio[idioma]["titulo"]}</p>
                    </div>
                    <p>{inicio[idioma]["titulo"]}</p>
                </div>

            </div>
            
        </div>
    );
}
 
export default Inicio;