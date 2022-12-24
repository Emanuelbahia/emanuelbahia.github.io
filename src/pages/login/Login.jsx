
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

function Login() {

    const navigate = useNavigate();
    const inputEmail = useRef(null);
    const inputPassword = useRef(null);

    const loginPicture = new URL("../../assets/images/login.jpg", import.meta.url)

    const handleSubmit = (e) => {
        e.preventDefault();

        let email = "emanuel@gmail.com";
        let password = 123456

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
            <img className="imageLogin" src= { loginPicture } />
        </div>
     );
}

export default Login;
/* 
&& inputPassword.current.value === password */