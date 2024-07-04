import axios from "axios"

const ButtonCancel = ({CancelarTurno,id}) => {

 const handleOnCancel = async ()=>{
try{
  const {data} = await axios.put(`http://localhost:3000/shifts/${id}`)
  console.log(data.id)
  CancelarTurno(data.id)
}catch(error){
  console.log(error)
}
 }


  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleOnCancel}>
        Cancelar
        Turno
      </button>

    </>
  )
}

export default ButtonCancel;