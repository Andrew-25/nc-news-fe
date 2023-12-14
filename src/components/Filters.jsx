import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export default function Filters() {
    const [url, setUrl] = useSearchParams()
    const [sortParam, setSortParam] = useState(null)
    const [orderParam, setOrderParam] = useState(null)
    const [ascending, setAscending] = useState('asc')
    const [descending, setDescending] = useState('desc')

    useEffect(() => {
        setSortParam(url.get('sort'))
        setOrderParam(url.get('order'))
    }, [])

    const updateSort = (event) => setSortParam(event.target.value)
    const updateOrder = (event) => setOrderParam(event.target.value)

    useEffect(() => {
        if (sortParam === 'created_at') setAscDesc('oldest', 'newest')
        else if (sortParam === 'comment_count') setAscDesc('least', 'most')
        else if (sortParam === 'votes') setAscDesc('worst', 'best')
        else setAscDesc('asc', 'desc')
    }, [sortParam])

    const setAscDesc = (asc, desc) => {
        setAscending(asc)
        setDescending(desc)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const params = {}
        if (url.get('topic')) params.topic = url.get('topic')
        if (sortParam) params.sort = sortParam
        if (orderParam) params.order = orderParam

        setUrl(params)
    }

    return (
        <form onSubmit={handleSubmit} className="filters">
            <div className="sort">
                <label htmlFor="sort">Sort</label>
                <select name="sort" id="sort" onChange={updateSort}>
                    <option value="">--Select--</option>
                    <option value="created_at">Date</option>
                    <option value="comment_count">Comments</option>
                    <option value="votes">Votes</option>
                </select>
            </div>
            <div className="order">
                <label htmlFor="order">Order</label>
                    <input type="radio" id="desc" name="order" value="desc" onChange={updateOrder}/>
                    <label htmlFor="asc">{descending}</label>
                    <input type="radio" id="asc" name="order" value="asc" onChange={updateOrder}/>
                    <label htmlFor="asc">{ascending}</label>
            </div>
            <input type="submit" className="filter-submit"/>
        </form>
    )
}