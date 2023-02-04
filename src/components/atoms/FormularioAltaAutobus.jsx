import { useRef } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/buss.png";
import '../../assets/styles/Styles.css'

  function FormularioAltaAutobus() {
    const [selectedOption, setSelectedOption] = useState("Turismo");
    const [license, setLicense] = useState(Math.floor(Math.random() * 100000));
  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

    const navigate = useNavigate();

    const formDataF = useRef();
    const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(formDataF.current);
    let URI = "http://34.225.239.102/api/autobus/register";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clave: formData.get("clave"),
        placa: formData.get("placa"),
        numasientos: formData.get("asientos"),
        fecha: formData.get("fecha"),
        tipo: formData.get("tipo"),
        nombre: formData.get("chofer"),
        licencia: license,
      }),
    };
    console.log(options.body)
    fetch(URI, options)
      .then((response) => response.json())
      .then((data) => {
        alert(JSON.stringify(data));
      });
  };

  return (

    <div className='form-body'>
    <img src={Logo} alt="" />

    <form className='login-form' ref={formDataF}>

    <input type="text" id="clave" name="clave" placeholder="CLAVE AUTOBUS" />{" "}
    <input type="text" id="placa" name="placa" placeholder="PLACA AUTOBUS"/>{" "}
    <input type="number" id="asientos" name="asientos" placeholder="NUMERO DE ASIENTOS"/>
    <input type="Date" id="fecha" name="fecha" placeholder="FECHA DE ALTA"/>
    <select value={selectedOption} onChange={handleChange} id="tipo" name="tipo">
                <option value="Turismo">Turismo</option>
                <option value="Lujo">Lujo</option>
    </select>
    <input type="text" id="chofer" name="chofer" placeholder="NOMBRE DEL CHOFER"/>
    <input name="licencia" value={license} disabled></input>

    <button onClick={handlerClick}>ALTA AUTOBUS</button>

    </form>
    </div>

  );
}

export default FormularioAltaAutobus;
