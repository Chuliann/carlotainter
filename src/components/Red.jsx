
import Redes from "../utils/Redes.jsx"

import home from "../img/home_3.png";
import imagen from "../img/Foto_3.png";

const Red = () => {
    return ( 
        <div id="red">

            <div className="contenedor">
                <div className="house">
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