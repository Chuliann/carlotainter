
import fondo_correo from "../img/boton_mail_2.png";
import home from "../img/home_3.png";
import foto from "../img/Foto_2.png";

const Tu = () => {
    return ( 
        <div id="tu">

            <div className="contenedor">
                <div className="house">
                    <img src={home}></img>
                </div>

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