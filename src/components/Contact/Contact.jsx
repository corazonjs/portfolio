import React, { useState, useRef }  from 'react';
import styles from './Contact.module.css'
import emailjs from '@emailjs/browser';


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

                <button type="submit" className={styles.button}>
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </form>



        </footer>
    );
};

export default Contact;