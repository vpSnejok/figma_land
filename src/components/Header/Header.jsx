import BurgerMenuIcon from "./icons/BurgerMenuIcon.jsx";
import logo from "./icons/logo.png"

import img3 from "./img/img_3.png";
import React from "react";
import Button from "../Button/Button.jsx";

import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.navBarWrapper}>
                    <nav className={styles.navBar}>
                        <a href="#" className={styles.logoLink}>
                            <img src={logo} alt="Figma Land"/>
                        </a>
                        <ul className={styles.menuList}>
                            <li className={styles.listItem}>
                                <a href="#">Home</a>
                            </li>
                            <li className={styles.listItem}>
                                <a href="#">Product</a>
                            </li>
                            <li className={styles.listItem}>
                                <a href="#">About</a>
                            </li>
                            <li className={styles.listItem}>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                        <div className={styles.btnHeader}>
                            <Button type={"button"}>Login</Button>
                            <BurgerMenuIcon/>
                        </div>
                    </nav>
                </div>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.heroTitle}>
                        Work at the
                        speed of
                        thought.
                    </h2>
                    <p className={styles.heroInfo}>
                        Most calendars are designed for teams.
                        Slate is designed for freelancers who
                        want a simple way to plan
                        their schedule.
                    </p>
                </div>
                <div className={styles.wrapperBtn}>
                    <Button type={"button"} className={styles.btnBlue}>Try For Free</Button>
                    <Button>Learn More</Button>
                </div>
                <img className={styles.img} src={img3} alt="test"/>
            </div>
        </header>
    );
};

export default Header;