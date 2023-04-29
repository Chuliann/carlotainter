import { useEffect, useState } from "react";
import fondo_correo from "../img/boton_mail_2.webp";
import home from "../img/home_3.webp";
import foto from "../img/Foto_2.webp";
import estrella from "../img/estrella_amarilla.webp";

import { Link } from "react-router-dom";

import {tu} from "../utils/idiomas.js";

const Tu = ({ idioma, useWindowDimensions }) => {

    const [estrellaActiva, setEstrellaActiva] = useState(false);
    const {width, height} = useWindowDimensions();

    useEffect(() => {
        setTimeout(() => {
            setEstrellaActiva(true);
        }, 1000);
        console.log(width, height);
    }, [])

    return ( 
        <div id="tu" style={{height: `${height}px`}}>

            <img className={`estrella ${estrellaActiva ? "activo" : null}`} loading="lazy" src={estrella} ></img>

            <div className="contenedor">
                <Link to="/" className="house">
                    <img src={home}></img>
                </Link>

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
                            <p>{tu[idioma]["titulo4"]}</p>
                            <img src={fondo_correo}></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Tu;