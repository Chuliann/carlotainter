import { useEffect, useState } from "react";
import { estaAutenticado } from "../../utils/JWTAuth.js";
import ListaComentarios from "./ListaComentarios.jsx";

const Admin = () => {


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
                <h1>Admin Carlota</h1>
            </div>
            <ListaComentarios />
        </div>
     );
}
 
export default Admin;