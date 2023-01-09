import Foto_1 from "../img/Foto_1.png";
import logo_carlota from "../img/logo_carlota.png";
import estrella from "../img/estrella_amarilla.png";

import {inicio} from "../utils/idiomas.js";

const Inicio = ({handleIdioma, idioma}) => {
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
                    <img className="logo" src={logo_carlota}></img>
                    <div className="movil">
                        <img className="foto" src={Foto_1}></img>
                        <p>{inicio[idioma]["titulo"]}</p>
                    </div>
                    <p>{inicio[idioma]["titulo"]}</p>
                </div>

            </div>
            
        </div>
    );
}
 
export default Inicio;