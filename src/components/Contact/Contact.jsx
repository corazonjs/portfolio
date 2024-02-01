import React, { useState, useRef }  from 'react';
import styles from './Contact.module.css'
import emailjs from '@emailjs/browser';
import { getImageUrl } from '../../utils.js';
import Modal from './Modal/Modal.jsx'
const Contact = () => {

    const formRef = useRef();

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const[loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({...form,[name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // template template_wks48fj
        // service_yyh7fq5
        //public key: KV8xSqnKFv288xAA-
        emailjs.send(
            'service_yyh7fq5',
            'template_wks48fj',
            {
                from_name: form.name,
                to_name: 'Daniyar',
                from_email: form.email,
                to_email: 'corazondeveloper@gmail.com',
                message: form.message,
            },
            'KV8xSqnKFv288xAA-'
            )

            .then(() => {
                setLoading(false);
                alert('Thank You. I will get back to you as soon as possible.');

                setForm({
                    name: '',
                    email: '',
                    message: '',
                })
            }, (error) => {
                setLoading(false)

                console.log(error);

                alert('Something went wrong.')
            })
    }

    const [modalActive, setModalActive] = useState(false)



    return (
        <footer id="contact" className={styles.container}>

            <form ref={formRef}
                  onSubmit={handleSubmit}
                  className={styles.contactForm}
            >
                <p className={styles.subText}>Get in touch</p>
                <h3 className={styles.title}>Contact</h3>
                <label>
                    <span>Your Name</span>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="What's your name?"
                        className={styles.feedback}
                    />

                    <span>Your Email</span>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your email?"
                        className={styles.feedback}
                    />

                    <span>Your Message</span>
                    <textarea
                        rows="7"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What do you want to say?"
                        className={styles.feedback}
                    />
                </label>

                <div className={styles.buttons}>

                    <button type="submit" className={styles.button}>
                        {loading ? 'Sending...' : 'Send'}
                    </button>

                    <div className={styles.contact_links}>
                        <a href="https://github.com/corazonjsx" target="_blank">
                            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub"/>
                        </a>
                        <a href="https://linkedin.com/in/corazonjsx/" target="_blank">
                            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn"/>
                        </a>
                    </div>
                </div>
            </form>


            <div className={styles.logo}>
                <img onClick={() => setModalActive(true)}
                     className={styles.logo}
                     src={getImageUrl("contact/logo.svg")}
                     alt="logo"/>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <p className={styles.modal_desc}>"Corazon" in Spanish means "heart," and in this context, it symbolizes
                    the deep emotions I pour into
                    every line of code. <br/><br/>
                    <b>Corazonjsx</b> is not just a combination of words; it's the fusion of a passion for React and a
                    love
                    for programming as a whole. Behind every commit, behind every project is my heart, filled with
                    enthusiasm and a desire to create something unique.</p>
            </Modal>
            <div className={styles.blur}/>

        </footer>
    );
};

export default Contact;