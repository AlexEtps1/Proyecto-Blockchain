import {NextUIProvider} from "@nextui-org/react";
import { Route, Routes} from "react-router-dom";
import FormularioInicio from "./componentes/inicio/FormuInicio";
import FormularioRegistro from "./componentes/registro/FormuRegistro";
import DashboardInicio from "./dashboards/DashboardMain";


function App() {
    //----------------------------------------------------------------------------
    return (
    
      <NextUIProvider>
        <Routes>
          <Route path='/' element={<DashboardInicio />} />
          <Route path='/inicio' element={<FormularioInicio/>} />
          <Route path='/registro' element={<FormularioRegistro/>} />
        </Routes>
      </NextUIProvider>
    
  )
}

export default App
