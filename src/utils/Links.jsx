import fondoLink from "../img/boton_prensa.png";


const Links = () => {

    const links = [
        {id: 1, titulo: "Fernando Romero Forsthurber", link: "www.fernandoromeroforsthuber.com"},
        {id: 2, titulo: "Facebook/foto", link: "https://www.facebook.com/photo/?fbid=10167185105105427&set=pcb.10167185105140427"},
        {id: 3, titulo: "Vida Nueva Digital", link: "https://www.vidanuevadigital.com/2022/07/28/realizan-en-europa-documental-sobre-el-sacerdote-mexicano-defensor-de-los-indigenas/?fbclid=IwAR2_FLPSugJEKRvpiHMnu9ie9PwlVE_l7R1EdCgk8OTOPo9sHu6uQlCZne4"},
        {id: 4, titulo: "La Vanguardia", link: "https://www.lavanguardia.com/cine/20190404/46144228 6373/jowan-safadi-enfant-terrible-rock-palestino-namr ud-el-problematico.html"},
        {id: 5, titulo: "Austrian Films", link: "https://www.austrianfilms.com/Interview/fernando_ro mero_forsthuber/namrud_EN"},
        {id: 6, titulo: "Sintesis de Guerrero", link: "https://sintesisdeguerrero.com.mx/2018/12/02/cineastas -realizaran-pelicula-de-ayotzinapa/"},
        {id: 7, titulo: "YouTube Video", link: "https://www.youtube.com/watch?v=mE8TNut5p1E https://youtu.be/CXiPIiOhScE"},
        {id: 8, titulo: "Das Film Buero", link: "www.dasfilmbuero.com"},
        {id: 9, titulo: "YouTube Video II", link: "https://youtu.be/3o6hvLH8lnQ"},
        {id: 10, titulo: "Krone", link: "https://www.krone.at/2788168 https://vimeo.com/384972488 https://vimeo.com/384728671"},
        {id: 11, titulo: "Front Doc", link: "https://www.frontdoc.it/film/namrud/"},
        {id: 12, titulo: "OTS", link: "https://www.ots.at/presseaussendung/OTS_20221014_OT S0070/orientierung-kardinal-uebergibt-kirche-an-serbi sch-orthodoxe-gemeinde"},
        {id: 13, titulo: "OEAD", link: "https://oead.at/de/aktuelles/artikel/2019/11/film-als-kun stform-des-politischen-widerstands/"},
        {id: 14, titulo: "Metropoli Abierta", link: "https://www.metropoliabierta.com/b-magazine/play/do cs-barcelona-propone-uno-de-los-films-mas-polemicos- de-su-catalogo_15461_102.html"}, 
        
    ];

    return ( 
        <div className="links">
            {links.map((link) => (
                <a target="_blank" className="link" href={link.link} key={link.id}>
                    <p>{link.titulo}</p>
                    <img src={fondoLink}></img>
                </a>

            ))}
        </div>
     );
}
 
export default Links;