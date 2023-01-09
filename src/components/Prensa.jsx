
import Links from "../utils/Links.jsx"
import home from "../img/Home_2.png";


const Prensa = ({desactivar, animar}) => {
    return ( 
        <div id="prensa" className={`transicion ${animar ? "menuActivo" : ""}`}>

            <div className="contenedor">
                <div className="house" onClick={desactivar}>
                    <img src={home}></img>
                </div>
                <h2>Prensa</h2>
                <Links />
            </div>
        </div>
     );
}
 
export default Prensa;