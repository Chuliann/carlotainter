
import House from "../utils/House.jsx";

import fondo_correo from "../img/boton_mail_2.png";
import img from "../img/home_3.png";
import foto from "../img/Foto_2.png";

const Tu = () => {
    return ( 
        <div id="tu">
            <House 
                img={img}
                section={"seccion"}
            />

            <div className="contenedor">
                <h2>Tú</h2>

                <div className="grid">
                    <div className="imagen">
                        <img src={foto}></img>
                        <p><span>Personas de diferentes países <br></br> nos unimos para crear y dar <br></br> visibilidad a proyectos que <br></br> promueven y apoyan la lucha <br></br> por un mundo mejor.</span></p>
                    </div>
                    <div className="info">
                        <p>¿Necesitas apoyo? <br></br>
                        ¿Quieres colaborar? <br></br>
                        Escríbenos a</p>
                        <div className="correo">
                            <p>colabora@carlota.international</p>
                            <img src={fondo_correo}></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Tu;