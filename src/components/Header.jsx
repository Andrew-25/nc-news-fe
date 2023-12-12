import { useNavigate } from "react-router-dom"

export default function Header() {
    let navigate = useNavigate()
    
    const returnHome = () => navigate('/')

    return (
        <div onClick={returnHome} className="header">
            <h1 >NC News</h1>
        </div>
    )
} 