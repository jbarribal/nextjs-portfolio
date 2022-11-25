import React , { useState, useEffect } from 'react'
import styles from '../styles/Skills.module.scss'
import { urlFor, client } from '../client'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip';

const Skills = () => {

    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);


    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';
    
        client.fetch(query).then((data) => {
          setExperiences(data);
        });
    
        client.fetch(skillsQuery).then((data) => {
          setSkills(data);
        }); 
      }, []);


  return (
    <div id='skills' className={`${styles.app__skills} app__container app__wrapper app__flex app__whitebg`}>
        <h2 className="head-text">Skills & Experiences</h2>

        <div className={`${styles.app__skills_container}`}>
            <motion.div className={styles.app__skills_list}>
                {skills.map((skill) => (
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className={`${styles.app__skills_item} app__flex`}
                    key={skill.name}
                >
                    <div
                    className={`${styles.app__skills_itemicon} app__flex`}
                    style={{ backgroundColor: skill.bgColor }}
                    >
                    <img src={urlFor(skill.icon)}alt={skill.name} />
                    </div>
                    <p className="p-text">{skill.name}</p>
                </motion.div>
                ))}
            </motion.div>
        <div className={styles.app__skills_exp}>
            {experiences.map((experience) => (
            <motion.div
                className={styles.app__skills_exp_item}
                key={experience.year}
            >
                <div className={styles.app__skills_exp_year}>
                <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className={styles.app__skills_exp_works}>
                {experience.works.map((work) => (
                    <>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className={styles.app__skills_exp_work}
                        data-tip
                        data-for={work.name}
                        key={work.name}
                    >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        className={styles.skills_tooltip}
                    >
                        {work.desc}
                    </ReactTooltip>
                    </>
                ))}
                </motion.div>
            </motion.div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Skills