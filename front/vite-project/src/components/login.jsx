import {useContext, useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./protectedRoute";

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

  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();

// Peticion post.
const handlerOnSubmit = async (event)=>{
  event.preventDefault();
  
  
  try{
 const {data} = await axios.post("http://localhost:3000/users/login", userdata)
 setUser(data.user)
 navigate("/turnos")
 
  }catch(error){
    setError(error.response.data)
  }

}

    return(
<section className={styles.container}>
    <div className={styles.modal}>
        <button className={styles.closeButton} onClick={handlerOnClose}>X</button>
         <form onSubmit={handlerOnSubmit}>
            <div className={styles.divUsername}>
              <label htmlFor="username"><strong>Username:</strong></label>
              <input 
              type="text" 
              value={userdata.username}
              id="username" 
              name="username"
              placeholder="ejemplo@gmail.com"
              onChange={handlerOnChange}>
              </input>
            </div>

            <div className={styles.divPassword}>
                <label htmlFor="password"><strong>Password:</strong></label>
               <input 
               type="password" 
               value={userdata.password}
               id="password" 
               name="password"
               placeholder="password"
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