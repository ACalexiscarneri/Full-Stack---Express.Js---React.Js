import { useState } from "react";
import Login from "../components/login"
import Register from "../components/register";
import Button from "../components/Button";


const Home = () =>{

  const [ mostrarlogin , setMostrarLogin] = useState(false);
  
  const handlerLoginClick = ()=>{
    setMostrarLogin(true);

  }

  const handlerOnClose = ()=>{
    setMostrarLogin(false);
  }


  const [mostrarRegister, setMostrarRegister] = useState(false);
   
  const handlerRegisterClick = () =>{
      setMostrarRegister(true);
  }

  const handlerRegisterClose = ()=>{
     setMostrarRegister(false);
  }

  
    return (
      <>
      
        <div>
          
          {!mostrarlogin ? (
            <Button title="Login" onClick={handlerLoginClick}/>)
            : (<Login  handlerOnClose={handlerOnClose}/>
          )}
        </div>
        <div>
          {!mostrarRegister ? (
            <Button title="Register" onClick={handlerRegisterClick} />
          ) : (<Register handlerRegisterClose={handlerRegisterClose}/>)}
        </div>
        </>
    )
}

export default Home;