import Hero from "./Hero.jsx";
import Menu from "./Menu.jsx";
import Comentarios from "./Comentarios.jsx";
import Estrella from "../img/estrella_amarilla.webp";

import { useState, useEffect } from "react";


const Inicio = ({setIdioma, idioma}) => {

    /* Estado de ocultar la landing page */
    const [ocultar, setOcultar] = useState(false);
    const [carga, setCarga] = useState(true);

    const cargoElsitio = () => {
        let cargo = localStorage.getItem("cargoElsitio");
        let tiempo;
        if(cargo) {
            tiempo = 0;
        } else {
            tiempo = 5000;
            localStorage.setItem("cargoElsitio", true);
        }
        setTimeout(() => {
            
            setCarga(false);
        }, tiempo);
    }

    
    

    /* Cambia el idioma de localstorage y el estado de react */
    const handleIdioma = (idioma) => {
        localStorage.setItem("idioma_carlota", idioma);
        setIdioma(idioma);
    };

    useEffect(() => {
        cargoElsitio();
        /* Chequea el idioma elegido o setea el default */
        let idioma = localStorage.getItem("idioma_carlota");
        if (idioma) {
            setIdioma(idioma);
        } else {
            handleIdioma("en");
        }
    }, []);

    return(
        !ocultar ? (
            <div>
                <div className={`contenedor_estrella ${!carga ? "d-none" : ""}`}>
                    <img
                        className="estrella_carga"
                        src={Estrella}
                        alt="spinnin_carga"
                    ></img>
                    <h2>Cargando</h2>
                </div>
                <div className={`${!carga ? "" : "o-0"}`}>
                    <Hero
                        handleIdioma={handleIdioma}
                        idioma={idioma}
                        setCarga={setCarga}
                    />
                    <Menu
                        idioma={idioma}
                    />
                    <Comentarios idioma={idioma} />
                </div>
            </div>
        ) : null
    );
}

export default Inicio;