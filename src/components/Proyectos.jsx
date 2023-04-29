import home from "../img/home_2.webp";
import proyecto1 from "../img/proyecto1.webp";
import proyecto2 from "../img/proyecto2.webp";
import proyecto3 from "../img/proyecto3.webp";
import proyecto4 from "../img/proyecto4.webp";
import proyecto5 from "../img/proyecto5.webp";

import { Link } from "react-router-dom";

import {proyectos} from "../utils/idiomas.js";

const Proyectos = ({idioma}) => {


    return ( 
        <div id="proyectos" >
            
            <div className="contenedor">
                <Link to="/" className="house">
                    <img src={home}></img>
                </Link>
                <h2>{proyectos[idioma]["titulo1"]}</h2>
                <div className="contenedor__proyectos">
                    <div className="proyecto">
                        <img src={proyecto1}></img>
                        <h3>{proyectos[idioma]["pelicula1"]}</h3>

                    </div>
                    <div className="proyecto">
                        <img src={proyecto2}></img>
                        <h3>{proyectos[idioma]["pelicula2"]}</h3>

                    </div>
                    <div className="proyecto">
                        <img src={proyecto3}></img>
                        <h3>{proyectos[idioma]["pelicula3"]}</h3>

                    </div>
                    <div className="proyecto">
                        <img src={proyecto4}></img>
                        <h3>{proyectos[idioma]["festival"]}</h3>

                    </div>
                    <div className="proyecto tienda">
                        <img src={proyecto5}></img>
                        <h2>{proyectos[idioma]["titulo2"]}<br></br>{proyectos[idioma]["titulo2_1"]}</h2>
 
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Proyectos;