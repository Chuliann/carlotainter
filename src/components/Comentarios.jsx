import FormComentarios from "../components/FormComentarios.jsx";

import Textura from "../img/textura_circulos_1.png";
import home from "../img/home_2.png";

const Comentarios = () => {



    return ( 
        <div id="comentarios">
            

            <img className="textura1" src={Textura}></img>

            <div className="contenedor">
                <div className="contenedor_form">
                    <div className="house">
                        <img src={home}></img>
                    </div>
                    
                    <FormComentarios />

                </div>
                

                
                <div className="comentarios">

                </div>
            </div>
        </div>
     );
}
 
export default Comentarios;