import styles from "./Turno.module.css";


const Turno = ({id,date,time,status})=>{
 
    return(
       <div className={styles.container}>
          <h4 className={styles.date}>{date}</h4>
          <spam>{time}</spam>
          <h3>
            {status}
          </h3>
       </div>
    )
}


export default Turno;