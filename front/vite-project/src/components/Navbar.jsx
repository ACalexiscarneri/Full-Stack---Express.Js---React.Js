import styles from "./Navbar.module.css";
const Navbar = ()=>{
    return (
        <>
        <div className={styles.Container}>
        <nav className={styles.navContainer}>
            <ul className={styles.navList}>
                <li className={styles.navItems}>
                    <span className={styles.navtext}>
                     HOME
                    </span>
                </li>
                <li className={styles.navItems}>
                    <span className={styles.navtext}>
                     TURNS
                    </span>
                </li>
                <li className={styles.navItems}>
                    <span className={styles.navtext}>
                     ABOUT
                    </span>
                </li>
                <li className={styles.navItems}>
                    <span className={styles.navtext}>
                        CONTACT
                    </span>
                </li>
            </ul>
        </nav>
        </div>
        </>
    )
    
}


export default Navbar;