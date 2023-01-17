import { useEffect } from "react";
import ListaComentarios from "./ListaComentarios.jsx";
import Swal from "sweetalert2";

const Admin = () => {


    const estaAutenticado = async (token) => {
        await fetch(`${import.meta.env.VITE_DEV_REQUEST}/login.php`, {
            method: "POST",
            body: JSON.stringify({ token, tipo: 'autenticar'}),
            headers: {
                'Content-Type': 'application/json'
            },            
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === false) {
                window.location.href = '/login';
            }
            if(data.status === 'expirado') {
                window.location.href = '/login';
            }
        });
    }    

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }

    useEffect(() => {
        let token = localStorage.getItem("token");
        if(!token) {
            window.location.href = "/login";
        } else {
            estaAutenticado(token);
        }
    }, [])

    return ( 
        <div id="admin">
            <div className="header">
                <h1>Panel de control</h1>
                <button onClick={cerrarSesion}>Cerrar sesión</button>
            </div>
            <ListaComentarios />
        </div>
     );
}
 
export default Admin;