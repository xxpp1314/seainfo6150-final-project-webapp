import React, {useEffect, useState} from 'react'
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import styles from "./PetItemDetail.module.css";
import Form from '../Form/Form';
import PetDetailCoverImage from '../PetDetailCoverImage/PetDetailCoverImage.jsx';
import PetDetailDescription from '../PetDetailDescription/PetDetailDescription.jsx'

const PetItemDetail = (props) => {
    const [fetchedData, setFetchedData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetch("http://demo2087294.mockable.io/");
          const resultJson = await result.json();
          setFetchedData(resultJson);
        };
    
        if (isEmpty(fetchedData)) {
          fetchData();
        }
    }, [fetchedData]);  

    let displayContent;
    if(!isEmpty(fetchedData)) {
        var pet = fetchedData[props.category][props.categoryid];
        displayContent = (
        <div className={styles.mainpage}>
            <h1 className={styles.text}>{pet.title}</h1>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.flexitems}>
                        <PetDetailCoverImage url={pet.img.url}/>
                    </div>
                    <div className={styles.flexitems}>
                        <PetDetailDescription detail={pet}/>
                    </div>
                </div>
            </div>
            <div className={styles.gap}></div>
            <div className={styles.form}>
                <h2 className={styles.text}>Do you want to take this pet to your home? 
                Please leave your information here.</h2>
                <Form className={styles.formdetails}/>
            </div>
        </div>
        )
    }
    else {
        displayContent = <div><center>Data is fetching</center></div>;
    }

    return (
        displayContent
    )
}

PetItemDetail.propTypes = {
    category:PropTypes.string.isRequired,
    categoryid: PropTypes.string.isRequired     
};

export default PetItemDetail;