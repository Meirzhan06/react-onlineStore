import React from 'react'
import styles from './Registration.module.scss'
import googleIcon from '../../assets/Icon-Google.svg'

export default function RegistrationScreen() {
  return (
    <div className={styles.registrationSection}>
        <div className={styles.SideImageBlock}></div>
        <div className={styles.form}>
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <input placeholder='Name' type="text" />
          <input placeholder='Email or Phone Number' type="text" />
          <input placeholder='Password' type="password" />
          <button>Create Account</button>
          <button><img src={googleIcon} alt="" />Sign up with Google</button>
          <div>Already have account? <li><a href="">Log in</a></li></div>
        </div>
    </div>
  )
}
