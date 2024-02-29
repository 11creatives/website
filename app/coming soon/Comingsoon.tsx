import styles from './comingsoon.module.css'
import Image from 'next/image'
import companylogo from '../../public/asset/Logo.svg'

export default function Comingsoon() {
    return (
        <div className={styles.main}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <img src="./asset/Logo.svg" alt="Logo" />
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.comingSoonContainer}>
                    <div className={styles.comingSoon}>COMING SOON</div>
                </div>
                <div className={styles.spinnerContainer}>
                    <div className={styles.orbit}>
                        <div className={styles.centerdot}></div>
                        <div className={styles.reddot}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
