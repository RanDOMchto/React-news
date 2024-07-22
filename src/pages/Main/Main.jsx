import { useEffect, useState} from 'react'
import { NewsBanner } from '../../components/NewsBanner/NewsBanner'
import styles from './styles.module.css'
import { getNews } from '../../api/apiNews'
import { NewsList } from '../../components/NewsList/NewsList'
import { Skeleton } from '../../components/Skeleton/Skeleton'

export const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        

        const fetchNews = async() => {
            try {
                setIsLoading(true)
                const response = await getNews()
                setNews(response.news)
                setIsLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        fetchNews()
    }, [])

    return(
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]}></NewsBanner>
            ) : (
                <Skeleton type={'banner'} count={1}></Skeleton>
            )}


            {!isLoading ? (
                <NewsList news={news}></NewsList>
                ) : (
                <Skeleton type={'item'} count={10}></Skeleton>
                )}
        </main>
    )
}