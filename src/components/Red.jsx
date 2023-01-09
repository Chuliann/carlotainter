
import Redes from "../utils/Redes.jsx"

import home from "../img/home_3.png";
import imagen from "../img/Foto_3.png";

const Red = ({desactivar, animar}) => {
    return ( 
        <div id="red"  className={`transicion ${animar ? "menuActivo" : ""}`}>

            <div className="contenedor">
                <div className="house" onClick={desactivar}>
                    <img src={home}></img>
                </div>
                
                <h2>Red</h2>
                
                <div className="content">
                    <img src={imagen}></img>
                    <Redes />
                </div>
            </div>
        </div>
     );
}
 
export default Red;