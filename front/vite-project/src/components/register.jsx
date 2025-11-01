import { useContext, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import  {UserContext}  from "./UserProvider";
import { useDispatch } from "react-redux";
import { register } from "../redux/reduce";

const Register = ({handlerRegisterClose})=>{

    const [registerData , setRegisterData] = useState({
    name:"",
    email:"",
    birthdate:"",
    nDni:"",
    username:"",
    password:"",
 })

 const [errors,setErrors] = useState([])

 const handlerOnChange = (event)=>{
    const {name,value} = event.target;
    setRegisterData({
        ...registerData,
        [name]:value
    });
    
 }

 //const {setUser} = useContext(UserContext);
 const dispatch = useDispatch();
 const navigate = useNavigate();


 const handlerOnsubmit = async (event) =>{
     event.preventDefault()

try{
   const {data} = await axios.post("http://localhost:3000/users/register", registerData,);
   dispatch(register(data.user))
   localStorage.setItem('user', JSON.stringify(data.user));
   navigate("/inicio")
   alert(`bienvenido ${data.name}`)
}catch(error) {
    console.log(error)
    setErrors(error.response.data.error)
   console.log(errors)
}
 }

    return (
  <section className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 overflow-y-auto animate-fadeIn">
    <div className="relative bg-white p-6 rounded-xl shadow-2xl w-96 max-h-[90vh] overflow-y-auto font-sans animate-zoomIn">
      
      {/* Botón de cerrar */}
      <button
        onClick={handlerRegisterClose}
        className="absolute top-3 right-3 bg-slate-200 hover:bg-red-600 hover:text-white text-gray-700 font-bold py-1 px-2 rounded-md transition"
      >
        ✕
      </button>

      {/* Formulario */}
      <form onSubmit={handlerOnsubmit} className="flex flex-col gap-4 mt-2">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Crear cuenta
        </h2>

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-medium">
            Name
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400 placeholder:italic placeholder:text-sm"
            type="text"
            value={registerData.name}
            id="name"
            name="name"
            placeholder="Tu nombre"
            onChange={handlerOnChange}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-medium">
            Email
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400 placeholder:italic placeholder:text-sm"
            type="email"
            value={registerData.email}
            id="email"
            name="email"
            placeholder="tu@email.com"
            onChange={handlerOnChange}
          />
        </div>

        {/* Birthdate */}
        <div className="flex flex-col">
          <label htmlFor="birthdate" className="text-gray-700 font-medium">
            Birthdate
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-600"
            type="date"
            value={registerData.date}
            id="birthdate"
            name="birthdate"
            onChange={handlerOnChange}
          />
        </div>

        {/* DNI */}
        <div className="flex flex-col">
          <label htmlFor="nDni" className="text-gray-700 font-medium">
            DNI
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400 placeholder:italic placeholder:text-sm"
            type="number"
            value={registerData.nDni}
            id="nDni"
            name="nDni"
            placeholder="Tu número de documento"
            onChange={handlerOnChange}
          />
        </div>

        {/* Username */}
        <div className="flex flex-col">
          <label htmlFor="username" className="text-gray-700 font-medium">
            Username
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400 placeholder:italic placeholder:text-sm"
            type="text"
            value={registerData.username}
            id="username"
            name="username"
            placeholder="Nombre de usuario"
            onChange={handlerOnChange}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-700 font-medium">
            Password
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400 placeholder:italic placeholder:text-sm"
            type="password"
            value={registerData.password}
            id="password"
            name="password"
            placeholder="Crea una contraseña"
            onChange={handlerOnChange}
          />
        </div>

        {/* Errores */}
        {errors.length > 0 && (
          <div className="text-red-600 text-sm text-center">
            {errors.map((error, i) => (
              <div key={i}>{error}</div>
            ))}
          </div>
        )}

        {/* Botón Register */}
        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  </section>
);


    
}

export default Register;