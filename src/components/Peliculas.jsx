import { useState, useEffect } from "react";
import home from "../img/home_3.webp";

import {peliculas} from "../utils/idiomas.js";
import { Link } from "react-router-dom";

import proyecto1 from "../img/proyecto1.webp";
import proyecto2 from "../img/proyecto2.webp";
import proyecto3 from "../img/proyecto3.webp";

const Peliculas = ({idioma}) => {


    return(
        <div id="peliculas">
            <div className="contenedor">
                <Link to="/" className="house">
                    <img  src={home}></img>
                </Link>
                <h2>{peliculas[idioma]["titulo1"]}</h2>
                <div className="contenedor__proyectos">
                    <div className="proyecto">
                        <img  src={proyecto1}></img>
                        <h3>"{peliculas[idioma]["pelicula1"]}"<br></br> -2023</h3>
                    </div>
                    <div className="proyecto">
                        <img  src={proyecto2}></img>
                        <h3>"{peliculas[idioma]["pelicula2"]}"<br></br> -2023</h3>
                    </div>
                    <div className="proyecto">
                        <img  src={proyecto3}></img>
                        <h3>"{peliculas[idioma]["pelicula3"]}"<br></br> -2023</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Peliculas;