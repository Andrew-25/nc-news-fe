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
export const getTopics = () => getRequest(`topics`)
export const getArticlesByTopic = (topic) => getRequest(`articles?topic=${topic}`)

export const patchArticle = async (id, votes) => {
    const result = await instance.patch(`articles/${id}`, {inc_votes: votes})
    return result.data
}

export const postComment = async (id, user, comment) => {
    const commentInfo = {
        username: user,
        body: comment,
    }
    const result = await instance.post(`articles/${id}/comments`, commentInfo)
    return result.data
}