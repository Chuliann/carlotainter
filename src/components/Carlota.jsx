import House from "../utils/House.jsx";

import img from "../img/home_1.png";
import fondo_correo from "../img/boton_mail.png"
import textura from "../img/textura_circulos_2.png";

const Carlota = () => {
    return ( 
        <div id="carlota">

            <House 
                img={img}
                section={"seccion"}
            />

            <div className="contenedor">
                <div className="info">
                    <h2>Carlota</h2>
                    <p>En el siglo XIX, Carlota se alza contra los esclavistas.</p>
                    <p>En el siglo XX, Carlota lucha contra el Apartheid.</p>
                    <p className="opaco">Hoy en día, Carlota crea y comunica en apoyo a todas esas luchas locales, regionales y globales por la emancipación y la liberación.</p>
                </div>
                <div className="contacto">
                    <p>¿Necesitas apoyo? <br></br> ¿Quieres colaborar? <br></br> Escríbenos a</p>
                    <div className="correo">
                        <p>colabora@carlota.international</p>
                        <img src={fondo_correo}></img>
                    </div>
                </div>
                <img className="textura" src={textura}></img>
            </div>
        </div>
     );
}
 
export default Carlota;