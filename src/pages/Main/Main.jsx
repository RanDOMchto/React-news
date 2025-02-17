import { useEffect, useState} from 'react'
import { NewsBanner } from '../../components/NewsBanner/NewsBanner'
import styles from './styles.module.css'
import { getNews } from '../../api/apiNews'
import { NewsList } from '../../components/NewsList/NewsList'

export const Main = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        

        const fetchNews = async() => {
            try {
                const response = await getNews()
                setNews(response.news)
            } catch (error) {
                console.error(error)
            }
        }
        fetchNews()
    }, [])

    return(
        <main className={styles.main}>
            {news.length > 0 ? <NewsBanner item={news[0]}></NewsBanner> : null}


            <NewsList news={news}></NewsList>
        </main>
    )
}