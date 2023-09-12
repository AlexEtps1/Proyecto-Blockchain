import React from "react";
import {Input} from "@nextui-org/react";
import { EyeFilledIcon } from "../inicio/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../inicio/EyeSlashFilledIcon";
import {Link} from "@nextui-org/react";

export default function FormularioRegistro() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form className="formRegistro text-center">
      <div className="divIcono">
        <i className="bi bi-person-fill-add text-center display-1"></i>
      </div>
      
      <div className="divInput">
        <Input
          size = "lg"
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Enter your email"
          // validationState="invalid"
          // errorMessage="Please enter a valid email"
          onClear={() => console.log("input cleared")}
          className="w-full"
          isRequired = "true"
          />

        <Input
          size = "lg"
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          isRequired = "true"
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="w-full"
        />
      </div>

      <div className="divBotones">
        <a class="btn btn-primary" role="button" aria-disabled="true" onClick={pruebaAlert}>Acceder</a>
        <a class="btn btn-secondary" role="button" aria-disabled="true" href="http://localhost:5173">Regresar<Link to="registro"></Link></a>
      </div>

      <div className="divIniciarRegistro">
        <h1 className="H1-iniciar-registro">¿No tiene una cuenta en nuestra web? <a href="http://localhost:5173/registro" className="a-iniciar-registro">Registrate Aqui</a></h1>
      </div>
    </form>
  );
}


function pruebaAlert(){
  alert("Entrando al sistema")
}