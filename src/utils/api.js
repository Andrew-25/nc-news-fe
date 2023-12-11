import axios from "axios"

const instance = axios.create({
    baseURL: 'https://andrew-bell-nc-news.onrender.com/api/',
    timeout: 1000
})

export function getArticles() {
    return instance.get(`articles`)
        .then((res) => {
            return res.data
        })
}