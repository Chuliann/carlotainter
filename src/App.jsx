import { useState } from 'react'
import Inicio from "./components/Inicio.jsx";
import Menu from "./components/Menu.jsx";
import Comentarios from "./components/Comentarios.jsx";
import Tu from "./components/Tu.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Prensa from "./components/Prensa.jsx";
import Red from "./components/Red.jsx";
import Carlota from "./components/Carlota.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Inicio />
      <Menu />
      <Comentarios />
      <Tu />
      <Proyectos />
      <Prensa />
      <Red />
      <Carlota />
    </div>
  )
}

export default App
