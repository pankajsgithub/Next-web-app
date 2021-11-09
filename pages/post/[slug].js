import ImageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import styles from '../../styles/Post.module.css'
import { useState, useEffect } from 'react'
import Navbar from '../../components/navbar'
import { Image } from 'next/image';


const Post = ({ title, body, image }) => {
    // console.log('Data : ', title, body, image)
    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        const imgUrl = ImageUrlBuilder({
            projectId: 'ru2aqp7e',
            dataset: 'production'
        })
        { console.log('Image ::: ', imgUrl.image(image)) }

        setImageUrl(imgUrl.image(image))
    }, [image])

    return (
        <div>
            <Navbar />
            <div className={styles.main}>
                <h1>{title}</h1>
                {imageUrl && <img className={styles.mainImage} alt='imagetext' src={imageUrl} />}
                <div>
                    <BlockContent blocks={body} />
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const blogPageSlug = pageContext.query.slug
    // console.log('blogPage Slug :: ', blogPageSlug)
    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${blogPageSlug}" ]`)
    const url = `https://ru2aqp7e.api.sanity.io/v1/data/query/production?query=${query}`

    const result = await fetch(url).then(res => res.json())
    const post = result.result[0]

    if (!post) {
        return {
            notFound: true
        }
    }
    else {
        return {
            props: {
                body: post.body,
                title: post.title,
                image: post.mainImage
            }
        }
    }

}



export default Post
