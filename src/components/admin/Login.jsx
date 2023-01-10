import { useEffect } from "react";
import { useState } from "react";


const Login = () => {


    const [campos, setCampos] = useState({
        usuario: "",
        password: ""
    });
    const [error, setError] = useState(null);

    const handleChange = e => {
        setCampos({
            ...campos,
            [e.target.name]: e.target.value 
        });
    }

    const handleSubmit = async e => {
        e.preventDefault();

        let{usuario, password} = campos;
        if(usuario === "" || password === "") {
            setError("Los campos son obligatorios");
            return;
        }

        await fetch(`${import.meta.env.VITE_DEV_REQUEST}/login.php`, {
            method: "POST",
            body: JSON.stringify(campos),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },            
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }

    useEffect(() => {
        setTimeout(() => {
            setError(null);
        }, 3000);
    }, [error])

    return(
        <div id="login">
            <div className="contenedor">
                <form className="formulario" onSubmit={e => handleSubmit(e)}>
                    <label>Usuario:</label>
                    <input 
                        type="text"
                        value={campos.usuario}
                        name="usuario"
                        onChange={e => handleChange(e)}
                    />
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={campos.password}
                        name="password"
                        onChange={e => handleChange(e)}
                    />
                    <input 
                        type="submit"
                        value="Iniciar Sesion"
                    />
                    {error ? <div className="error">{error}</div> : null}
                </form>
            </div>
        </div>
    );
}


export default Login;