
import { useContext, useEffect, useState } from "react";
import Turno from "../components/Turno";
import TablaTurnos from "../components/TablaTurnos";
import axios from "axios";
import { UserContext} from "../components/protectedRoute"


const Misturnos = ({children})=>{

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



    
        return(
            <>
            {children}
                    <>
                    <TablaTurnos/>
                    {
                    turnos.map((turno) => {
                    const {id,date,time,status} = turno
                    return(
                            <Turno
                            
                            key={id}
                            date={date}
                            time={time}
                            status={status}
                            id={id}
                            />
                    )
                    }) 
                }
                </>
            </> 
        )
}

export default Misturnos;