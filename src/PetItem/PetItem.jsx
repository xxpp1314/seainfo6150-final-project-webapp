import React from 'react';
import PropTypes from "prop-types";
import styles from "./PetItem.module.css";
import PetItemImage from '../PetItemImage/PetItemImage';

const PetItem = props => {
    return (
      <div className={styles.petItem}>
        <p  className={styles.text}>{props.petItem.title}</p>
        <PetItemImage url = {props.petItem.img.url} /> 
        <p className={styles.text}>Price: {props.petItem.price}</p>
      </div>
    )
}

PetItem.propTypes = {
    petItem: PropTypes.object.isRequired
};

export default PetItem;