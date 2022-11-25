import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import  styles from '../styles/Navbar.module.scss'
import Image from 'next/image'
import icon from '../public/assets/icon.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const navbar = ['home', 'about', 'work','skills', 'contact']

  return (
    <nav className={styles.app__navbar}>
        <Link href={'#'}>
        <div className={styles.app__navbar_logo}>  
            <Image src={icon} height={30} alt ='logo' />
            <span className='bold-text'>Joshua B.</span>
        </div>
        </Link>
        <ul className={styles.app__navbar_links}>
            {navbar.map((item) => (
                <li className={`${styles.app__flex} p-text`} key={item}>
                    <Link href={`#${item}`}>{item}</Link>
                </li>))}
        </ul>

        <div className={styles.app__navbar_menu}>
            <HiMenuAlt4 onClick={() => setToggle(true)} />

            {toggle && (
            <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
            >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                    </a>
                    </li>
                ))}
                </ul>
            </motion.div>
            )}
      </div>
    </nav>
  );
};

export default Navbar;