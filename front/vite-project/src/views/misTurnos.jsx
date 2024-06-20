
import { useContext, useEffect, useState } from "react";
import Turno from "../components/Turno";
import axios from "axios";
import { UserContext} from "../components/protectedRoute"


const Misturnos = ()=>{

    const {user} = useContext(UserContext);

    const [turnos, setTurnos] = useState([])

    useEffect(()=>{
        try{
            axios.get("http://localhost:3000/shifts")
            .then((res) => setTurnos(res.data));

        }catch{

        }
       
    },[])



    
        return(
            <>
            <h1>Esta es la pagina de Mis Turnos</h1>
                    <>
                    {
                    turnos.map((turno) => {
                    const {id,date,time,status} = turno
                    return(
                        <Turno
                        key={id}
                        date={date}
                        time={time}
                        status={status}
                        />
                    )
                    }) 
                }
                </>
            </> 
        )
}

export default Misturnos;