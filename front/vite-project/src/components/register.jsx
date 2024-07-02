import { useContext, useState } from "react";
import styles from "./register.module.css";

import axios from "axios"
import { useNavigate } from "react-router-dom";
import  {UserContext}  from "./UserProvider";

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

 const {setUser} = useContext(UserContext);
 const navigate = useNavigate();


 const handlerOnsubmit = async (event) =>{
     event.preventDefault()

try{
   const {data} = await axios.post("http://localhost:3000/users/register", registerData,);
   setUser(data)
   navigate("/turnos")
   alert(`bienvenido ${data.name}`)
}catch(error) {
    console.log(error.response.data.error)
    setErrors(error.response.data.error)
   console.log(errors)
}
 }

    return(
        <section className={styles.container}>
            <div className={styles.modal}>
            <button className={styles.closeButton} onClick={handlerRegisterClose}>X</button>
            <form onSubmit={handlerOnsubmit}>
                <div className={styles.divName}>
                    <label htmlFor="name">Name</label>
                    <input className=" m-2 rounded-md"
                    type="text" 
                    value={registerData.name} 
                    id="name" 
                    name="name" 
                    onChange={handlerOnChange}>
                    </input>
                </div>
                
                
                <div className={styles.divEmail}>
                    <label htmlFor="email">Email</label>
                    
                    <input className=" m-2 rounded-md" 
                    type="email" 
                    onChange={handlerOnChange}  
                    value={registerData.email} 
                    id="email" 
                    name="email">
                    </input>  
                </div>

                <div className={styles.divDate}>
                    <label htmlFor="birthdate">Birthdate</label>
                    <input className=" m-2 rounded-md"
                    type="date" 
                    onChange={handlerOnChange}  
                    value={registerData.date} 
                    id="birthdate" 
                    name="birthdate">
                    </input>
                </div>

                <div className={styles.divDni}>
                    <label htmlFor="nDni">Dni:</label>
                    <input className=" m-2 rounded-md"
                    type="number" 
                    onChange={handlerOnChange}  
                    value={registerData.nDni} 
                    id="nDni" 
                    name="nDni">
                    </input>
                </div>

                <div className={styles.divUsername}>
                    <label htmlFor="username">Username</label>
                    <input className=" m-2 rounded-md"
                    type="text" 
                    onChange={handlerOnChange}  
                    value={registerData.username} 
                    id="username" 
                    name="username">
                    </input>
                </div>

                <div className={styles.divPassword}>
                    <label htmlFor="password">Password</label>
                    <input className=" m-2 rounded-lg"
                    type="password" 
                    onChange={handlerOnChange}  
                    value={registerData.password} 
                    id="password" 
                    name="password">
                    </input>
                </div>
                    {errors.map((error , i) => (
                     <div className="text-red-600">
                        {error}
                    </div>))}
                
                <button type="submit" className={styles.registerButton}>REGISTER</button>
            </form>
            </div>
        </section>
    )
    
}

export default Register;