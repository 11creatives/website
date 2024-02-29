import Image from 'next/image'
import styles from './page.module.css'
import ComingSoon from './coming soon/Comingsoon'

export default function Home() {
    return (
        <main className={styles.main}>
            <ComingSoon />
        </main>
    )
}
