import styles from "./Button.module.css"

const Button = ({onClick,title})=>{
    return(
        <button className={styles.buttonLogin} onClick={onClick}>{title}</button>
    )
}

export default Button;