import React from "react";
import {Input} from "@nextui-org/react";
import { EyeFilledIcon } from "../inicioSesion/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../inicioSesion/EyeSlashFilledIcon";
import {Button, Link} from "@nextui-org/react";

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
          data-focus=""
          // validationState="invalid"
          // errorMessage="Please enter a valid email"
          onClear={() => console.log("input cleared")}
          className="w-full flex flex-col gap-4"
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
          className="max-w-xs"
        />

        <Input
          size = "lg"
          label="Confirm Password"
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
            className="max-w-xs"
        />
      </div>
      <div className="divBotones">
        <a class="btn btn-primary" role="button" aria-disabled="true" onClick={pruebaAlert}>Registrarse</a>
        <a class="btn btn-secondary" role="button" aria-disabled="true" href="http://localhost:5173">Regresar<Link to="registro"></Link></a>
      </div>
    </form>
  );
}


function pruebaAlert(){
  alert("Usuario registrado")
}