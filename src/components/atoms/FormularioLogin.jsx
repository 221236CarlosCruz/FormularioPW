import {useState} from 'react'
import { Link } from "react-router-dom";
import Logo from "../../assets/img/buss.png"
import '../../assets/styles/Styles.css'

function LoginS() {
    const [stateForm,setStateForm]=useState('')
    const handlerClick=(e)=>{
        e.preventDefault()
        setDescription({msn:username})
    }
    const handlerChange=(e)=>{
        setStateForm({...stateForm,username: e.target.value})
    }
    const handlerChangePassword=(e)=>{
        setStateForm({...stateForm,password: e.target.value})
    }
    
    return (

      <div className='form-body'>
        <img src={Logo} alt="" />
        <p className='text'>Bienvenido</p>
        <form className='login-form'>
        <input type="text" value={stateForm.username} onChange={handlerChange} placeholder="USUARIO" />
        <input type="password" value={stateForm.password} onChange={handlerChangePassword} placeholder="CONTRASEÑA" />
        <button onClick={handlerClick}>Iniciar Sesion</button>
        <Link to="/Register"> <button>Registrarme</button></Link>
        <Link to="/AltaBuss"> <button>Alta de autobus</button></Link>
        <label>{JSON.stringify(stateForm)}</label>
        </form>
      </div>
    );
}

export default LoginS;