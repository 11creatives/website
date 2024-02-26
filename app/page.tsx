import Image from 'next/image'
import styles from './page.module.css'
import Comingsoon from './coming soon/Comingsoon'

export default function Home() {
    return (
        <main className={styles.main}>
            <Comingsoon />
        </main>
    )
}
