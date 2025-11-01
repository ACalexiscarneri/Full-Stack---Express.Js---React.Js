import {useContext, useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import  {UserContext}  from "./UserProvider";
import { useDispatch } from "react-redux";
import { login } from "../redux/reduce";

const Login = ({handlerOnClose})=>{

  const [userdata , setUserdata] = useState({
     username:"",
     password:""
  })

  const [error ,setError] = useState(null)
  
  const handlerOnChange = (event) =>{
   const {name , value} = event.target;
  
   setUserdata({
     ...userdata,
     [name]:value
   });
  
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();


// Peticion post.
const handlerOnSubmit = async (event)=>{
  event.preventDefault();
  
  
  try{
 const {data} = await axios.post("http://localhost:3000/users/login", userdata)
 dispatch(login(data.user))
 localStorage.setItem('user', JSON.stringify(data.user));
 console.log('User logged in:', data.user.name); 
 navigate("/inicio")
 
  }catch(error){
    console.log(error)
    setError(error.response.data)
  }

}





    return (
  <section className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
    <div className="relative bg-white p-6 rounded-xl shadow-2xl w-80 font-sans">
      
      {/* Botón de cerrar */}
      <button
        onClick={handlerOnClose}
        className="absolute top-3 right-3 bg-slate-200 hover:bg-red-600 hover:text-white text-gray-700 font-bold py-1 px-2 rounded-md transition"
      >
        ✕
      </button>

      {/* Formulario */}
      <form onSubmit={handlerOnSubmit} className="flex flex-col gap-5 mt-2">
        
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-1">
          Iniciar sesión
        </h2>

        <div className="flex flex-col">
          <label htmlFor="username" className="text-gray-700 font-medium">
            Username:
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400 placeholder:italic placeholder:text-sm"
            type="text"
            value={userdata.username}
            id="username"
            name="username"
            placeholder="Ingresa tu usuario"
            onChange={handlerOnChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-700 font-medium">
            Password:
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400 placeholder:italic placeholder:text-sm"
            type="password"
            value={userdata.password}
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            onChange={handlerOnChange}
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm text-center">{error}</div>
        )}

        <div className="flex justify-end mt-2">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  </section>
);
}

export default Login