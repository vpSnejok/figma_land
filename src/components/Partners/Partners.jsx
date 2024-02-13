import React from 'react';


import styles from "./Partners.module.scss"
import LogoAppleIcon from "./icons/LogoAppleIcon.jsx";
import LogoApiaryIcon from "./icons/LogoApiaryIcon.jsx";
import LogoAndroidIcon from "./icons/LogoAndroidIcon.jsx";
import LogoBaseCampIcon from "./icons/LogoBaseCampIcon.jsx";
import LogoAirBnbIcon from "./icons/LogoAirBnbIcon.jsx";
import LogoIbm from "./icons/LogoIbm.jsx";
import Button from "../Button/Button.jsx";

const Partners = () => {
    return (
        <div className={styles.partners}>
            <div className={styles.partnersHeader}>
                <h2 className={styles.partnersTitle}>Partners</h2>
                <p className={styles.partnersInfo}>
                    We focus on ergonomics
                    and meeting you where you work.
                    It's only a keystroke away.
                </p>
            </div>
            <div className={styles.brands}>
                <ul className={styles.brandsList}>
                    <li className={styles.listItem}>
                        <LogoAppleIcon/>
                    </li>
                    <li className={styles.listItem}>
                        <LogoApiaryIcon/>
                    </li>
                    <li className={styles.listItem}>
                        <LogoAndroidIcon/>
                    </li>
                    <li className={styles.listItem}>
                        <LogoBaseCampIcon/>
                    </li>
                    <li className={styles.listItem}>
                        <LogoAirBnbIcon/>
                    </li>
                    <li className={styles.listItem}>
                        <LogoIbm/>
                    </li>
                </ul>
                <Button type={"button"}>All Partners</Button>
            </div>
        </div>
    );
};

export default Partners;