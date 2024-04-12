import React from 'react'
import styles from './LoginScreen.module.scss'
import googleIcon from '../../assets/Icon-Google.svg'


export default function LoginScreen() {
  return (
    <div className={styles.loginSection}>
        <div className={styles.SideImageBlock}></div>
        <div className={styles.form}>
          <h1>Login to Exclusive</h1>
          <p>Enter your details below</p>
          <input placeholder='Email or Phone Number' type="text" />
          <input placeholder='Password' type="password" />
          <div>
            <button>Log In</button>
            <a href="">Forget Password?</a>
          </div>
        </div>
    </div>
  )
}
