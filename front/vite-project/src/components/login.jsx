import styles from "./Login.module.css";


const Login = ()=>{
    return(
        <seccion className={styles.container}>
         <form>
            <div className={styles.divContainer}>
              <input type="text" id="username" name="username"></input>
            </div>
            <div>
               <input type="text" id="password" name="password"></input>
            </div>
            <button>LOGIN</button>

        </form>
        </seccion>
    )
}

export default Login