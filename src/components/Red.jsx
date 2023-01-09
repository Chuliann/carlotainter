
import Redes from "../utils/Redes.jsx"

import home from "../img/home_3.webp";
import imagen from "../img/Foto_3.webp";

import {red} from "../utils/idiomas.js";

const Red = ({desactivar, animar, idioma}) => {
    return ( 
        <div id="red"  className={`transicion ${animar ? "menuActivo" : ""}`}>

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