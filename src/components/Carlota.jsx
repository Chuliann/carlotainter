import home from "../img/home_1.webp";
import fondo_correo from "../img/boton_mail.webp"
import textura from "../img/textura_circulos_2.webp";
import { Link } from "react-router-dom";

import { carlota } from "../utils/idiomas.js";

const Carlota = ({idioma, useWindowDimensions}) => {


    const {width, height} = useWindowDimensions();

    return ( 
        <div id="carlota" style={{height: `${height}px`}}>


            <div className="contenedor">
                <Link to={"/"} className="house" preventScrollReset={true}>
                    <img loading="lazy" src={home}></img>
                </Link>
                <div className="info">
                    <h2>{carlota[idioma]["titulo1"]}</h2>
                    <p>{carlota[idioma]["titulo2"]}</p>
                    <p>{carlota[idioma]["titulo3"]}</p>
                    <p className="opaco">{carlota[idioma]["titulo4"]}</p>
                </div>
                <div className="contacto pc">
                    <p>{carlota[idioma]["titulo5_1"]} <br></br> {carlota[idioma]["titulo5_2"]} <br></br> {carlota[idioma]["titulo5_3"]}</p>
                    <div className="correo">
                        <p>colabora@carlota.international</p>
                        <img loading="lazy" src={fondo_correo}></img>
                    </div>
                </div>
                <div className="textura__contenedor" style={width < 764 ? {height: `${height / 2}px`} : {height: "auto"}}>
                    <img loading="lazy" className="textura" src={textura}></img>
                    <div className="contacto celular">
                        <p>{carlota[idioma]["titulo5_1"]} <br></br> {carlota[idioma]["titulo5_2"]} <br></br> {carlota[idioma]["titulo5_3"]}</p>
                        <div className="correo">
                            <p>colabora@carlota.international</p>
                            <img loading="lazy" src={fondo_correo}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Carlota;