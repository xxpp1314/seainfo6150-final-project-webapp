import React from "react";
import PropTypes from "prop-types";
import PetItem from "../PetItem/PetItem.jsx";
import styles from "./PetItemsList.module.css";
import { Link } from "react-router-dom";

const PetItemsList = props => {

  return (
    <div className={styles.flexContainer}>
      <h1 className={styles.title}>{props.pagetitle}</h1>
      <ul className={styles.container}>
            {props.petItemList.map((petItem,index) => (
                <li key={index}>
                  <Link  key={index} className={styles.link} to={'/'+petItem.category+'/'+petItem.categoryid}>
                    <PetItem petItem={petItem}/>
                  </Link>
                </li>
            ))}
      </ul>
    </div>
  );
};

PetItemsList.propTypes = {
  petItemList: PropTypes.array.isRequired,
  pagetitle: PropTypes.string.isRequired
};

export default PetItemsList;