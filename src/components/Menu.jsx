
import foto1 from "../img/Foto_caja_1.webp";
import foto2 from "../img/Foto_caja_2.webp";
import foto3 from "../img/Foto_caja_3.webp";
import foto4 from "../img/Foto_caja_4.webp";
import foto5 from "../img/Foto_caja_5.webp";
import foto6 from "../img/Foto_caja_6.webp";
import foto7 from "../img/Foto_caja_7.webp";
import foto8 from "../img/Foto_caja_8.webp";

import {menu} from "../utils/idiomas.js";

const Menu = ({setActivo, activo, setOcultar, idioma}) => {

    const handleMenu = (seccion) => {
        setActivo({
            ...activo,
            [seccion]: true
        });
        setTimeout(() => {
            setOcultar(true);
        }, 450)
    }

    return ( 
        <div id="menu">

            <div className="contenedor">
                <div onClick={() => handleMenu("tu")} className="elemento">
                    <img src={foto1}></img>
                    <p>{menu[idioma]["titulo1"]}</p>
                </div>
                <div className="elemento" onClick={() => handleMenu("proyectos")}>
                    <img src={foto2}></img>
                    <p>
                        {menu[idioma]["titulo2"]}
                        <br></br>
                        {menu[idioma]["titulo2_1"]}
                        <br></br>
                        {menu[idioma]["titulo2_2"]}
                    </p>
                </div>
                <div className="elemento tienda">
                    <img src={foto3}></img>
                    <p>{menu[idioma]["titulo3"]} <br></br> {menu[idioma]["titulo3_1"]}</p>
                </div>
                <div className="elemento" onClick={() => handleMenu("red")}>
                    <img src={foto4}></img>
                    <p>{menu[idioma]["titulo4"]}</p>
                </div>
                <div className="elemento" onClick={() => handleMenu("peliculas")}>
                    <img src={foto5}></img>
                    <p>{menu[idioma]["titulo5"]}<br></br>{menu[idioma]["titulo5_1"]}</p>
                </div>
                <div className="elemento" onClick={() => window.open("https://festival.carlota.international/")}>
                    <img src={foto6}></img>
                    <p>{menu[idioma]["titulo6"]}<br></br>{menu[idioma]["titulo6_1"]}<br></br>{menu[idioma]["titulo6_2"]}</p>
                </div>
                <div className={`elemento ${idioma == "en" ? "correr" : ""}`} onClick={() => handleMenu("prensa")}>
                    <img src={foto7}></img>
                    <p>{menu[idioma]["titulo7"]} <br></br>{menu[idioma]["titulo7_1"]}</p>
                </div>
                <div className="elemento" onClick={() => handleMenu("carlota")}>
                    <img src={foto8}></img>
                    <p>{menu[idioma]["titulo8"]}<br></br>{menu[idioma]["titulo8_1"]}<br></br>{menu[idioma]["titulo8_2"]}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Menu;