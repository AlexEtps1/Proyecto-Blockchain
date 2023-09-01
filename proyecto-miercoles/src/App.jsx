import {NextUIProvider} from "@nextui-org/react";
import SideNavbarMenu from "./componentes/SideNavbarMenu";
import Slider from "./componentes/Slider";
import Body from "./componentes/Cuerpo";
import Pie from "./componentes/pie";
import Web3 from 'web3';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import smartContractRegistro from "./smartContract/registro.json";
import { useState, useEffect } from "react";


function App() {
    //----------------------------------------------------------------------------
    return (
    <NextUIProvider>
      <SideNavbarMenu/>
      <Slider/>
      <Body/>
      <Pie/>
    </NextUIProvider>
  )
}

export default App
