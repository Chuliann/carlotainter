
import home from "../img/home_3.webp";
import proyecto1 from "../img/proyecto1.webp";
import proyecto2 from "../img/proyecto2.webp";
import proyecto3 from "../img/proyecto3.webp";
import proyecto4 from "../img/proyecto4.webp";
import proyecto5 from "../img/proyecto5.webp";

import {proyectos} from "../utils/idiomas.js";

const Proyectos = ({desactivar, animar, idioma}) => {

    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ut aliquam consequuntur laboriosam nemo neque, facilis iste eos impedit autem dolor. Dolores, expedita suscipit! Expedita eos dolor pariatur numquam recusandae.";

    return ( 
        <div id="proyectos" className={`transicion ${animar ? "menuActivo" : ""}`}>
            
            <div className="contenedor">
                <div className="house" onClick={desactivar}>
                    <img src={home}></img>
                </div>
                <h2>{proyectos[idioma]["titulo1"]}</h2>
                <div className="contenedor__proyectos">
                    <div className="proyecto">
                        <img src={proyecto1}></img>
                        <h3>La piedra en el zapato</h3>
                        <p> {lorem} </p>
                    </div>
                    <div className="proyecto">
                        <img src={proyecto2}></img>
                        <h3>La furiosa realidad</h3>
                        <p> {lorem} </p>
                    </div>
                    <div className="proyecto">
                        <img src={proyecto3}></img>
                        <h3>Evas y Marías</h3>
                        <p> {lorem} </p>
                    </div>
                    <div className="proyecto">
                        <img src={proyecto4}></img>
                        <h3>Festival</h3>
                        <p> {lorem} </p>
                    </div>
                    <div className="proyecto tienda">
                        <img src={proyecto5}></img>
                        <h2>{proyectos[idioma]["titulo2"]}<br></br>{proyectos[idioma]["titulo2_1"]}</h2>
                        <p> {lorem} </p> 
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Proyectos;