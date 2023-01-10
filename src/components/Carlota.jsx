import { useState, useEffect } from "react";

import home from "../img/home_1.webp";
import fondo_correo from "../img/boton_mail.webp"
import textura from "../img/textura_circulos_2.webp";

import { carlota } from "../utils/idiomas.js";

const Carlota = ({desactivar, animar, idioma}) => {

    const[activar, setActivar] = useState(false);

    useEffect(() => {
        if(animar) setActivar(true);
        if(!animar) setActivar(false);
    }, [animar])

    return ( 
        <div id="carlota"  className={`transicion ${activar ? "menuActivo" : ""}`}>


            <div className="contenedor">
                <div className="house" onClick={desactivar}>
                    <img loading="lazy" src={home}></img>
                </div>
                <div className="info">
                    <h2>{carlota[idioma]["titulo1"]}</h2>
                    <p>{carlota[idioma]["titulo2"]}</p>
                    <p>{carlota[idioma]["titulo3"]}</p>
                    <p className="opaco">{carlota[idioma]["titulo4"]}</p>
                </div>
                <div className="contacto">
                    <p>{carlota[idioma]["titulo5_1"]} <br></br> {carlota[idioma]["titulo5_2"]} <br></br> {carlota[idioma]["titulo5_3"]}</p>
                    <div className="correo">
                        <p>colabora@carlota.international</p>
                        <img loading="lazy" src={fondo_correo}></img>
                    </div>
                </div>
                <img loading="lazy" className="textura" src={textura}></img>
            </div>
        </div>
     );
}
 
export default Carlota;