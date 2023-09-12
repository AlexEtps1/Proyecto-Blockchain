// Dashboard.js
import React from 'react';
import NavbarMenu from '../componentes/NavbarMenu';
import Cuerpo from '../componentes/Cuerpo';
import Pie from '../componentes/Pie';

function DashboardMain() {
  return (
    <div>
      <NavbarMenu />
      <Cuerpo/>
      <Pie />
      {/* Otros componentes que desees mostrar en esta ruta */}
    </div>
  );
}

export default DashboardMain;
