import React from "react";
import Web3 from 'web3';
import navbar from "../css/navbar.css";
import { useState, useEffect } from "react"

export default function Prueba(props) {

    return(
    <div className="div-prueba">
        <h1 class="title-font font-medium text-lg text-yellow-400">Saldo:  </h1>
        <h1 class="text-blue-600"> {props.balance != null ? Number(props.balance).toFixed(4) : " "}  ETH</h1>
    </div>
    )
}