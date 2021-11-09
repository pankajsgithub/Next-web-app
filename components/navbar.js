import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';


const Toolbar = () => {
    const route = useRouter()
    return (
        <div className={styles.main}>
            <nav >
                <ul>
                    <Link href='/'>
                        <a className={route.pathname == '/' ? styles.active : styles.inactive}>Home</a>
                    </Link>

                    <Link href='/nextjspage'>
                        <a className={route.pathname == '/nextjspage' ? styles.active : styles.inactive}>NextJs</a>
                    </Link>

                    <Link href='/sanityiopage'>
                        <a className={route.pathname == '/sanityiopage' ? styles.active : styles.inactive}>Sanity</a>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Toolbar