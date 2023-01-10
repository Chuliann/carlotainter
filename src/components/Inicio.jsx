import Foto_1 from "../img/Foto_1.webp";
import logo_carlota from "../img/logo_carlota.webp";
import estrella from "../img/estrella_amarilla.webp";

import {inicio} from "../utils/idiomas.js";

const Inicio = ({handleIdioma, idioma}) => {
    return ( 
        <div id="inicio">
            <img loading="lazy" className="estrella" src={estrella} alt="decoracion"></img>
            <div className="idioma">
                <a onClick={() => handleIdioma("en")}>EN</a>
                /
                <a onClick={() => handleIdioma("es")}>ES</a>
            </div>
            <div className="contenedor">
                <div className="img">
                    <img loading="lazy" className="logo" src={logo_carlota}></img>
                    <div className="movil">
                        <img loading="lazy" className="foto" src={Foto_1}></img>
                        <p>{inicio[idioma]["titulo"]}</p>
                    </div>
                    <p>{inicio[idioma]["titulo"]}</p>
                </div>

            </div>
            
        </div>
    );
}
 
export default Inicio;