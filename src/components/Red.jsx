import { useState, useEffect } from "react";
import Redes from "../utils/Redes.jsx"

import home from "../img/home_3.webp";
import imagen from "../img/Foto_3.webp";

import {red} from "../utils/idiomas.js";

const Red = ({desactivar, animar, idioma}) => {
    const[activar, setActivar] = useState(false);

    useEffect(() => {
        if(animar) setActivar(true);
        if(!animar) setActivar(false);
    }, [animar])

    return ( 
        <div id="red"  className={`transicion ${activar ? "menuActivo" : ""}`}>

            <div className="contenedor">
                <div className="house" onClick={desactivar}>
                    <img src={home}></img>
                </div>
                
                <h2>{red[idioma]["titulo1"]}</h2>
                
                <div className="content">
                    <img src={imagen}></img>
                    <Redes />
                </div>
            </div>
        </div>
     );
}
 
export default Red;