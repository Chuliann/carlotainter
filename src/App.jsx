import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from "react-router-dom";

import Inicio from "./components/Inicio.jsx";
import Tu from "./components/Tu.jsx";
import Proyectos from "./components/Proyectos.jsx";
/* import Prensa from "./components/Prensa.jsx";
import Red from "./components/Red.jsx";
import Peliculas from "./components/Peliculas.jsx"; */
import Carlota from "./components/Carlota.jsx";
import Login from "./components/admin/Login.jsx";
import Admin from "./components/admin/Admin.jsx";
import useWindowDimensions from "./utils/useWindowDimensions.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";


function App() {

    /* Estado del idioma */
    const [idioma, setIdioma] = useState("en");

    return (
        <>
        <Router>
            <ScrollToTop />
            <Routes>

                <Route path="/">
                    <Route index element={<Inicio setIdioma={setIdioma} idioma={idioma}/>} />


                    <Route path="admin" element={<Admin />} />
                    <Route path="login" element={<Login />} />
                    
                    {/* <Route path="press" element={<Prensa idioma={idioma} />} />
                    <Route path="grid" element={<Red idioma={idioma} />} />
                    <Route path="movies" element={<Peliculas idioma={idioma} />} />  */}

                    <Route path="you" element={<Tu idioma={idioma} useWindowDimensions={useWindowDimensions} />} />
                    <Route path="proyects" element={<Proyectos idioma={idioma} useWindowDimensions={useWindowDimensions} />} />
                    <Route path="carlota" element={<Carlota idioma={idioma} useWindowDimensions={useWindowDimensions} />} />

                </Route>
            </Routes>
        </Router>
        </>
        
    );
}

export default App;
