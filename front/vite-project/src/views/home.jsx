import { useState } from "react";
import Login from "../components/login"
import Register from "../components/register";



const Home = () =>{

  const [ login , setLogin] = useState(false);
  
  const handlerLoginClick = ()=>{
    setLogin(true);

  }


  const [mostrarRegister, setMostrarRegister] = useState(false);
   
  const handlerRegisterClick = () =>{
      setMostrarRegister(true);
  }
  
    return (
        <>
        <div>
          {!login ? (
            <button onClick={handlerLoginClick}>Log In</button>)
            : (<Login/>
          )}
        </div>
        <div>
          {!mostrarRegister ? (
            <button onClick={handlerRegisterClick}>Register</button>
          ) : (<Register/>)}
        </div>
      
        </>
    )
}

export default Home;