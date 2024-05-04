
import { useState } from "react";
import Turno from "../components/Turno";
import misTurnos from "../helpers/misturnos"


//const [turno, setTurno] = useState(misTurnos)


const Misturnos = ()=>{

        return(
            <>
            <h1>Esta es la pagina de Mis Turnos</h1>
                    <>
                    {
                    misTurnos.map((turno) => {
                    const {date,time,status} = turno
                    return(
                        <Turno
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