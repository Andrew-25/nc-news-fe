import axios from "axios"

export function getArticles() {
    return axios.get("https://andrew-bell-nc-news.onrender.com/api/articles")
        .then((res) => {
            return res.data
        })
}