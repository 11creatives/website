import styles from './comingsoon.module.css'
import Image from 'next/image'
import companylogo from '../../public/asset/Logo.svg'

export default function Comingsoon() {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.logowrapper}>
                    <img src="./asset/Logo.svg" alt="logo" />
                </div>
                <div className={styles.coming}>
                    <h1>COMING SOON</h1>
                </div>
                <div className={styles.spinnerwrapper}>
                    <div className={styles.spinner}>
                        <div className={styles.orbit}>
                            <div className={styles.centerdot}></div>
                            <div className={styles.reddot}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
