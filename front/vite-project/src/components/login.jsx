import styles from "./Login.module.css";


const Login = ({handlerOnClose})=>{
    return(
<seccion className={styles.container}>
    <div className={styles.modal}>
        <button className={styles.closeButton} onClick={handlerOnClose}>X</button>
         <form>
            <div className={styles.divUsername}>
              <label><strong>Username:</strong></label>
              <input type="text" id="username" name="username"></input>
            </div>
            <div className={styles.divPassword}>
                <label><strong>Password:</strong></label>
               <input type="text" id="password" name="password"></input>
            </div>
            <button className={styles.loginButton}>LOGIN</button>
        </form>
    </div>
</seccion>
    )
}

export default Login