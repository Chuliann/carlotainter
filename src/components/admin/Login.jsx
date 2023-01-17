import { useEffect } from "react";
import { useState } from "react";


const Login = () => {


    const [campos, setCampos] = useState({
        user: "",
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

        let{user, password} = campos;
        if(user === "" || password === "") {
            setError("Los campos son obligatorios");
            return;
        }

        await fetch(`${import.meta.env.VITE_DEV_REQUEST}/login.php`, {
            method: "POST",
            body: JSON.stringify({
                ...campos,
                'tipo': "login"
            }),
            headers: {
                'Content-Type': 'application/json'
            },            
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'error') {
                setError('Uno o mas campos Son incorrectos')
            } 
            if(data.status === 'ok') {
                localStorage.setItem("token", data.token);
                siguientePagina();
            }
        });
    }

    const siguientePagina = () => {
        window.location.href = "/admin";
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
                        value={campos.user}
                        name="user"
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