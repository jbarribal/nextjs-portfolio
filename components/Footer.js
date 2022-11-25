import React, { useState } from 'react'
import { client } from '../client'
import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import emailpic from '../public/assets/email.png'
import mobile from '../public/assets/mobile.png'

const Footer = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const { username, email, message } = formData;
  
    const handleChangeInput = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = () => {
      setLoading(true);
  
      const contact = {
        _type: 'contact',
        name: formData.username,
        email: formData.email,
        message: formData.message,
      };
  
      client.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    };
  return (
    <div id='contact' className={`${styles.app__footer} app__container app__flex app_wrapper app__whitebg`}>
        <h2 className="head-text">Take a coffee & chat with me</h2>

        <div className={styles.app__footer_cards}>
        <div className={styles.app__footer_card}>
            <Image src={emailpic} alt="email" />
            <a href="mailto:joshuabarribal19@gmail.com" className="p-text">joshuabarribal19@gmail.com</a>
        </div>
        <div className={styles.app__footer_card}>
            <Image src={mobile} alt="phone" />
            <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
        </div>
        </div>
        {!isFormSubmitted ? (
        <div className={`${styles.app__footer_form} app__flex`}>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </div>
  )
}

export default Footer