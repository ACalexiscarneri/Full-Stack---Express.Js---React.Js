import { useState } from "react";
import styles from "../components/NuevoTurno.module.css"
import axios from "axios";


const NuevoTurno = ({handlerOnClose , agregarTurno}) =>{

    const [nuevoTurno, setNuevoTurno] = useState({
        date:"",
        time:""
    })

    const handlerOnChange = (event)=>{
   const { name , value} = event.target

   setNuevoTurno({
    ...nuevoTurno,
    [name]:value
   })

    }
    

    const handlerOnSubmit = async (event) =>{
      event.preventDefault();

      try{
     const {data} = await axios.post("http://localhost:3000/shifts/schedule", nuevoTurno);
     
     alert(`Gracias ${data.user.name} , su turno fue asignado correctamente`)

     agregarTurno(data);
     
     
      }catch(error){
        console.log(error.config)
      }
    }


    return(
        <section className="fixed inset-0 bg-black bg-opacity-50 p-6  flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg size-80">
            <button className="bg-slate-200 hover:bg-red-600 text-gray-800 font-bold py-1 px-2 rounded focus:outline-none" onClick={handlerOnClose}>X</button>
            <form onSubmit={handlerOnSubmit}>
                <div className="mb-3 mt-5">
                    <label htmlFor="date">Fecha:</label>
                    <input 
                    type="date" 
                    value={nuevoTurno.date} 
                    id="date" 
                    name="date" 
                    onChange={handlerOnChange}>
                    </input>
                </div>
                
                <div className="mt-2">
                    <label htmlFor="time">Hora:</label>
                    <input type="time" 
                    value={nuevoTurno.time} 
                    onChange={handlerOnChange}  
                    id="time" 
                    name="time">
                    </input>  
                </div>

                <button type="submit" className={styles.nuevoTurno}>Nuevo Turno</button>
            </form>
            </div>
        </section>
    )
    
}

export default NuevoTurno;
