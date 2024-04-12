import React from 'react'
import styles from './Header.module.scss'
import logo from './../../assets/Logo.svg'
import search from './../../assets/search.svg'

export default function Header() {
  return (
    <div className={styles.header}>
        <div className='container'>
            <div className={styles.headerContent}>
                <div className={styles.navPanel}>
                  <div className={styles.logo}>
                    <img src={logo} alt="" />
                  </div>
                  <div className={styles.navList}>
                    <ul>
                      <li>Home</li>
                      <li>Contact</li>
                      <li>About</li>
                      <li>Sign Up</li>
                    </ul>
                  </div>
                  <div className={styles.searchBlock}>
                    <div>
                      <input placeholder='What are you looking for?' type="text" />
                      <img src={search} alt="" />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
