
import {useContext, useEffect, useState } from "react";
import Turno from "../components/Turno";
import TablaTurnos from "../components/TablaTurnos";
import axios from "axios";
import  {UserContext} from "../components/UserProvider"
import Button from "../components/Button";
import NuevoTurno from "../components/NuevoTurno";
import ButtonCancel from "../components/ButtonCancel";


const Misturnos = ()=>{

    const {user} = useContext(UserContext);


    const [turnos, setTurnos] = useState([])

    useEffect(()=>{
        try{
            if(user){
                 axios.get(`http://localhost:3000/users/${user.id}`)
                .then((res) => setTurnos(res.data.shifts));
                
            }
            
        }catch(error){
           console.log(error)
        }
       
    },[user])

  const agregarTurno = (nuevoTurno) =>{
    setTurnos([...turnos , nuevoTurno])
    
  }


 const [ mostrarTurno , setMostrarTurno] = useState(false);
  
  const handlerTurnoClick = ()=>{
    setMostrarTurno(true);
  }
  const handlerOnClose = ()=>{
    setMostrarTurno(false);
  }
    
        return(
     <>
     
        {!mostrarTurno ? (<Button title="Nuevo Turno" onClick={handlerTurnoClick}/>) 
        :(<NuevoTurno  agregarTurno={agregarTurno} handlerOnClose={handlerOnClose} />)}
                    
                    <TablaTurnos/>
                    {/*turno.status === "active" ? <ButtonCancel  /> : null}*/}
                      
                    {
                      turnos.map((turno) => {
                        const {id,date,time,status} = turno
                    return(
                          <>
                      <Turno
                      key={id}
                      date={date}
                      time={time}
                      status={status}
                      id={id}
                      /> 
                      </>  
                    )
                  }) 
                }
                </>
        )
}

export default Misturnos;