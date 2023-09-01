import React from "react";
import {NavbarMenuItem, NavbarMenu, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, Button, NavbarMenuToggle} from "@nextui-org/react";
import {AcmeLogo} from "../elementos/AcmeLogo.jsx";
import { useState, useEffect } from "react"
import {SearchIcon} from "../elementos/SearchIcon.jsx";
import Web3 from 'web3';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Prueba from './prueba.jsx';
import navbar from "../css/navbar.css?inline";




export default function SideNavbarMenu() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  
  const [web3, setWeb3] = useState(null);     //guardar instancia de web3
  const [account, setAccount] = useState(null); //guardar cuenta 
  const [balance, setBalance] = useState(null); //guardar el balance
  const [contract, setContract] = useState(null);
  const [verificacionWallet, setVerificacionWallet] = useState(false); //verificacion si tenemos una wallet en el navegador
  const [buttonWallet, setButtonWallet] = useState(false);
  const [listarInformacionEstudios, setListarInformacionEstudios] = useState([]);

  const MySwal = withReactContent(Swal);

  //Funcion para conectae wallet
  const conectarWallet = async () => {

    if (typeof window.ethereum !== 'undefined') { // Verificamos si tenemos metamask

      const web3Instance = new Web3(window.ethereum); //guardamos el obj de eth
      setWeb3(web3Instance);

      try {
        await window.ethereum.enable(); //Solicitamos el acceso a la wallet

        // Obtener la dirección de la cuenta actual
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);

        // Obtener el saldo de la cuenta
        const balanceWei = await web3Instance.eth.getBalance(accounts[0]);  // Representa el saldo de una cuenta en wei

        const balanceEth = web3Instance.utils.fromWei(balanceWei, 'ether'); // Convertir el saldo en wei a ethe
        setBalance(balanceEth);
        setButtonWallet(false);

        const contractInstance = new web3Instance.eth.Contract(
          smartContractRegistro,
          smartContractRegistro && "0x34D44DBc2c73B0eCb4bC738bfB850f92AaB89ae2"
        ); //crear una instancia
        setContract(contractInstance);

        // llamado de metodos
      } catch (error) {
        console.error(error);
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Has rechazado la solicitud de conexión con tu wallet'
        });
      };

    } else {
      setVerificacionWallet(false);
    };

  };

  useEffect(() => {
    async function Wallet() { //verificacion si tenemos una wallet disponible
      if (typeof window.ethereum !== 'undefined') {
        setVerificacionWallet(true);
        setButtonWallet(true);
      };
    };

    Wallet();
  }, []);



  return (
  
    <div className="div-nav-bar"> 

    <Navbar disableAnimation isBordered className="bg-black text-white">
      
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" >
            Customers
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {/* BOTON BUSQUEDA*/}

        
    
    
    
    <Prueba account={account} balance={balance} contract={contract} />


        <Input 
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <NavbarItem className="hidden lg:flex ">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
        {verificacionWallet ? (
          <>
          {/* conexion wallet */}
          {buttonWallet ? (
          <Button onClick={conectarWallet} as={Link} color="warning" href="#" variant="flat">
            Wallet
          </Button>
          ) : (
            <Button onClick={conectarWallet} as={Link} color="warning" href="#" variant="flat">
            Wallet conectada
          </Button>
          )}
            </>
          ):(
            <h1>
              ¡Importante! Para comenzar en esta plataforma, es esencial que crees una billetera (wallet) antes de proceder. La billetera te permitirá gestionar y asegurar tus activos de manera segura. No olvides configurar una billetera antes de continuar para asegurarte de que todas tus transacciones estén protegidas. ¡Empieza tu viaje hacia un mundo de posibilidades asegurando tus activos con una billetera adecuada!
            </h1>
          )}

          
        </NavbarItem>
      </NavbarContent>

    
      
      
    
    
    


      {/* MENU RESPONSIVE */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </div>

    
  );
}

