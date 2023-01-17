import { useEffect, useState } from "react";
import FormComentarios from "../components/FormComentarios.jsx";

import Textura from "../img/textura_circulos_1.webp";

const Comentarios = ({ idioma }) => {

    const [comentarios, setComentarios] = useState(null);

    const traerComentarios = async () => {
        await fetch(`${import.meta.env.VITE_DEV_REQUEST}/comentarios.php`, {
            method: "POST",
            body: JSON.stringify({tipo: 'aprobados'}),
            headers: {
                'Content-Type': 'application/json'
            },            
        })
        .then(response => response.json())
        .then(data => setComentarios(data));
    }

    useEffect(() => {
        traerComentarios();
    }, [])

    return ( 
        <div id="comentarios">
            <img loading="lazy" className="textura1" src={Textura}></img>

            <div className="contenedor">
                <div className="contenedor_form">
                    <FormComentarios idioma={idioma}/>
                </div>
                
                <div className="comentarios">
                    {comentarios ? comentarios.map(comentario => (
                        <Comentario key={comentario.id} comentario={comentario}/>
                    )) : (
                        <h3>{idioma === "es" ? "No hay comentarios" : "There are no comments"}</h3>
                    )}
                </div>
            </div>
        </div>
     );
}

const Comentario = ({comentario}) => {
    

    return(
        <div className="comentario">
            <h3>{comentario.nombre}</h3>
            <p>{comentario.mensaje}</p>
        </div>
    );
}
 
export default Comentarios;