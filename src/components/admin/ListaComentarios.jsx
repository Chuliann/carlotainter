import { useState, useEffect } from "react";

const ListaComentarios = () => {
    const [comentarios, setComentarios] = useState([]);

    const llamarComentarios = async () => {
        await fetch(`${import.meta.env.VITE_DEV_REQUEST}/comentarios.php`, {
            method: 'POST',
            body: JSON.stringify({
                'tipo': 'pendientes' 
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setComentarios(data));
    };

    useEffect(() => {
        llamarComentarios();
    }, []);

    return (
        <div className="comentarios">
            <h2>Comentarios</h2>
            <div className="contenedor_tabla">
            
            <table>
                <thead className="cabecera">
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Comentario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="cuerpo">
                    {comentarios
                        ? comentarios.map((comentario) => (
                              <Comentario
                                  key={comentario.id}
                                  comentario={comentario}
                              />
                          ))
                        : null}
                </tbody>
            </table>
            </div>
        </div>
    );
};

const Comentario = ({ comentario }) => {
    
    return (
        <tr>
            <th>{comentario.nombre}</th>
            <th>{comentario.correo}</th>    
            <th>{comentario.mensaje}</th>
            <th>
                <button className="exito">Aceptar</button>
                <button className="fracaso">Aceptar</button>
            </th>
        </tr>
    );
};

export default ListaComentarios;
