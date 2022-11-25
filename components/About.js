import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles/About.module.scss'
import { urlFor, client } from '../client'

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div id='about' className={`${styles.app_about} app__flex app__container app__wrapper`}>
      <h2 className='head-text'>Building the <span>Future</span> with Tech <br />Making Challenges  <span>Possible</span></h2>
      <div className= {styles.app__profiles}>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className={styles.app__profile_item}
            key={about.title + index}
          >
            <img src ={urlFor(about.imgUrl)} alt={about.title}/> 
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About
