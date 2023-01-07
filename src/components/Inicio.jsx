import Foto_1 from "../img/Foto_1.png";
import logo_carlota from "../img/logo_carlota.png";
import estrella from "../img/estrella_amarilla.png";

const Inicio = () => {
    return ( 
        <div id="inicio">
            <img className="estrella" src={estrella} alt="decoracion"></img>
            <div className="idioma">
                <a>EN</a>
                /
                <a>ES</a>
            </div>
            <div className="contenedor">
                <div className="img">
                    <img className="logo" src={logo_carlota}></img>
                    <div className="movil">
                        <img className="foto" src={Foto_1}></img>
                        <p>Comunicación & creación</p>
                    </div>
                    <p>Comunicación & creación</p>
                </div>

            </div>
            
        </div>
    );
}
 
export default Inicio;