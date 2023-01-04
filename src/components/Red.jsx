import House from "../utils/House.jsx"
import Redes from "../utils/Redes.jsx"

import img from "../img/home_3.png";
import imagen from "../img/Foto_3.png";

const Red = () => {
    return ( 
        <div id="red">
            <House 
                img={img}
                section={"seccion"}
            />

            <div className="contenedor">
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