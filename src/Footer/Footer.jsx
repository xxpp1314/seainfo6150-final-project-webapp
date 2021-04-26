import React from 'react';
import styles from "./Footer.module.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.margin}>
            <img className={styles.logo} src={logo} alt=""/>
                <li className={styles.li}>
                    <p className={styles.p}> Pet Home Inc.</p>
                </li>
                <Link to="/contactUs" className={styles.optionLink}>
                <p className={styles.p}>Contact Us</p>
                </Link>
                <Link to="/feedback" className={styles.optionLink}>
                <p className={styles.p}>Feedback</p>
                </Link>
                <li className={styles.li}></li>
                    <p className={styles.p}>Open Hours: Mon - Thu: 9 a.m. - 8 p.m. Fri - Sun: 10 a.m. - 7 p.m.</p>
            </div>
        </div>
    )
}

export default Footer;