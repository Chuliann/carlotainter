import fondoRed from "../img/boton_red.png";

const Redes = () => {

    const redes = [
        {id: 1, titulo: "Lateinamerika Anders", link: "https://lateinamerika-anders.org/"},
        {id: 2, titulo: "FNENR", link: "https://www.facebook.com/FNENR/"},
        {id: 3, titulo: "Dar al Janub", link: "https://dar-al-janub.net/"},
        {id: 4, titulo: "Anti Imperialista", link: "https://www.antiimperialista.org/de/about"},
        {id: 5, titulo: "...", link: "#"},
        {id: 6, titulo: "...", link: "#"},
    ];

    return ( 
        <div className="redes">
            {redes.map((red) => (
                <a target="_blank" className="red" href={red.link} key={red.id}>
                    <p>{red.titulo}</p>
                    <img src={fondoRed}></img>
                </a>
            ))}
        </div>
     );
}
 
export default Redes;