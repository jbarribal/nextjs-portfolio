import React from 'react'
import Link from 'next/link';
import styles from '../styles/Header.module.scss'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Header = () => {
  return (
<div id='home'>
      <div className={styles.app__header}>
        <div>
          <p className={styles.small_text}>
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1>
            Hi, I'm <span className={styles.span}> Josh</span>
          </h1>
          <h1>A Full Stack Web Developer</h1>
          <p className='p-text'>
            I'm focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className={styles.app__header_links}>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.app__header_logo}>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <div className={styles.app__header_logo}>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className={styles.app__header_logo}>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume' className={styles.app__header_logo}>
              <div>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header