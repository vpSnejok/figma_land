import React from 'react'

import avatar1 from "./img/avatar1.png"
import avatar2 from "./img/avatar2.png"
import avatar3 from "./img/avatar3.png"
import avatar4 from "./img/avatar4.png"
import styles from "./Testimonials.module.scss"

const Testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <h2 className={styles.testimonialsTitle}>Testimonials</h2>
            <ul className={styles.testimonialsList}>
                <li className={styles.listItem}>
                    <div className={styles.itemHeader}>
                        <img className={styles.itemAvatar} src={avatar1} alt="ellipse"/>
                        <div className={styles.userInfo}>
                            <p className={styles.fullName}>Wade Steward</p>
                            <p className={styles.fullName}>Designer</p>
                        </div>
                    </div>
                    <div className={styles.itemInfo}>
                        Slate helps you see how many
                        more days you need to work to
                        reach your financial goal for the
                        month and year. Slate helps
                        you see how many more days
                        you need to work to reach your
                        financial goal for the month and
                        year.your financial
                        goal for the month and year.
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.itemHeader}>
                        <img className={styles.itemAvatar} src={avatar2} alt="ellipse"/>
                        <div className={styles.userInfo}>
                            <p className={styles.fullName}>Philip Watson</p>
                            <p className={styles.fullName}>Designer</p>
                        </div>
                    </div>
                    <div className={styles.itemInfo}>
                        Slate helps you see how many
                        more days you need to work to
                        reach your financial goal for the
                        month and year. Slate helps
                        you see how many more days
                        you need to work to reach your
                        financial goal for the month and
                        year.your financial
                        goal for the month and year.
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.itemHeader}>
                        <img className={styles.itemAvatar} src={avatar3} alt="ellipse"/>
                        <div className={styles.userInfo}>
                            <p className={styles.fullName}>Arthur Wilson</p>
                            <p className={styles.fullName}>Designer</p>
                        </div>
                    </div>
                    <div className={styles.itemInfo}>
                        Slate helps you see how many
                        more days you need to work to
                        reach your financial goal for the
                        month and year. Slate helps
                        you see how many more days
                        you need to work to reach your
                        financial goal for the month and
                        year.your financial
                        goal for the month and year.
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.itemHeader}>
                        <img className={styles.itemAvatar} src={avatar4} alt="ellipse"/>
                        <div className={styles.userInfo}>
                            <p className={styles.fullName}>Regina Black</p>
                            <p className={styles.fullName}>Designer</p>
                        </div>
                    </div>
                    <div className={styles.itemInfo}>
                        Slate helps you see how many
                        more days you need to work to
                        reach your financial goal for the
                        month and year. Slate helps
                        you see how many more days
                        you need to work to reach your
                        financial goal for the month and
                        year.your financial
                        goal for the month and year.
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Testimonials;