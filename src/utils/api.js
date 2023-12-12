import axios from "axios"

const instance = axios.create({
    baseURL: 'https://andrew-bell-nc-news.onrender.com/api/',
    timeout: 1000
})

const getRequest = async (path) => {
    const result = await instance.get(path)
    return result.data
}

export const getArticles = () => getRequest(`articles`)
export const getArticlesById = (id) => getRequest(`articles/${id}`)
export const getArticleComments = (id) => getRequest(`articles/${id}/comments`)