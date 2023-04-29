import { createBrowserRouter } from "react-router-dom";

import Inicio from "../components/Inicio.jsx";
import Tu from "../components/Tu.jsx";
import Proyectos from "../components/Proyectos.jsx";
import Carlota from "../components/Carlota.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Inicio />,
        index: true
    },
    {
        path: "/you",
        element: <Tu />
    },
    {
        path: "/proyects",
        element: <Proyectos />
    },
    {
        path: "/carlota",
        element: <Carlota />
    },
])