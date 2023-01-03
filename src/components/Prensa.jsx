import House from "../utils/House.jsx";
import Links from "../utils/Links.jsx"

import img from "../img/Home_2.png";

const Prensa = () => {
    return ( 
        <div id="prensa">
            <House 
                img={img}
                section={"seccion"}
            />

            <div className="contenedor">
                <h2>Prensa</h2>
                <Links />
            </div>
        </div>
     );
}
 
export default Prensa;