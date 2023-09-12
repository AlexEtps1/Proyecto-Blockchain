import React from "react";
import {Input} from "@nextui-org/react";
import { EyeFilledIcon } from "../inicioSesion/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../inicioSesion/EyeSlashFilledIcon";
import {Button} from "@nextui-org/react";

export default function FormularioRegistro() {

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);


  return (
    <>
    <Input
      isClearable
      type="email"
      label="Email"
      variant="bordered"
      placeholder="Enter your email"
      defaultValue="junior@nextui.org"
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
      />
    <Input
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
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
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
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

    <Button color="primary">
      Enviar
    </Button>


   </>
  );
}
