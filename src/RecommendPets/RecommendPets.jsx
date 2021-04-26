import React from 'react';
import styles from "./RecommendPets.module.css";
import Bane from "../images/Bane.jpg";
import Milo from "../images/Milo.jpg";
import { Link } from "react-router-dom";

const RecommendPets = () => {
    return (
        <div>
            <h1 className={styles.title}>
                Find Your Suitable Pet Here
            </h1>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.div}>
                        <img className={styles.image} src={Bane} alt=""/>
                        <Link className={styles.text} to="/dogs/Bane">Smart Dog: Bane</Link>
                    </div>
                    <div className={styles.div}>
                        <img className={styles.image} src={Milo} alt=""/>
                        <Link className={styles.text} to="/cats/Milo">Cute Cat: Milo</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendPets