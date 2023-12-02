import React, { useState, useEffect } from 'react';
import Card from '../../UI/Card/Card.jsx';
import styles from './About.module.css';
import { getImageUrl } from '../../utils.js';

const TypingTextAnimation = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let typingInterval;

        if (currentIndex < text.length) {
            typingInterval = setInterval(() => {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);
        }

        return () => clearInterval(typingInterval);
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
};

const About = () => {
    const textArray = [
        'I am dedicated to continuous professional growth and expanding my skill set. Eager to take on new challenges, I am seeking opportunities to contribute my skills and enthusiasm to projects that push the boundaries of web development.'
    ];

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>About me</h2>
            <p className={styles.desc}>
                {textArray.map((text, index) => (
                    <TypingTextAnimation key={index} text={text} delay={50} />
                ))}
            </p>

            <div className={styles.cards}>
                <Card title="HTML\CSS Developer" icon={getImageUrl('about/icon.png')}></Card>
                <Card title="React Developer" icon={getImageUrl('about/icon.png')}></Card>
                <Card title="Content Maker" icon={getImageUrl('about/icon.png')}></Card>
            </div>
        </section>
    );
};

export default About;
