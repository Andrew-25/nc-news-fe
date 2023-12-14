import { useEffect, useState } from "react"
import { getArticles } from "../utils/api"
import { useSearchParams } from "react-router-dom"
import ArticleCard from "./articles/ArticleCard"
import Error from "./Error"

export default function Articles() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [isError, setIsError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [urlReady, setUrlReady] = useState(false)

    const [topicQuery, setTopicQuery] = useState('')
    const [sortQuery, setSortQuery] = useState('')
    const [orderQuery, setOrderQuery] = useState('')

    const [url] = useSearchParams()

    useEffect(() => {
        setIsLoading(true)
        const urlSet = async () => {
            try {
                await Promise.all([
                    setTopicQuery(url.get('topic')),
                    setSortQuery(url.get('sort')),
                    setOrderQuery(url.get('order'))
                ])
            } finally {
                setUrlReady(true)
            }
        }
        urlSet()
    }, [url])

    useEffect(() => {
        if (urlReady) {
            getArticles(topicQuery, sortQuery, orderQuery).then((res) => {
                setArticles(res.articles)
                setIsError(false)
            }).catch(({msg}) => {
                setErrorMsg(msg)
                setIsError(true)
            })
            setIsLoading(false)
        }
    }, [topicQuery, sortQuery, orderQuery, urlReady])

    if (isLoading) return <h2>Loading ...</h2>

    if (isError) {
        return <Error msg={errorMsg}/>
    } else {
        return (
            <ul className="article-list">
                {articles.map((article) => {
                    return <ArticleCard article={article} key={article.article_id} />
                })}
            </ul>
        )
    }
} 