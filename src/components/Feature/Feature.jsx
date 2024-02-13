import React from 'react';
import styles from "./Feature.module.scss"


import frame_19 from "./img/frame_19.png"

import RestaurantIcon from "./icons/RestaurantIcon.jsx";
import AlignIcon from "./icons/AlianIcon.jsx";
import InclusiveIcon from "./icons/InclusiveIcon.jsx";

const Feature = () => {

    return (
        <div className={styles.feature}>
            <div className={styles.featureContent}>
                <div className={styles.featureHeader}>
                    <h2 className={styles.title}>FEATURES</h2>
                    <p className={styles.info}>
                        Most calendars are designed for teams.
                        Slate is designed for freelancers who want
                        a simple way to plan their schedule.
                    </p>
                </div>
                <div className={styles.wrapperContent}>
                    <img src={frame_19} alt=""/>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <div className={styles.listHeader}>
                                <RestaurantIcon/>
                                <h2 className={styles.itemTitle}>A single source of truth</h2>
                            </div>
                            <p className={styles.itemInfo}>
                                When you add work to your
                                Slate calendar we automatically
                                calculate useful insights
                            </p>
                        </li>
                        <li className={styles.listItem}>
                            <AlignIcon/>
                            <h2 className={styles.itemTitle}>Intuitive interface</h2>
                            <p className={styles.itemInfo}>
                                When you add work to your
                                Slate calendar we automatically
                                calculate useful insights
                            </p>
                        </li>
                        <li className={styles.listItem}>
                            <InclusiveIcon/>
                            <h2 className={styles.itemTitle}>Or with rules</h2>
                            <p className={styles.itemInfo}>
                                When you add work to your
                                Slate calendar we automatically
                                calculate useful insights
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Feature;