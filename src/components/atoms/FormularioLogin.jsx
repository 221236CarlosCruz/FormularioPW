import {useRef, useState} from 'react'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import Logo from "../../assets/img/buss.png"
import '../../assets/styles/Styles.css'

function LoginSesion() {
    const [stateForm,setStateForm]=useState('')

    const navigate = useNavigate();
    const formDataF = useRef();

    const handlerClick=(e)=>{
        e.preventDefault();
        const formData = new FormData(formDataF.current);
        let URI = "http://34.225.239.102/api/iniciar";
        let options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            usuario: formData.get("username"),
            contrasenia: formData.get("password"),
          }),
        };
        console.log(options.body);
        fetch(URI, options)
          .then((response) => response.json())
          .then((data) => {
            alert(JSON.stringify(data));
          });
        };
        const navigateBus = useNavigate();
        const Alta=(e) =>{
          e.preventDefault();
          navigateBus("/AltaBuss")
        }
    
    return (
      <div className='form-body'>
        <img src={Logo} alt="" />
        <p className='text'>Bienvenido</p>

        <form className='login-form' ref={formDataF}>
        <input type="text" value={stateForm.username} placeholder="USUARIO" name='usuario'/>
        <input type="password" value={stateForm.password} placeholder="CONTRASEÑA" name='password'/>
        <button onClick={handlerClick}>Iniciar Sesion</button>

        <Link to="/AltaBuss"> <button onClick={handlerClick}> Iniciar Sesion</button> </Link> 

        <Link to="/Register"> <button> Registrarme</button> </Link> 

{/*         <label>{JSON.stringify(stateForm)}</label> */}
        </form>
      </div>
    );
}

export default LoginSesion;