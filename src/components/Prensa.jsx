
import Links from "../utils/Links.jsx"
import home from "../img/Home_2.png";


const Prensa = () => {
    return ( 
        <div id="prensa">

            <div className="contenedor">
                <div className="house">
                    <img src={home}></img>
                </div>
                <h2>Prensa</h2>
                <Links />
            </div>
        </div>
     );
}
 
export default Prensa;