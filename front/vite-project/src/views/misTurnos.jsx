
import { useContext, useEffect, useState } from "react";
import Turno from "../components/Turno";
import axios from "axios";
import { UserContext} from "../components/protectedRoute"


const Misturnos = ({children})=>{

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
            {children}
                    <>
                    {
                    turnos.map((turno) => {
                    const {id,date,time,status,user} = turno
                    return(
                        <Turno
                        name={user.name}
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