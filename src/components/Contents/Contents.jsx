import React from 'react';
import styles from "./Contents.module.scss"

import macbookPro from "./img/macbookPro.png"
import boardsNotifications from "./img/boardsNotifications.png"

import Button from "../Button/Button.jsx";

const Contents = () => {
    return (
        <div className={styles.contents}>
            <h2 className={styles.title}>Contents</h2>
            <p className={styles.info}>
                We focus on ergonomics and
                meeting you where you work.
                It's only a keystroke away.
            </p>
            <ul className={styles.cardList}>
                <li className={styles.listItem}>
                    <div className={styles.contentsHeader}>
                        <h4 className={styles.listTitle}>Work</h4>
                        <p className={styles.listInfo}>
                            Ever wondered if you're too reliant
                            on a client for work? Slate helps
                            you identify .</p>
                    </div>
                    <Button type={"button"} className={styles.btnBlue}>Sign Up</Button>
                    <img src={macbookPro} alt="macbookPro"/>
                </li>
                <li className={styles.listItemSecond}>
                    <div className={styles.contentsHeader}>
                        <h4 className={styles.listTitle}>
                            Design with real data
                        </h4>
                        <p className={styles.listInfo}>
                            Ever wondered if you're too reliant
                            on a client for work? Slate helps
                            you identify .</p>
                    </div>
                    <Button type={"button"} className={styles.btnBlue}>Try For Free</Button>
                    <img src={boardsNotifications} alt="macbookPro"/>
                </li>
            </ul>
        </div>
    );
};

export default Contents;