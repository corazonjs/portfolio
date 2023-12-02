import React from 'react';
import './Card.module.css';
import { Tilt } from "react-tilt";


import styles from './Card.module.css';

const Card = ({ title, icon }) => {
    return (
        <Tilt glareEnable={true} tiltMaxAngleX={10}
              tiltMaxAngleY={10} perspective={1000}>
                <div className={styles.card} options = {{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}>
                    <img src={icon} alt={title} className={styles.card_img} />
                    <h3 className={styles.card_title}>{title}</h3>
                </div>

        </Tilt>
    );
};

export default Card;
