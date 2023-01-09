import { useEffect, useState } from "react";
import fondo_correo from "../img/boton_mail_2.webp";
import home from "../img/home_3.webp";
import foto from "../img/Foto_2.webp";

import {tu} from "../utils/idiomas.js";

const Tu = ({ desactivar, idioma, animar}) => {

    const[activar, setActivar] = useState(false);

    useEffect(() => {
        if(animar) setActivar(true);
        if(!animar) setActivar(false);
    }, [animar])

    return ( 
        <div id="tu" className={`transicion ${activar ? "menuActivo" : ""}`}>

            <div className="contenedor">
                <div onClick={() => desactivar()} className="house">
                    <img src={home}></img>
                </div>

                <h2>{tu[idioma]["titulo1"]}</h2>

                <div className="grid">
                    <div className="imagen">
                        <img src={foto}></img>
                        <p><span> {tu[idioma]["titulo2_1"]} <br></br> {tu[idioma]["titulo2_2"]} <br></br> {tu[idioma]["titulo2_3"]} <br></br> {tu[idioma]["titulo2_4"]} <br></br> {tu[idioma]["titulo2_5"]}.</span></p>
                    </div>
                    <div className="info">
                        <p>{tu[idioma]["titulo3_1"]} <br></br>
                        {tu[idioma]["titulo3_2"]} <br></br>
                        {tu[idioma]["titulo3_3"]}</p>
                        <div className="correo">
                            <p>colabora@carlota.international</p>
                            <img src={fondo_correo}></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Tu;