import React from 'react'
import styles from "./Home.module.css";
import PetCategories from "../PetCategories/PetCategories.jsx"
import RecommendPets from "../RecommendPets/RecommendPets.jsx";

const Home = () => {
    return (
        <div className={styles.homepage}>
            <PetCategories/>
            <RecommendPets/>    
        </div>
    )
}

export default Home
