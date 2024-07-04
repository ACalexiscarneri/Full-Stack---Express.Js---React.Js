import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logout from "../assets/logout.svg"
import LogoutButton from "./logout";


const Navbar = ()=>{


    return (
        <>
        
        <div className="">
        <nav className="bg-slate-400 py-4 shadow">
            <ul className="flex justify-between">
                <li className={styles.navItems}>
                    <NavLink  className={({isActive}) => (isActive ? "active" : "")} to="/inicio">
                    
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
                    <LogoutButton/>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
    
}


export default Navbar;