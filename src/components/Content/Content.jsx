import React from 'react';
import styles from "./Content.module.scss"
import Button from "../Button/Button.jsx";

import lineChart from "./img/lineChart.png"

const Content = () => {
    return (
        <div className={styles.content}>
            <div className={styles.wrapperContent}>
                <div className={styles.leftContent}>
                    <h2 className={styles.contentTitle}>
                        OpenType
                        features and
                        Variable fonts
                    </h2>
                    <Button type={"button"} className={styles.btnBlue}>Try For Free</Button>
                </div>
                <div className={styles.mediaContent}>
                    <img src={lineChart} alt="lineChart"/>
                </div>
            </div>
        </div>
    );
};

export default Content;