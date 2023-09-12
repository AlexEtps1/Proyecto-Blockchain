import {NextUIProvider} from "@nextui-org/react";
import { Route, Routes, Link } from "react-router-dom";
import Formulario from "./componentes/inicioSesion/Formu";
import FormularioRegistro from "./componentes/registro/FormuRegistro";
import DashboardInicio from "./dashboards/DashboardInicio";
import DashboardRegistro from "./dashboards/DashboardRegistro";

function App() {
    //----------------------------------------------------------------------------
    return (
    
      <NextUIProvider>
        <Routes>
          <Route path='/' element={<DashboardInicio />} />
          <Route path='/inicioSesion' element={<Formulario/>} />
          <Route path='/registro' element={<FormularioRegistro/>} />
          
        </Routes>
        
        
      </NextUIProvider>
    
  )
}

export default App
