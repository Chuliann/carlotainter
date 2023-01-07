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
                    <form className="formulario">
                        <h2>Comentarios</h2>
                            <div className="campo campo1">
                                <label>Nombre completo</label>
                                <input />
                            </div>
                            <div className="campo campo2">
                                <label for="correo">Correo electronico</label>
                                <input 
                                    id="correo"
                                />
                            </div>
                            <div className="campo campo3">
                                <label>Dejanos tu comentario</label>
                                <textarea></textarea>
                            </div>

                            <input 
                                type="submit"
                                value="Enviar"
                            />
                    </form>
                </div>
                

                
                <div className="comentarios">

                </div>
            </div>
        </div>
     );
}
 
export default Comentarios;