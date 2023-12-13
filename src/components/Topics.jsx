import { useEffect, useState } from "react"
import { getTopics } from "../utils/api"
import { capsInitial } from "../utils/utils"
import { Link } from "react-router-dom"

export default function Topics() {
    const [allTopics, setAllTopics] = useState([])

    useEffect(() => {
        getTopics().then((res) => {
            setAllTopics(res.topics)
        })
    }, [])

    return (
        <div className="topics">
                <Link to='/articles' className="topic-card">
                    <h3 >All</h3>
                </Link>
                {allTopics.map((topic) => {
                    return (
                        <Link to={`/articles?topic=${topic.slug}`} key={topic.slug} className="topic-card">
                            <h3 >{capsInitial(topic.slug)}</h3>
                        </Link>
                    )
                })}
        </div>
    )
}