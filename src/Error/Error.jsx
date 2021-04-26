import React from 'react';
import styles from "./Error.module.css";
import { Link } from "react-router-dom";
import error from "../images/error.jpg";

const Error = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div >
                    <img className={styles.image} src={error} alt="" />
                </div>  
                <h2>404</h2>
                <h4>Ooops, something is wrong with this page!</h4>
                <Link className={styles.link} to='/'>
                    Go back to Homepage
                </Link>
            </div>
        </div>
    )
}

export default Error;