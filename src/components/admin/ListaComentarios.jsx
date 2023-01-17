import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { eliminarComentario, aprobarComentario } from "../../utils/funciones";

const ListaComentarios = () => {
    const [comentarios, setComentarios] = useState([]);

    const llamarComentarios = async () => {
        await fetch(`${import.meta.env.VITE_DEV_REQUEST}/comentarios.php`, {
            method: "POST",
            body: JSON.stringify({
                tipo: "pendientes",
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setComentarios(data));
    };

    const actualizar = id => {
        let comentariosNuevos = comentarios.filter(comentario => (comentario.id != id));
        setComentarios(comentariosNuevos);
    }

    useEffect(() => {
        llamarComentarios();
    }, []);

    return (
        <div className="comentarios">
            <h2>Comentarios</h2>

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
                                  actualizar={actualizar}
                              />
                          ))
                        : null}
                </tbody>
            </table>
        </div>
    );
};

const Comentario = ({ comentario, actualizar }) => {

    const aprobar = () => {
        Swal.fire({
            title: "Esta seguro?",
            text: "Esta acción publicara el comentario",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Si, apruebalo!",
        }).then((result) => {
            if(!result.value) {
                return;
            }
            if (result.isConfirmed) {
                const resultado = aprobarComentario(comentario.id);
                if(resultado) {
                    Swal.fire("Aprobado!", "El comentario ha publicado.", "success");
                    actualizar(comentario.id);
                }
            }
        });
    }

    const eliminar = () => {
        Swal.fire({
            title: "Esta seguro?",
            text: "Esta acción eliminara el comentario permanentemente",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Si, borralo!",
        }).then((result) => {
            if(!result.value) {
                return;
            }
            if (result.isConfirmed) {
                const resultado = eliminarComentario(comentario.id);
                if(resultado) {
                    Swal.fire("Borrado!", "El comentario ha sido eliminado.", "success");
                    actualizar(comentario.id);
                }
            }
        });
    };

    return (
        <tr>
            <th>{comentario.nombre}</th>
            <th>{comentario.correo}</th>
            <th>{comentario.mensaje}</th>
            <th>
                <button onClick={aprobar}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-check"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#7bc62d"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                    </svg>
                </button>
                <button onClick={eliminar}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-trash"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ff2825"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                </button>
            </th>
        </tr>
    );
};

export default ListaComentarios;
