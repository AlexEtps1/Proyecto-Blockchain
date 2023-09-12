// Dashboard.js
import React from 'react';
import ModalDetalleProducto from '../componentes/ModalDetalleProducto';
import Pie from '../componentes/Pie';
import NavbarMenu from '../componentes/NavbarMenu';

function DashboardInicio() {
  return (
    <div>
      <NavbarMenu />
      <ModalDetalleProducto />
      <Pie />
      {/* Otros componentes que desees mostrar en esta ruta */}
    </div>
  );
}

export default DashboardInicio;
