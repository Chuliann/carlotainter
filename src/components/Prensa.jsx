import { useState, useEffect } from "react";

import Links from "../utils/Links.jsx"
import home from "../img/Home_2.webp";

import { prensa } from "../utils/idiomas.js";

const Prensa = ({desactivar, animar, idioma}) => {


    const[activar, setActivar] = useState(false);

    useEffect(() => {
        if(animar) setActivar(true);
        if(!animar) setActivar(false);
    }, [animar])

    return ( 
        <div id="prensa" className={`transicion ${activar ? "menuActivo" : ""}`}>

            <div className="contenedor">
                <div className="house" onClick={desactivar}>
                    <img src={home}></img>
                </div>
                <h2>{prensa[idioma]["titulo1"]}</h2>
                <Links />
            </div>
        </div>
     );
}
 
export default Prensa;