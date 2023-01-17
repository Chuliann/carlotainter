

export const eliminarComentario = async id => {
    const token = localStorage.getItem('token');
    await fetch(`${import.meta.env.VITE_DEV_REQUEST}/comentarios.php`, {
        method: "POST",
        body: JSON.stringify({ token, tipo: 'eliminar', id}),
        headers: {
            'Content-Type': 'application/json'
        },            
    })
    .then(response => response.json())
    .then(data => (data));
}

export const aprobarComentario = async id => {
    const token = localStorage.getItem('token');
    await fetch(`${import.meta.env.VITE_DEV_REQUEST}/comentarios.php`, {
        method: "POST",
        body: JSON.stringify({ token, tipo: 'aprobar', id}),
        headers: {
            'Content-Type': 'application/json'
        },            
    })
    .then(response => response.json())
    .then(data => (console.log(data)));
}

