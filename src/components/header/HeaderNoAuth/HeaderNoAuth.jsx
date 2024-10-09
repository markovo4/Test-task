import React from "react";
import Logo from "../../../assets/svg/Logo.jsx";
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";
import styles from './styles.module.scss'

const HeaderNoAuth = () => {
    return (
        <div className={styles.container}>
            <Logo width={'129'} height={'89'}/>

            <nav className={styles.navContainer}>
                <ul className={styles.linksContainer}>
                    <li className={styles.navLink}><Link to={routerNames.pageHome}>Home</Link></li>
                    <li className={styles.navLink}><Link to={routerNames.pageHome}>Success Stories</Link></li>
                    <li className={styles.navLink}><Link to={routerNames.pageHome}>Services</Link></li>
                    <li className={styles.navLink}><Link to={routerNames.pageHome}>Blog</Link></li>
                    <li className={styles.navLink}><Link to={routerNames.pageHome}>About us</Link></li>
                    <li className={styles.navLink}><Link to={routerNames.pageHome}>Career</Link></li>
                </ul>

                <div className={styles.buttonGroup}>
                    <button className={styles.button}>Sign Up</button>
                    <button className={styles.button}>Sign In</button>
                </div>
            </nav>

        </div>
    )
}

export default HeaderNoAuth;