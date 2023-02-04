/* import { Link } from "react-router-dom"; */
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../../assets/styles/Styles.css'
import Logo from "../../assets/img/buss.png"

function FormRegister() {

    const navigate = useNavigate()

    const formDataF = useRef();

    const handlerClick=(e)=>{
        e.preventDefault();
        const newForm = new FormDataF(formDataF.current)
        let URI = "http://34.225.239.102/api/registrar/usuario";
        let options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            {
              "nombre": formData.get("name"),
              "usuario": formData.get("username"),
              "correo": formData.get("email"),
              "contraseña": formData.get("password")
            }
          ),
        };
        console.log(options.body);
        fetch(URI, options)
          .then((response) => response.json())
          .then((data) => {
            alert(JSON.stringify(data));
          });
      };

    return (
      <div className='form-body'>
        <img src={Logo} alt="" />
        <p className='text'>REGISTRATE</p>
        <form className='login-form' ref={formDataF}>

        <input type="text" id="name" name="name" placeholder="NOMBRE"/>
        <input type="text" id="email" name="email" placeholder="EMAIL"/>
        <input type="text" id="username" name="username" placeholder="USUARIO"/>
        <input type="password" id="pass" name="password" placeholder="CONTRASEÑA"/>

        <button onClick={handlerClick}>REGISTRAR</button>

        </form>
      </div>

    );
}

export default FormRegister;