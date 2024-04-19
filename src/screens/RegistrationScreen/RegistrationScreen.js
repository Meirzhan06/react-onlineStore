import React, { useState } from 'react'
import axios from 'axios'


import styles from './Registration.module.scss'
import googleIcon from '../../assets/Icon-Google.svg'


export default function RegistrationScreen() {

  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')



  function onClick() {

    const userData = {
      name: nameValue,
      email: emailValue,
      password: passwordValue
    }



    axios.post('http://127.0.0.1:3001/registration', userData)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }


  return (
    <div className={styles.registrationSection}>
        <div className={styles.SideImageBlock}></div>
        <div className={styles.form}>
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <input value={nameValue} onChange={(e) => setNameValue(e.target.value)} placeholder='Name' type="text" />
          <input value={emailValue} onChange={(e) => setEmailValue(e.target.value)} placeholder='Email or Phone Number' type="text" />
          <input value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} placeholder='Password' type="password" />
          <button onClick={onClick}>Create Account</button>
          <button><img src={googleIcon} alt="" />Sign up with Google</button>
          <div>Already have account? <li><a href="">Log in</a></li></div>
        </div>
    </div>
  )
}
