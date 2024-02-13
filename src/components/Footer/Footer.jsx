import React from 'react';
import styles from "./Footer.module.scss"
import MapIcon from "./Icons/MapIcon.jsx";
import PhoteIcon from "./Icons/PhoteIcon.jsx";
import TwitterIcon from "./Icons/TwitterIcon.jsx";
import Facebook from "./Icons/Facebook.jsx";
import LinkedinIcon from "./Icons/LinkedinIcon.jsx";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInfo}>
                <ul className={styles.footerList}>
                    <li className={styles.listItem}>
                        <h4 className={styles.listTitle}>Fingertipe</h4>
                        <ul className={styles.listLinks}>
                            <li className={styles.linkItem}>
                                <a className={styles.link} href="#">Home</a>
                            </li>
                            <li className={styles.linkItem}>
                                <a className={styles.link} href="#">Examples</a>
                            </li>
                            <li className={styles.linkItem}>
                                <a className={styles.link} href="#">Pricing</a>
                            </li>
                            <li className={styles.linkItem}>
                                <a className={styles.link} href="#">Updates</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.listItem}>
                        <h4 className={styles.listTitle}>Resources</h4>
                        <ul className={styles.listLinks}>
                            <li className={styles.linkItem}>
                                <a className={styles.link} href="#">Home</a>
                            </li>
                            <li className={styles.linkItem}>
                                <a className={styles.link} href="#">Examples</a>
                            </li>
                            <li className={styles.linkItem}>
                                <a className={styles.link} href="#">Pricing</a>
                            </li>
                            <li className={styles.linkItem}>
                                <a className={styles.link} href="#">Updates</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.listItem}>
                        <h4 className={styles.listTitle}>About</h4>
                        <ul className={styles.listLinks}>
                            <li className={styles.linkItem}>
                                <a className={styles.link} href="#">Home</a>
                            </li>
                            <li className={styles.linkItem}>
                                <a className={styles.link} href="#">Examples</a>
                            </li>
                            <li className={styles.linkItem}>
                                <a className={styles.link} href="#">Pricing</a>
                            </li>
                            <li className={styles.linkItem}>
                                <a className={styles.link} href="#">Updates</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className={styles.footerContacts}>
                    <li className={styles.contactsItem}>
                        <MapIcon/>
                        <p className={styles.itemInfo}>7480 Mockingbird Hill undefined </p>
                    </li>
                    <li className={styles.contactsItem}>
                        <PhoteIcon/>
                        <p className={styles.itemInfo}>(239) 555-0108</p>
                    </li>
                    <li className={styles.contactsItemLinks}>
                        <a href="#">
                            <TwitterIcon/>
                        </a>
                        <a href="#">
                            <Facebook/>
                        </a>
                        <a href="#">
                            <LinkedinIcon/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;