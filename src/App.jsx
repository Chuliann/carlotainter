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
  const [activo, setActivo] = useState({
    tu: false,
    proyectos: false,
    prensa: false,
    red: false,
    carlota: false
  })
  const [animar, setAnimar] = useState(false);

  const desactivar = () => {
    setAnimar(false);
    setTimeout(() => {
      setActivo({
        tu: false,
        proyectos: false,
        prensa: false,
        red: false,
        carlota: false
      })
      document.querySelector("body").classList.remove("fijar");
    }, 500);
  }

  return (
    <div className="App">
      <div className='principal'>
        <Inicio />
        <Menu 
          setActivo={setActivo}
          activo={activo}
          setAnimar={setAnimar}
        />
        <Comentarios />
      </div>

      {activo.tu ? <Tu animar={animar} desactivar={desactivar} /> : null}
      {activo.proyectos ? <Proyectos animar={animar} desactivar={desactivar}/> : null }
      {activo.prensa ? <Prensa animar={animar} desactivar={desactivar} /> : null }
      {activo.red ? <Red animar={animar} desactivar={desactivar} /> : null }
      {activo.carlota ? <Carlota animar={animar} desactivar={desactivar} /> : null}
      
    </div>
  )
}

export default App
