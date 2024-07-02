import { useState , useEffect} from "react";
import Login from "../components/login"
import Register from "../components/register";
import Button from "../components/Button";
import secondImage from "../assets/foto1.jpg"
import firstImage from "../assets/foto2.jpg"
import flecha from "../assets/flecha.png"
import flechaIzq from "../assets/flechaIzq.png"





const Home = () =>{

  const [currentImage, setCurrentImage] = useState(firstImage);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setCurrentImage(secondImage);
    }, 3000);

    
    return () => clearTimeout(timer);
  }, []);




  const handleChangeDer = () => {
    setCurrentImage((prevImage) =>
      prevImage === firstImage ? (secondImage): (firstImage)
    );
  };

 const handleChangeIzq = () => {
  setCurrentImage((prevImage) => 
  prevImage === secondImage ? (firstImage) : (secondImage)
  )
 }



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
      <div className="flex flex-row items-start justify-between">
       
        <div className="basis-10 m-1">
          {!mostrarlogin ? (
            <Button title="Login" onClick={handlerLoginClick}/>)
            : (<Login  handlerOnClose={handlerOnClose}/>
            )}
        </div>
        
        <div className="m-1">
          {!mostrarRegister ? (
            <Button title="Register" onClick={handlerRegisterClick} />
          ) : (<Register handlerRegisterClose={handlerRegisterClose}/>)}
        </div>

        <div className="flex items-center justify-center"> 
          <button onClick={handleChangeIzq}>
            <img className="max-w-10" src={flechaIzq}></img>
          </button>

          <img className="size-3/4 rounded-3xl mx-4"  src={currentImage}></img>

          <button onClick={handleChangeDer}>
            <img className="max-w-10" src={flecha}/>
          </button>
        </div>

      </div>
        </>
    )
}

export default Home;