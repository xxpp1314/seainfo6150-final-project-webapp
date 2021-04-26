import React from 'react';
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.flex}>
            <h1 className={styles.title}>Pet Home</h1> 
            <nav className={styles.container}>
                <Link className={styles.menuitem} to="/"> Home </Link>
                <div className={styles.dropdown}>
                    <button className={styles.dropbutton}>
                        Category<i className="fa fa-caret-down"></i>
                    </button>
                    <div className={styles.item}>
                        <Link className={styles.li} to="/dogs">Dogs</Link>
                        <Link className={styles.li} to="/cats">Cats</Link>
                        <Link className={styles.li} to="/rabbits">Rabbits</Link>
                        <Link className={styles.li} to="/birds">Birds</Link>
                        <Link className={styles.li} to="/others">Other Pets</Link> 
                    </div>
                </div>
                <Link className={styles.menuitem} to="/aboutus">About Us</Link> 
                <Link className={styles.menuitem} to="/contactus">Contact Us</Link>
                <Link className={styles.menuitem} to="/feedback">Feedback</Link>
            </nav>   
      </header>
    )
}

export default Header;