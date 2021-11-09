import Navbar from '../components/navbar'
import styles from '../styles/Nextjspage.module.css'

const sanityiopage = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.main}>
                <h1>
                    The Sanity Studio
                </h1>
                <h4>
                    The Sanity Studio is an open-source CMS built with React.js. It offers rapid configuration and free form customization.
                    Use our toolkits and plugins to create the workflow that optimizes for how you want to work with content.
                </h4>
            </div>
        </div>
    )
}

export default sanityiopage
