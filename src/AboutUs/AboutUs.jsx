import React from 'react';
import styles from "./AboutUs.module.css";
import AboutUs from "../images/AboutUs.jpg";
import { Link } from "react-router-dom";

const AboutUS = () => {
    return (            
        <div className={styles.mainpage}>
            <div className={styles.grid}>
                    <div className={styles.flex}>
                        <div className={styles.flexitems}>
                            <img className={styles.image} src={AboutUs} alt=""></img>
                        </div>
                        <div className={styles.gap}> </div>
                        <div className={styles.flexitems}>
                            <h1>A Little Bit About Us</h1><br /><br />
                            <p>In North America millions of lost, stray, and abandoned animals enter shelters every year. With so many animals available, pet adoption is quickly becoming the most popular method of finding a new pet.</p><br />
                            <p>However, pets are innocent and adorable. So, If you are considering adopt a pet, we are the place that can help you find your suitable pet.</p><br />
                            <p>In addition, if you have ideas or suggestions to improve our service, please feel free to speak your thought. Click <Link className={styles.text} to="/feedback">here</Link> to provide your feedback</p><br /><br />
                        </div>
                    </div>
            </div>   
        </div>
    )
}

export default AboutUS;