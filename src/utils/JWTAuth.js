const estaAutenticado = async (token) => {
    await fetch(`${import.meta.env.VITE_DEV_REQUEST}/autenticado.php`, {
        method: "POST",
        body: JSON.stringify({ token}),
        headers: {
            'Content-Type': 'application/json'
        },            
    })
    .then(response => response.json())
    .then(data => {
        if(data.token === false) {
            window.location.href = '/login';
        }
    });
}


const login = async (data) => {
    const LOGIN_ENDPOINT = `${SERVER_URL}/api/login.php`;

    try {

        let response = await axios.post(LOGIN_ENDPOINT, data);

        if(response.status === 200 && response.data.jwt && response.data.expireAt){
            let jwt = response.data.jwt;
            let expire_at = response.data.expireAt;

            localStorage.setItem("access_token", jwt);
            localStorage.setItem("expire_at", expire_at);

        }


    } catch(e){
        console.log(e);
    }
}

const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expire_at");
}

export { login, logout, estaAutenticado } 