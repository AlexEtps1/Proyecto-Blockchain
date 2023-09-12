import nft2 from "../img/nft2.jpg";
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export function ModalBtn() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} radius="full" className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg">Ver mas<i class="bi bi-plus-square-dotted"></i></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={true}> {/*Propiedades isDimissible permite cerrar el modal si se da esc o con un click fuera de su area*/}
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Producto 1</ModalHeader>
              <ModalBody>
                        <div class="row gx-4 gx-lg-5 align-items-center">
                            <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={nft2} alt="..." /></div> 
                            <div class="col-md-6">
                                <h2 class="display-6 fw-bolder">Producto1</h2>
                                <div class="fs-5 mb-5">
                                    <span class="text-decoration-line-through">$ 4321.78</span>
                                    <span> $ 1234.01</span>
                                </div>
                                <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsum ducimus natus in vero.</p>
                                <div class="d-flex">
                                <button class="btn btn-outline-dark flex-shrink-0" type="button" onclick=""><i class="bi-cart-fill me-1"></i>Add to cart</button> 
                                </div>
                            </div>
                        </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>Close</Button>
                {/* <Button color="primary" onPress={onClose}>Agregar</Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
