// Dashboard.js
import React from 'react';
import Cuerpo from '../componentes/Cuerpo';
import Pie from '../componentes/Pie';
import NavbarMenu from '../componentes/NavbarMenu';

function DashboardInicio() {
  return (
    <div>
      <NavbarMenu />
      <Cuerpo/>
      <Pie />
      {/* Otros componentes que desees mostrar en esta ruta */}
    </div>
  );
}

export default DashboardInicio;
