import FormComentarios from "../components/FormComentarios.jsx";

import Textura from "../img/textura_circulos_1.webp";

const Comentarios = ({idioma}) => {



    return ( 
        <div id="comentarios">
            

            <img className="textura1" src={Textura}></img>

            <div className="contenedor">
                <div className="contenedor_form">
                    <FormComentarios idioma={idioma}/>

                </div>
                

                
                <div className="comentarios">

                </div>
            </div>
        </div>
     );
}
 
export default Comentarios;