import React from 'react';
import styles from "./Thankyou.module.css";

const Thankyou = () => {
    return (
        <div className={styles.grid}>
            <div className={styles.thankyou}>
                <h3>We have received your information.</h3><br />
                <h1>Thank you for your time. We will contact you soon! </h1>
            </div>
        </div>
    )
}

export default Thankyou;