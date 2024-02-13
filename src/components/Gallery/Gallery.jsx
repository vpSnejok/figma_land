import React from 'react';

import image1 from "./img/image1.png"
import image2 from "./img/image2.png"
import image3 from "./img/image3.png"
import image4 from "./img/image4.png"

import img from "./img/img.png"
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"

import styles from "./Gallery.module.scss"
import Button from "../Button/Button.jsx";

const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <div className={styles.galleryHeader}>
                <h2 className={styles.galleryTitle}>Gallery</h2>
                <p className={styles.galleryInfo}>
                    We focus on ergonomics and meeting
                    you where you work.
                    It's only a keystroke away.
                </p>
            </div>
            <ul className={styles.galleryList}>
                <li className={styles.listItem}>
                    <img
                        className={styles.listImg}
                        src={image1} alt="photo"/>
                </li>
                <li className={styles.listItem}>
                    <img
                        className={styles.listImg}
                        src={image2} alt="photo"/>
                </li>
                <li className={styles.listItem}>
                    <img
                        className={styles.listImg}
                        src={image3} alt="photo"/>
                </li>
                <li className={styles.listItem}>
                    <img
                        className={styles.listImg}
                        src={image4} alt="photo"/>
                </li>
            </ul>
            <ul className={styles.galleryListSecond}>
                <li className={styles.listItem}>
                    <img
                        className={styles.listImgSecond}
                        src={img} alt="photo"/>
                </li>
                <li className={styles.listItem}>
                    <img
                        className={styles.listImg}
                        src={img1} alt="photo"/>
                </li>
                <li className={styles.listItem}>
                    <img
                        className={styles.listImgSecond}
                        src={img2} alt="photo"/>
                </li>
            </ul>
            <Button type="button">See more</Button>
        </div>
    );
};

export default Gallery;