import House from "../utils/House.jsx";

import img from "../img/home_1.png";
import foto1 from "../img/Foto_caja_1.png";
import foto2 from "../img/Foto_caja_2.png";
import foto3 from "../img/Foto_caja_3.png";
import foto4 from "../img/Foto_caja_4.png";
import foto5 from "../img/Foto_caja_5.png";
import foto6 from "../img/Foto_caja_6.png";
import foto7 from "../img/Foto_caja_7.png";
import foto8 from "../img/Foto_caja_8.png";

const Menu = () => {

    return ( 
        <div id="menu">
            <House 
                img={img}
                section={"seccion"}
            />

            <div className="contenedor">
                <div className="elemento">
                    <img src={foto1}></img>
                    <p>Tú</p>
                </div>
                <div className="elemento">
                    <img src={foto2}></img>
                    <p>Pro<br></br>yec<br></br>tos</p>
                </div>
                <div className="elemento activo">
                    <img src={foto3}></img>
                    <p>tien <br></br> da</p>
                </div>
                <div className="elemento">
                    <img src={foto4}></img>
                    <p>red</p>
                </div>
                <div className="elemento">
                    <img src={foto5}></img>
                    <p>pe <br></br>lis</p>
                </div>
                <div className="elemento">
                    <img src={foto6}></img>
                    <p>fes<br></br>ti<br></br>val</p>
                </div>
                <div className="elemento">
                    <img src={foto7}></img>
                    <p>pren <br></br>sa</p>
                </div>
                <div className="elemento">
                    <img src={foto8}></img>
                    <p>car<br></br>lo<br></br>ta</p>
                </div>
            </div>
        </div>
     );
}
 
export default Menu;