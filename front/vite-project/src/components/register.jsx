import styles from "./register.module.css";


const Register = ()=>{
    return(
        <seccion className={styles.container}>
            <form>
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="=Name" ></input>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="=Email" ></input>
                </div>
                <div>
                    <label for="date">Birthday</label>
                    <input type="date" id="date" name="=Date" ></input>
                </div>
            </form>
        </seccion>
    )
    
}

export default Register;