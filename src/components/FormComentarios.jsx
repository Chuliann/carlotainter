import { useEffect } from "react";
import { useState } from "react";

import { comentarios } from "../utils/idiomas.js";
import Swal from "sweetalert2";

const FormComentarios = ({ idioma }) => {
    const [campos, setCampos] = useState({
        nombre: "",
        correo: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        setCampos({
            ...campos,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(campos.mensaje === '' || campos.correo === '' || campos.mensaje === '') {
            Swal.fire({
                icon: 'error',
                title: comentarios[idioma]['fracaso']
            });
            return;
        }

        await fetch(`${import.meta.env.VITE_DEV_REQUEST}/comentarios.php`, {
            method: "POST",
            body: JSON.stringify({ campos, tipo: "enviar" }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.status) {
                Swal.fire({
                    icon: 'success',
                    title: comentarios[idioma]['exito']
                });
                setCampos({
                    nombre: "",
                    correo: "",
                    mensaje: "",
                });
            }
        });
    };


    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <h2>{comentarios[idioma]["titulo1"]}</h2>
            <div className="campo campo1">
                <label htmlFor="nombre" className={campos.nombre ? "d-none" : ""}>
                    {comentarios[idioma]["titulo2"]}
                </label>
                <input
                    onChange={(e) => handleChange(e)}
                    id="nombre"
                    value={campos.nombre}
                    name="nombre"
                    type="text"
                />
            </div>
            <div className="campo campo2">
                <label htmlFor="correo" className={campos.correo ? "d-none" : ""}>
                    {comentarios[idioma]["titulo3"]}
                </label>
                <input
                    onChange={(e) => handleChange(e)}
                    name="correo"
                    type="email"
                    value={campos.correo}
                    id="correo"
                />
            </div>
            <div className="campo campo3">
                <label htmlFor="mensaje" className={campos.mensaje ? "d-none" : ""}>
                    {comentarios[idioma]["titulo4"]}
                </label>
                <textarea
                    onChange={(e) => handleChange(e)}
                    name="mensaje"
                    value={campos.mensaje}
                    id="mensaje"
                ></textarea>
            </div>

            <input type="submit" value={comentarios[idioma]["titulo5"]} />
        </form>
    );
};

export default FormComentarios;
