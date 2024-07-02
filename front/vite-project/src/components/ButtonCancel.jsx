import axios from "axios"

const ButtonCancel = () => {

 const handleOnCancel = async ()=>{
try{
  const {data} = await axios.put("http://localhost:3000/shifts/cancel")
  console.log(data)
  
}catch(error){
  console.log(error)
}
 }


  return (
    <>
      <button onClick={handleOnCancel}>
        CancelarTurno
      </button>

    </>
  )
}

export default ButtonCancel;