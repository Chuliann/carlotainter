
import foto1 from "../img/Foto_caja_1.webp";
import foto2 from "../img/Foto_caja_2.webp";
import foto6 from "../img/Foto_caja_6.webp";
import foto8 from "../img/Foto_caja_8.webp";
import foto3 from "../img/Foto_caja_3.webp";

/* 
import foto4 from "../img/Foto_caja_4.webp";
import foto5 from "../img/Foto_caja_5.webp";
import foto7 from "../img/Foto_caja_7.webp"; */

import { Link } from "react-router-dom";

import {menu} from "../utils/idiomas.js";

const Menu = ({idioma}) => {


    return ( 
        <div id="menu">

            <div className="contenedor">
                <Link to="/you" className="elemento">
                    <img loading="lazy" src={foto1}></img>
                    <p>{menu[idioma]["titulo1"]}</p>
                </Link>
                <Link to="/proyects" className="elemento">
                    <img loading="lazy" src={foto2}></img>
                    <p>
                        {menu[idioma]["titulo2"]}
                        <br></br>
                        {menu[idioma]["titulo2_1"]}
                        <br></br>
                        {menu[idioma]["titulo2_2"]}
                    </p>
                </Link>

                <Link to="/" className="elemento tienda">
                    <img loading="lazy" src={foto3}></img>
                    <p>{menu[idioma]["titulo3"]} <br></br> {menu[idioma]["titulo3_1"]}</p>
                </Link>

                <div to="/" className="elemento" onClick={() => window.open("https://festival.carlota.international/")}>
                    <img loading="lazy" src={foto6}></img>
                    <p>{menu[idioma]["titulo6"]}<br></br>{menu[idioma]["titulo6_1"]}<br></br>{menu[idioma]["titulo6_2"]}</p>
                </div>
                <Link to="/carlota" className="elemento">
                    <img loading="lazy" src={foto8}></img>
                    <p>{menu[idioma]["titulo8"]}<br></br>{menu[idioma]["titulo8_1"]}<br></br>{menu[idioma]["titulo8_2"]}</p>
                </Link>


            {/* <Link to="/grid" className="elemento">
                <img loading="lazy" src={foto4}></img>
                <p>{menu[idioma]["titulo4"]}</p>
            </Link>
            <Link to="/movies" className="elemento" >
                <img loading="lazy" src={foto5}></img>
                <p>{menu[idioma]["titulo5"]}<br></br>{menu[idioma]["titulo5_1"]}</p>
            </Link> 
            <Link to="/press" className={`elemento ${idioma == "en" ? "correr" : ""}`} >
                    <img loading="lazy" src={foto7}></img>
                    <p>{menu[idioma]["titulo7"]} <br></br>{menu[idioma]["titulo7_1"]}</p>
            </Link> */}
           
            </div>
        </div>
     );
    }
    
export default Menu;