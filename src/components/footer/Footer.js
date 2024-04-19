import React from 'react'
import styles from './Footer.module.scss'
import googleplay from '../../assets/googleplay.png'
import appstore from '../../assets/appstore.png'

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className='container'>
            <div className={styles.footerContent}>
                <div className={styles.topFooter}>
                    <div>
                        <svg width="118" height="24" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.51705 21V3.54545H13.2784V6.58807H5.20739V10.7472H12.6733V13.7898H5.20739V17.9574H13.3125V21H1.51705ZM19.8983 7.90909L22.3017 12.4858L24.7647 7.90909H28.4892L24.6966 14.4545L28.5914 21H24.8841L22.3017 16.4744L19.7619 21H16.0119L19.8983 14.4545L16.1483 7.90909H19.8983ZM36.8114 21.2557C35.4705 21.2557 34.3171 20.9716 33.3512 20.4034C32.391 19.8295 31.6524 19.0341 31.1353 18.017C30.6239 17 30.3683 15.8295 30.3683 14.5057C30.3683 13.1648 30.6268 11.9886 31.1438 10.9773C31.6666 9.96023 32.408 9.16761 33.3683 8.59943C34.3285 8.02557 35.4705 7.73864 36.7944 7.73864C37.9364 7.73864 38.9364 7.94602 39.7944 8.36079C40.6524 8.77557 41.3313 9.35795 41.8313 10.108C42.3313 10.858 42.6069 11.7386 42.658 12.75H39.2319C39.1353 12.0966 38.8796 11.571 38.4649 11.1733C38.0558 10.7699 37.5188 10.5682 36.8541 10.5682C36.2916 10.5682 35.8001 10.7216 35.3796 11.0284C34.9649 11.3295 34.641 11.7699 34.408 12.3494C34.1751 12.929 34.0586 13.6307 34.0586 14.4545C34.0586 15.2898 34.1722 16 34.3995 16.5852C34.6325 17.1705 34.9592 17.6165 35.3796 17.9233C35.8001 18.2301 36.2916 18.3835 36.8541 18.3835C37.2688 18.3835 37.641 18.2983 37.9705 18.1278C38.3058 17.9574 38.5813 17.7102 38.7972 17.3864C39.0188 17.0568 39.1637 16.6619 39.2319 16.2017H42.658C42.6012 17.2017 42.3285 18.0824 41.8399 18.8438C41.3569 19.5994 40.6893 20.1903 39.837 20.6165C38.9847 21.0426 37.9762 21.2557 36.8114 21.2557ZM49.3333 3.54545V21H45.7026V3.54545H49.3333ZM61.3566 15.4261V7.90909H64.9872V21H61.5015V18.6222H61.3651C61.0696 19.3892 60.5782 20.0057 59.8907 20.4716C59.2088 20.9375 58.3764 21.1705 57.3935 21.1705C56.5185 21.1705 55.7486 20.9716 55.0838 20.5739C54.4191 20.1761 53.8992 19.6108 53.5242 18.8778C53.1549 18.1449 52.9674 17.267 52.9617 16.2443V7.90909H56.5924V15.5966C56.598 16.3693 56.8054 16.9801 57.2145 17.429C57.6236 17.8778 58.1719 18.1023 58.8594 18.1023C59.2969 18.1023 59.706 18.0028 60.0867 17.804C60.4674 17.5994 60.7742 17.2983 61.0071 16.9006C61.2458 16.5028 61.3622 16.0114 61.3566 15.4261ZM79.5034 11.642L76.1795 11.8466C76.1227 11.5625 76.0006 11.3068 75.8131 11.0795C75.6256 10.8466 75.3784 10.6619 75.0716 10.5256C74.7705 10.3835 74.4097 10.3125 73.9892 10.3125C73.4267 10.3125 72.9523 10.4318 72.5659 10.6705C72.1795 10.9034 71.9864 11.2159 71.9864 11.608C71.9864 11.9205 72.1114 12.1847 72.3614 12.4006C72.6114 12.6165 73.0403 12.7898 73.6483 12.9205L76.0176 13.3977C77.2903 13.6591 78.2392 14.0795 78.8642 14.6591C79.4892 15.2386 79.8017 16 79.8017 16.9432C79.8017 17.8011 79.5489 18.554 79.0432 19.2017C78.5432 19.8494 77.8557 20.3551 76.9807 20.7188C76.1114 21.0767 75.1085 21.2557 73.9722 21.2557C72.2392 21.2557 70.8585 20.8949 69.8301 20.1733C68.8074 19.446 68.208 18.4574 68.0318 17.2074L71.6028 17.0199C71.7108 17.5483 71.9722 17.9517 72.3869 18.2301C72.8017 18.5028 73.333 18.6392 73.9807 18.6392C74.617 18.6392 75.1284 18.517 75.5148 18.2727C75.9068 18.0227 76.1057 17.7017 76.1114 17.3097C76.1057 16.9801 75.9665 16.7102 75.6937 16.5C75.421 16.2841 75.0006 16.1193 74.4324 16.0057L72.1653 15.554C70.8869 15.2983 69.9352 14.8551 69.3102 14.2244C68.6909 13.5937 68.3812 12.7898 68.3812 11.8125C68.3812 10.9716 68.6085 10.2472 69.0631 9.6392C69.5233 9.03125 70.1682 8.5625 70.9977 8.23295C71.833 7.90341 72.8102 7.73864 73.9295 7.73864C75.583 7.73864 76.8841 8.08807 77.833 8.78693C78.7875 9.4858 79.3443 10.4375 79.5034 11.642ZM82.8079 21V7.90909H86.4386V21H82.8079ZM84.6318 6.22159C84.092 6.22159 83.6289 6.04261 83.2426 5.68466C82.8619 5.32102 82.6716 4.88636 82.6716 4.38068C82.6716 3.88068 82.8619 3.4517 83.2426 3.09375C83.6289 2.73011 84.092 2.54829 84.6318 2.54829C85.1716 2.54829 85.6318 2.73011 86.0125 3.09375C86.3988 3.4517 86.592 3.88068 86.592 4.38068C86.592 4.88636 86.3988 5.32102 86.0125 5.68466C85.6318 6.04261 85.1716 6.22159 84.6318 6.22159ZM102.272 7.90909L97.6948 21H93.6039L89.0272 7.90909H92.8624L95.5812 17.2756H95.7176L98.4278 7.90909H102.272ZM110.394 21.2557C109.047 21.2557 107.888 20.983 106.916 20.4375C105.95 19.8864 105.206 19.108 104.683 18.1023C104.161 17.0909 103.899 15.8949 103.899 14.5142C103.899 13.1676 104.161 11.9858 104.683 10.9688C105.206 9.9517 105.942 9.15909 106.891 8.59091C107.845 8.02273 108.965 7.73864 110.249 7.73864C111.112 7.73864 111.916 7.87784 112.661 8.15625C113.411 8.42898 114.064 8.84091 114.621 9.39205C115.183 9.94318 115.621 10.6364 115.933 11.4716C116.246 12.3011 116.402 13.2727 116.402 14.3864V15.3835H105.348V13.1335H112.984C112.984 12.6108 112.871 12.1477 112.644 11.7443C112.416 11.3409 112.101 11.0256 111.698 10.7983C111.3 10.5653 110.837 10.4489 110.308 10.4489C109.757 10.4489 109.269 10.5767 108.842 10.8324C108.422 11.0824 108.092 11.4205 107.854 11.8466C107.615 12.267 107.493 12.7358 107.487 13.2528V15.392C107.487 16.0398 107.607 16.5994 107.845 17.071C108.09 17.5426 108.433 17.9062 108.876 18.1619C109.32 18.4176 109.845 18.5455 110.453 18.5455C110.857 18.5455 111.226 18.4886 111.561 18.375C111.896 18.2614 112.183 18.0909 112.422 17.8636C112.661 17.6364 112.842 17.358 112.967 17.0284L116.325 17.25C116.155 18.0568 115.805 18.7614 115.277 19.3636C114.754 19.9602 114.078 20.4261 113.249 20.7614C112.425 21.0909 111.473 21.2557 110.394 21.2557Z" fill="#FAFAFA"/>
                        </svg>
                        <h4>Subscribe</h4>
                        <div>
                            <p>Get 10% off your first order</p>
                            <div className={styles.footerInput}>
                                <input type="text" placeholder='Enter your email'/>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.91196 12H3.99996L2.02296 4.13505C2.0103 4.08934 2.00259 4.0424 1.99996 3.99505C1.97796 3.27405 2.77196 2.77405 3.45996 3.10405L22 12L3.45996 20.896C2.77996 21.223 1.99596 20.737 1.99996 20.029C2.00198 19.9658 2.0131 19.9031 2.03296 19.843L3.49996 15" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>

                            </div>    
                        </div>
                
                    </div>
                    <div>
                        <h4>Support</h4>
                        <div>
                            <p>111 Bijoy sarani, Dhaka, <br/>  DH 1515, Bangladesh.</p>
                            <p>exclusive@gmail.com</p>
                            <p>+88015-88888-9999</p>    
                        </div>
                    </div>
                    <div>
                    <h4>Account</h4>
                        <div>
                            <p>My Account</p>
                            <p>Login / Register</p>
                            <p>Cart</p>    
                            <p>Wishlist</p>    
                            <p>Shop</p>    
                        </div>
                    </div>
                    <div>
                        <h4>Quick Link</h4>
                        <div>
                            <p>Privacy Policy</p>
                            <p>Terms Of Use</p>
                            <p>FAQ</p>    
                            <p>Contact</p>    
                        </div>
                    </div>
                    <div>
                        <h4>Download App</h4>
                        <div className={styles.save3Dollar}>
                            <a>Save $3 with App New User Only</a>
                            <div className={styles.qrBlock}>
                                <div className={styles.qr}></div>
                                <div className={styles.getApp}>
                                    <div><img src={googleplay} alt="" /></div>
                                    <div><img src={appstore} alt="" /></div>
                                </div>
                            </div>
                            <div className={styles.messengers}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.99 5.298C13.686 5.46 13.46 5.686 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z" fill="white"/></svg>
                                <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.905 4.84651L10.905 4.84646C10.9194 4.06035 11.2418 3.3113 11.8028 2.76049C12.3639 2.20969 13.1188 1.90116 13.905 1.90129L10.905 4.84651ZM10.905 4.84651L10.877 6.42135M10.905 4.84651L10.877 6.42135M2.75811 3.80857L2.89001 3.91846C4.76679 5.48211 6.71781 6.41823 8.74946 6.6952C8.74947 6.6952 8.74949 6.6952 8.74951 6.6952L10.3104 6.90718L2.75811 3.80857ZM2.75811 3.80857L2.72759 3.97751M2.75811 3.80857L2.72759 3.97751M2.72759 3.97751C2.42576 5.64819 2.5683 7.07086 3.1479 8.30176C3.72718 9.53198 4.73827 10.5605 6.15577 11.4519L6.15579 11.452M2.72759 3.97751L6.15579 11.452M6.15579 11.452L7.90279 12.55L7.954 12.4685M6.15579 11.452L7.954 12.4685M7.954 12.4685L7.90279 12.55C7.97196 12.5934 8.02943 12.6532 8.07016 12.724C8.1109 12.7948 8.13366 12.8745 8.13645 12.9562C8.13925 13.0378 8.122 13.1189 8.0862 13.1924C8.05041 13.2658 7.99716 13.3294 7.93112 13.3775L7.93101 13.3775M7.954 12.4685L7.93101 13.3775M7.93101 13.3775L6.33901 14.5405L6.11542 14.7039M7.93101 13.3775L6.11542 14.7039M6.11542 14.7039L6.39178 14.7211M6.11542 14.7039L6.39178 14.7211M6.39178 14.7211C7.3449 14.7805 8.25288 14.7385 9.00946 14.5884L9.00958 14.5884M6.39178 14.7211L9.00958 14.5884M9.00958 14.5884C11.3886 14.1134 13.3745 12.9794 14.7652 11.2211M9.00958 14.5884L14.7652 11.2211M10.877 6.42135C10.8757 6.49182 10.8594 6.5612 10.8293 6.62495C10.7993 6.6887 10.7561 6.74537 10.7026 6.79125C10.649 6.83712 10.5864 6.87117 10.5188 6.89115C10.4513 6.91112 10.3803 6.91659 10.3105 6.9072L10.877 6.42135ZM14.7652 11.2211C16.1557 9.46296 16.945 7.08835 16.945 4.14229M14.7652 11.2211L16.945 4.14229M16.945 4.14229C16.945 3.99668 16.8714 3.78474 16.744 3.55722M16.945 4.14229L16.744 3.55722M16.744 3.55722C16.6142 3.32559 16.4215 3.06508 16.1673 2.82049M16.744 3.55722L16.1673 2.82049M16.1673 2.82049C15.6587 2.33088 14.8999 1.90129 13.905 1.90129L16.1673 2.82049ZM18.4978 1.53842C18.8818 1.48388 19.3285 1.34345 19.916 1.01105C19.6101 2.49526 19.4321 3.16764 18.7642 4.08336L18.745 4.10969V4.14229C18.745 7.94153 17.578 10.7567 15.8258 12.7397C14.0726 14.7238 11.7277 15.8813 9.36243 16.3532C7.74529 16.6759 5.7544 16.5728 3.99643 16.2106C3.11813 16.0296 2.30077 15.7846 1.61983 15.4974C1.03727 15.2517 0.560091 14.9775 0.229559 14.6904C0.660648 14.6482 1.4114 14.5535 2.24366 14.3598C3.24355 14.1272 4.37173 13.7494 5.20306 13.141L5.31918 13.056L5.19904 12.9768C5.15724 12.9492 5.11178 12.9196 5.06301 12.8879C4.30477 12.3938 2.74648 11.3786 1.73155 9.51655C0.667136 7.56374 0.192566 4.66295 1.91362 0.425918C3.57889 2.34347 5.2726 3.66001 6.99504 4.3668L6.99505 4.36681C7.57662 4.60536 7.94255 4.72373 8.23185 4.79141C8.45087 4.84265 8.62608 4.86463 8.81173 4.88794C8.87034 4.89529 8.92998 4.90278 8.99238 4.91135L9.28722 4.95189L9.10594 4.77077C9.13096 3.8414 9.42538 2.93895 9.95386 2.17331C10.4904 1.39606 11.2442 0.79434 12.1211 0.443497C12.9979 0.0926537 13.9588 0.00827681 14.8833 0.200931C15.8079 0.393585 16.6551 0.854708 17.3189 1.52657L17.3485 1.55658L17.3907 1.55628C17.4934 1.55556 17.5972 1.55908 17.7036 1.56269C17.9483 1.57098 18.2068 1.57974 18.4978 1.53842Z" fill="white" stroke="black" stroke-width="0.2"/>
                                    </svg>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                                    <path d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                                    <path d="M17.5 7.5C17.7652 7.5 18.0196 7.39464 18.2071 7.20711C18.3946 7.01957 18.5 6.76522 18.5 6.5C18.5 6.23478 18.3946 5.98043 18.2071 5.79289C18.0196 5.60536 17.7652 5.5 17.5 5.5C17.2348 5.5 16.9804 5.60536 16.7929 5.79289C16.6054 5.98043 16.5 6.23478 16.5 6.5C16.5 6.76522 16.6054 7.01957 16.7929 7.20711C16.9804 7.39464 17.2348 7.5 17.5 7.5Z" fill="white"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z" fill="white"/>
                                </svg>


                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_803_2023)"><g filter="url(#filter0_d_803_2023)"><path d="M10.5001 18.3333C15.1025 18.3333 18.8334 14.6023 18.8334 9.99996C18.8334 5.39759 15.1025 1.66663 10.5001 1.66663C5.89771 1.66663 2.16675 5.39759 2.16675 9.99996C2.16675 14.6023 5.89771 18.3333 10.5001 18.3333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.0001 8.14811C13.0001 8.14811 11.9707 6.66663 10.255 6.66663C8.5393 6.66663 7.16675 8.14811 7.16675 9.99996C7.16675 11.8518 8.5393 13.3333 10.255 13.3333C11.9707 13.3333 13.0001 11.8518 13.0001 11.8518" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></g><defs><filter id="filter0_d_803_2023" x="-2.58325" y="0.916626" width="26.1667" height="26.1666" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_803_2023"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_803_2023" result="shape"/></filter><clipPath id="clip0_803_2023"><rect width="20" height="20" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>
                    Copyright Rimel 2022. All right reserved
                </div>
            </div>
        </div>
    </div>
  )
}
