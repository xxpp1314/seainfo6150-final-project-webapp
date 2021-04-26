import React from 'react';
import PropTypes from "prop-types";
import styles from "./PetDetailCoverImage.module.css";

const PetDetailCoverImage = props => {
    return (
        <img className={styles.image} src={props.url} alt=""/>
    )
}

PetDetailCoverImage.propTypes = {
    url: PropTypes.string.isRequired,
};

export default PetDetailCoverImage;
