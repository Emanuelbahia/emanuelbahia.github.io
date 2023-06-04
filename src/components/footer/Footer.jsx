import { useState } from "react";
import { BiCopyright } from "react-icons/bi";
import "./footer.css"
import Help from "./Help";

function Footer() {

   //cuando se carga la pagina no se muestra el componente Help y al hacer click en ayuda y recursos se muestra
   const [show, setShow] = useState(false)
  
    return ( 
        <>
        {
            show && ( <Help/> )
        }       
        <div className="footer"> 
             <div className="footerContainer">
                 <div>
                    <span className="footer-terms"> <BiCopyright /> YourHotel, inc. </span> { " - " }
                    <span className="footer-terms">Terminos</span> { " - " }
                    <span className="footer-terms">Privacidad</span>
                 </div>
                 <div>
                     <span className="textDecoration footer-terms" onClick={ () => { setShow(!show) } } >Ayuda y recursos</span>
                 </div>
             </div>
        </div>
        </>
     );
}

export default Footer;