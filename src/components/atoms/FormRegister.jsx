/* import { Link } from "react-router-dom"; */
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/styles/Styles.css'
import Logo from "../../assets/img/buss.png"

function FormRegister() {
    const navigate = useNavigate()
const form = useRef()

    const handlerClick=(e)=>{
        e.preventDefault();
        const newForm = new FormData(form.current)
        alert('Nombre: '+newForm.get('name')+'Username: '+newForm.get('username')+'Password: '+newForm.get('password'))
    }
    return (


      <div className='form-body'>
        <img src={Logo} alt="" />
        <p className='text'>REGISTRATE</p>
        <form className='login-form'>

        <input className="inp" type="text" id="name" name="name" placeholder="NOMBRE"/>
        <input className="inp" type="text" name="username" placeholder="USUARIO"/>
        <input className="inp" type="password" id="pass" name="password" placeholder="CONTRASEÑA"/>

        <button onClick={handlerClick}>REGISTRAR</button>

        </form>
      </div>

    );
}

export default FormRegister;