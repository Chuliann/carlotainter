import gif from "../img/gifinicio2.gif";
import logo_carlota from "../img/logo_carlota.webp";
import estrella from "../img/estrella_amarilla.webp";

import {inicio} from "../utils/idiomas.js";

const Inicio = ({handleIdioma, idioma, cargoElsitio}) => {


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
                    <img className="logo_i" src={logo_carlota}></img>
                    <div className="movil">
                        <img onLoad={() => cargoElsitio()} className="foto" src={gif}></img>
                        <p>{inicio[idioma]["titulo"]}</p>
                    </div>
                    <p>{inicio[idioma]["titulo"]}</p>
                </div>

            </div>
            
        </div>
    );
}
 
export default Inicio;