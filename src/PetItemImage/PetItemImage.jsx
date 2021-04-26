import React from "react";
import PropTypes from "prop-types";
import styles from "./PetItemImage.module.css";

const PetItemImage = (props) => {
  return (
    <div >
      <img className={styles.image} 
          src={props.url} alt="">
      </img>
    </div>
    
  );
};

PetItemImage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PetItemImage;