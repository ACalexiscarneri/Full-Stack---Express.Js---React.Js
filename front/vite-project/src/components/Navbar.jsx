import { NavLink, Router } from "react-router-dom";
import styles from "./Navbar.module.css";
import logout from "../assets/logout.svg"


const Navbar = ()=>{

    

    return (
        <>
        <div className={styles.Container}>
        <nav className={styles.navContainer}>
            <ul className={styles.navList}>
                <li className={styles.navItems}>
                    <NavLink to="/">
                    <span className={styles.navtext}>
                     HOME
                    </span>
                    </NavLink>
                </li>
                <li className={styles.navItems}>
                    <NavLink to="/turnos">
                    <span className={styles.navtext}>
                     TURNS
                    </span>
                    </NavLink>
                </li>
                <li className={styles.navItems}>
                    <NavLink to="/about">
                    <span className={styles.navtext}>
                     ABOUT
                    </span>
                    </NavLink>
                </li>
                <li className={styles.navItems}>
                    <NavLink to="/contact">
                    <span className={styles.navtext}>
                        CONTACT
                    </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                    <img src={logout} className={styles.logout}></img>
                    </NavLink>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
    
}


export default Navbar;