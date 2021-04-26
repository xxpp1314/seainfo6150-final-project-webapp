import React from 'react';
import PropTypes from "prop-types";
import styles from "./PetDetailDescription.module.css";

const PetDetailDescription= props => {
    return (
        <div className={styles.description}>
            <p className={styles.title}>Price: {props.detail.price}</p><br />
            <p>Category: {props.detail.category}</p><br />
            <p>Age: {props.detail.age}</p><br />
            <p>Gender: {props.detail.gender}</p><br />
            <p>Size: {props.detail.size}</p><br />
            <p>Breed: {props.detail.breed}</p><br />
            <p>Description: {props.detail.description}</p><br />
        </div>
    )
}

PetDetailDescription.propTypes = {
    detail: PropTypes.object.isRequired
};

export default PetDetailDescription;