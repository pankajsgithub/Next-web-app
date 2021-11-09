import Navbar from '../components/navbar'
import styles from '../styles/Nextjspage.module.css'

const nextjspage = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.main}>
                <h1>
                    The React Framework for Production </h1>
                <h4>
                    Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
                </h4>
            </div>
        </div>
    )
}
    
export default nextjspage
