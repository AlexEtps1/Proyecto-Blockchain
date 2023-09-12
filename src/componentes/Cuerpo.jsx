import React from "react";
import {Badge, Button, Switch, Pagination} from "@nextui-org/react";
import {NotificationIcon} from "../elementos/NotificationIcon";
import {CartIcon} from "../elementos/CartIcon";
import { Card } from "../elementos/Card";


export default function Cuerpo() {
  const [isInvisible, setIsInvisible] = React.useState(false);
  return (
    <section className="section-principal">
     <div className="flex items-center gap-4 contenido-ui">
      <div className="flex items-center gap-3">
        <Badge color="danger" content={5} isInvisible={isInvisible} shape="circle">
          <NotificationIcon className="fill-current" size={30} />
        </Badge>
        <Badge color="danger" content={50} isInvisible={isInvisible} shape="circle">
          <CartIcon size={30} />
        </Badge>
        <Switch isSelected={!isInvisible} onValueChange={(value) => setIsInvisible(!value)}>Mostrar</Switch>
      </div>
    </div>
    
    <div className="divCardPadre">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>

    <div className="div-pagination"><Pagination total={10} initialPage={1}/></div>
  </section>  
  );
}
