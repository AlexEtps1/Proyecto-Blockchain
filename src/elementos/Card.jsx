import nft2 from "../img/nft2.jpg";
import React from "react";
import {Button} from "@nextui-org/react";
import {ModalBtn} from "../componentes/Modal";

export function Card(){
    return(
        <>
            <div className="card bg-dark" style={{ width: "18rem" }}>
                <img src={nft2} className="card-img-top" style={{ height: "15rem" }} />
                <div className="card-body card-body-border text-light p-4">
                    <h5 className="card-title text-center">Producto</h5>
                    <p className="card-text text-justify">
                    Some quick example text to build on the card title and make up thebulk of the card's content.</p>
                    <div className="verMas-comprar">
                    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-blue-700 text-white shadow-lg" > Comprar <i class="bi bi-cart4"></i></Button>
                    <ModalBtn/>
                    </div>
                </div>
            </div>
        </>
    )
}