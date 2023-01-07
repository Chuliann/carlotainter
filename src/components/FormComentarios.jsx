import { useState } from "react";

const FormComentarios = () => {

    const [campos, setCampos] = useState({
        nombre: "",
        correo: "",
        mensaje: ""
    });

    const handleChange = e => {
        setCampos({
            ...campos,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form className="formulario">
            <h2>Comentarios</h2>
            <div className="campo campo1">
                <label for="nombre" className={campos.nombre ? "d-none" : ""}>Nombre completo</label>
                <input onChange={e => handleChange(e)}  id="nombre" value={campos.nombre} name="nombre" />
            </div>
            <div className="campo campo2">
                <label for="correo" className={campos.correo ? "d-none" : ""}>Correo electronico</label>
                <input onChange={e => handleChange(e)} name="correo" value={campos.correo}  id="correo" />
            </div>
            <div className="campo campo3">
                <label for="mensaje" className={campos.mensaje ? "d-none" : ""}>Dejanos tu comentario</label>
                <textarea onChange={e => handleChange(e)} name="mensaje" value={campos.mensaje}  id="mensaje"></textarea>
            </div>

            <input type="submit" value="Enviar" />
        </form>
    );
};

export default FormComentarios;
