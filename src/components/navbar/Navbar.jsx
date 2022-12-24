import { Link } from "react-router-dom"
import Search from "../search/Search";
import "./navbar.css"

function Navbar() {
    return ( 
        <div className="navbar">
            <div className="navbarContainer">
                <Link to="/" className="noLine" >
                    <div className="logoNameContainer">
                        <div className="logo">
                            YH
                        </div>
                        <span className="spanName">YourHotel.com</span>
                    </div>
                </Link> 
                <Search/>
                <div>
                    <Link to="register" className="noLine" > <button className="buttonRegister">Register</button> </Link> 
                    <Link to="login" className="noLine" > <button className="buttonRegister">Login</button> </Link>
                </div>
            </div>  
        </div>
     );
}

export default Navbar;
