import React from 'react';
import workIcon from "./work.svg";
import schoolIcon from "./school.svg";
import skills from "../../data/skills.json";
import timelineElements from "../../constants/index.js";

import { getImageUrl } from "../../utils.js";
import styles from "./Experience.module.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

function Experience() {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };

    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                <p className={styles.skillTitle}>{skill.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <VerticalTimeline>
                    {timelineElements.map(element => {
                        let isWorkIcon = element.icon === "work";
                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                icon={<img src={isWorkIcon ? workIcon : schoolIcon} alt="icon" className={styles.timelineIcon}/>}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <p id="description">{element.description}</p>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Experience;