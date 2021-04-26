import React from 'react';
import dogs from "../images/dogs.jpg";
import cats from "../images/cats.jpg";
import rabbits from "../images/rabbits.jpg";
import birds from "../images/birds.jpg";
import others from "../images/others.jpg";
import styles from "./PetCategories.module.css";
import { Link } from "react-router-dom";

const PetCategories = () => {
    return(
            <div className={styles.container}>
                <div className={styles.flex}>
                    <img className={styles.image} src={dogs} alt=""/>
                    <p className={styles.text}>   
                        <Link className={styles.text} to='/dogs'>
                            Dogs 
                        </Link>
                    </p> 
                </div>

                <div className={styles.flex}>
                    <img className={styles.image} src={cats} alt=""/>
                    <p className={styles.text}>
                        <Link className={styles.text} to='/cats'>
                            Cats
                        </Link>
                    </p>
                </div>
                
                <div className={styles.flex}>
                    <img className={styles.image} src={rabbits} alt="" />
                    <p className={styles.text}> 
                        <Link className={styles.text} to='/rabbits'>
                            Rabbits
                        </Link>
                    </p>
                </div>

                <div className={styles.flex}>
                    <img className={styles.image} src={birds} alt="" />
                    <p className={styles.text}> 
                        <Link className={styles.text} to='/birds'>
                            Birds
                        </Link>
                    </p>
                </div>

                <div className={styles.flex}>
                    <img className={styles.image} src={others} alt=""/>  
                    <p className={styles.text}>
                        <Link className={styles.text} to='/others'>
                            Other Pets
                        </Link>
                    </p>
                </div>
        </div>
    )
}

export default PetCategories;