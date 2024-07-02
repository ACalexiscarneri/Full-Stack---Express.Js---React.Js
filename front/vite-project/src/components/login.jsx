import {useContext, useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import  {UserContext}  from "./UserProvider";


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

  const {setUser, user} = useContext(UserContext);
  const navigate = useNavigate();

// Peticion post.
const handlerOnSubmit = async (event)=>{
  event.preventDefault();
  
  
  try{
 const {data} = await axios.post("http://localhost:3000/users/login", userdata)
 setUser(data.user)
 navigate("/inicio")
 
 localStorage.setItem('user', JSON.stringify(data.user));
 
  }catch(error){
    console.log(error)
    setError(error.response.data)
  }

}

    return(
<section className="fixed bg-black bg-opacity-50 p-6 inset-0 flex justify-center items-center">
    <div className="bg-white p-5 rounded-lg shadow-lg size-80 ">
        <button className="bg-slate-200 hover:bg-red-600 text-gray-800 font-bold py-1 px-2 rounded focus:outline-none " onClick={handlerOnClose}>X</button>
         <form onSubmit={handlerOnSubmit}>
            <div className="my-4 ">
              <label htmlFor="username"><strong>Username:</strong></label>
              <input className="m-0.5 rounded-md"
              type="text" 
              value={userdata.username}
              id="username" 
              name="username"
              placeholder="username"
              onChange={handlerOnChange}>
              </input>
            </div>

            <div className={styles.divPassword}>
                <label htmlFor="password"><strong>Password:</strong></label>
               <input className="m-0.5 rounded-md"
               type="password" 
               value={userdata.password}
               id="password" 
               name="password"
               placeholder ="password" 
               onChange={handlerOnChange}
               ></input>
            </div>
            <div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>

            <button className={styles.loginButton}>LOGIN</button>
        </form>
    </div>
</section>
    )
}

export default Login