import React, { useState } from 'react'
import styles from './PromotionHeader.module.scss'
import arrowBottom from './../../assets/arrowBottom.png'

export default function PromotionHeader() {

    const [displayLanguages, setDisplayLanguages] = useState(false)
    const [selectLanguage, setSelectLanguage] = useState('English')

    function onClickLang(lang) {
        setSelectLanguage(lang)
    }

    function onClickDisplayLang(){
        setDisplayLanguages(!displayLanguages)
    }
    

  return (
    <div className={styles.promotionHeader}>
        <div className='container'>
            <div className={styles.promotionHeaderContent}>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <a href="">ShopNow</a>
                <div onClick={onClickDisplayLang} className={`${styles.languages} ${displayLanguages ? styles.active : ''}`}>
                    <div className={styles.selectLang}>{selectLanguage} <img src={arrowBottom} alt="" /></div>
                    <div className={`${styles.variantsLang} ${displayLanguages ? styles.active : ''}`}>
                        <div onClick={(e) => onClickLang(e.target.innerText)}>English</div>
                        <div onClick={(e) => onClickLang(e.target.innerText)}>Русский</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
