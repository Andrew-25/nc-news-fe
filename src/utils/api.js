import axios from "axios"

const instance = axios.create({
    baseURL: 'https://andrew-bell-nc-news.onrender.com/api/',
    timeout: 1000
})

const getRequest = async (path, params) => {
    try {
        const res = await instance.get(path, params)
        return res.data
    } catch ({response}) {
        throw response.data
    }
}

export const getArticles = (topic, sort, order) => {
    const queries = {params: {}}
    if (topic) queries.params.topic = topic
    if (sort) queries.params.sort = sort
    if (order) queries.params.order = order
    
    return getRequest(`articles`, queries)
}

export const getArticlesById = (id) => getRequest(`articles/${id}`)
export const getArticleComments = (id) => getRequest(`articles/${id}/comments`)
export const getTopics = () => getRequest(`topics`)

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

export const deleteComment = (id) => instance.delete(`comments/${id}`)
