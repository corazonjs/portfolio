import React from 'react';
import styles from './Footer.module.css'
import {getImageUrl} from "../../utils.js";

const Footer = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                    <a href="mailto:corazondeveloper@gmail.com">corazondeveloper@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
                    <a href="github.com/corazonjsx">github.com/corazonjsx</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;