
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

function Login() {

    const navigate = useNavigate();
    const inputEmail = useRef(null);
    const inputPassword = useRef(null);

    //const loginPicture = new URL("../../assets/images/login.jpg", import.meta.url)

    const handleSubmit = (e) => {
        e.preventDefault();

        let email = "emanuel@gmail.com";
        let password = 123456
     
        //si el email y la contraseña concuerdan se redirige al home
        if ( email === inputEmail.current.value && password === inputPassword.current.value ) {
            navigate("/");
        }
        
    } 

    return ( 
        <div className="centerLogin">
            <div className="absoluteLogin">
            <h2 className="h2-login">Login</h2>
            <form className="form-login" onSubmit={ handleSubmit }>
                <label className="label-login" htmlFor="" >Email</label>
                <input className="input-login" type="text" name="" ref={ inputEmail } />

                <label className="label-login" htmlFor="" >Password</label>
                <input className="input-login" type="password" name="" ref={ inputPassword } />

                <button className="button-login">Login</button>
            </form>
            </div>
            <img className="imageLogin" src= { "https://fotos.hoteles.net/articulos/playa-barceloneta-barcelona-3153-1.jpg" } />
        </div>
     );
}

export default Login;
