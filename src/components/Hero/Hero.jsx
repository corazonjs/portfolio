import React from 'react';
import {getImageUrl} from "../../utils.js";

import styles from "./Hero.module.css"
const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Daniyar</h1>
                <p className={styles.description}>I'm a Frontend developer </p>
                <a href="mailto:corazondeveloper@gmail.com" className={styles.contactBtn}>Contact me</a>
            </div>
            <div>
                <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Daniyar"  />
            </div>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />

        </section>
    );
};

export default Hero;