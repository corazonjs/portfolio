import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { Tilt } from "react-tilt";


export const ProjectCard = ({
                                project: { title, imageSrc, description, skills, demo, source },}) => {
    return (
        <Tilt glareEnable={false} tiltMaxAngleX={10}
              tiltMaxAngleY={10} perspective={1000}>
            <div className={styles.container}>
                <img
                    src={getImageUrl(imageSrc)}
                    alt={`Image of ${title}`}
                    className={styles.image}
                />
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <li key={id} className={styles.skill}>
                                {skill}
                            </li>
                        );
                    })}
                </ul>
                <div className={styles.links}>
                    <a href={demo} className={styles.link}>
                        Demo
                    </a>
                    <a href={source} className={styles.link}>
                        Source
                    </a>
                </div>
            </div>
        </Tilt>
    );
};

export default ProjectCard;