import React from 'react';
import styles from "./ContactUs.module.css";
import ContactUs from "../images/ContactUs.jpg";

const ContactUS = () => {
    return (            
        <div className={styles.mainpage}>
            <div className={styles.grid}>
                    <div className={styles.flex}>
                        <div className={styles.flexitems}>
                            <img className={styles.image} src={ContactUs} alt=""></img>
                        </div>
                        <div className={styles.gap}> </div>
                        <div className={styles.flexitems}>
                            <h1>Contact Information - Help You Find A Suitable Pet</h1><br /><br />
                            <h2>Address</h2>
                            <p>1234 Pet Road, Seattle, WA, 98000</p>
                            <h2>Call At</h2>
                            <p><a href="tel:+11234567890">+1 123-456-7890</a></p>
                            <h2>Fax</h2>
                            <p><a href="fax:+17894561230">+1 987-654-3210</a></p>
                            <h2>Email</h2>
                            <p><a href="mailto:pethome@gmail.com">pethome@gmail.com</a></p>
                        </div>
                    </div>
            </div>   
        </div>
    )
}

export default ContactUS