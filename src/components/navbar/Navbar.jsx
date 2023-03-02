import { Link } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import "./navbar.css"

function Navbar() {
    return ( 

        <div className="navbarContainer">
            <div className="navbar-title-register">
                <Link to="/" className="noLine" >
                    <div className="logoNameContainer">
                        <div className="logo">
                            YH
                        </div>
                        <span className="spanName">YourHotel.com</span>
                    </div>
                </Link> 
                <div className="container-reg-log">
                    <Link to="register" className="noLine" > <button className="buttonRegister">Register</button> </Link> 
                    <Link to="login" className="noLine" > 
                         <button className="buttonRegister"><FaUser className="iconLogin"/> <span className="letterLogin">Login</span> </button> 
                    </Link>
                </div>
            </div>        
        </div>  
     );
}

export default Navbar;
