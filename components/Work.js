import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { urlFor, client } from '../client'
import styles from '../styles/Work.module.scss'
import Link from 'next/link'

const Work = () => {
  const [works, setWorks] = useState([]);
  
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
    });
  }, []);


  return (
    <div id='work' className={`${styles.app__works} app__container app__wrapper app__primarybg`}>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>
    <motion.div
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className={styles.app__work_portfolio}
    >  
    {works.map((work, index) => (
      <div className={`${styles.app__work_item} app__flex`} key={index}>
        <div className={`${styles.app__work_img} app__flex`}>
          <img src= {urlFor(work.imgUrl)} alt={work.name}/>

          <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
          className={`${styles.app__work_hover} app__flex`}
          >
            <Link href={work.projectLink}> 

              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.90] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >

                <AiFillEye />

              </motion.div>
            </Link>
            <Link href={work.codeLink}>

              <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                  className='app__flex'
                >
                  
                <AiFillGithub /> 

              </motion.div>
            </Link>
          </motion.div>

        </div>

        <div className={`${styles.app__work_content} app__flex`}>
          <h4 className="bold-text">{work.title}</h4>
          <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
          <div className={`${styles.app__work_tag} app__flex`}>
            <p className="p-text">{work.tags}</p>
          </div>
      </div>

      </div>
    ))}
    </motion.div>
        
    </div>
  );
};

export default Work