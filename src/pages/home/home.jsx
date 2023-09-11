import Navigation from "../../components/navigation"
import SearchFileld from "../../components/search-field"
import Loader from "../../components/loader"
import "./home.css"
import photo from "../../img/rick-and-morty.png"
import { useEffect, useState } from "react"

function Home() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    })

    return (
        loading ? <Loader/> :
        <div className="homepage">
            <Navigation></Navigation>
            <div className="homepage__img">
                <img src={photo} alt="Rick and Morty" />
            </div>
            <SearchFileld></SearchFileld>
        </div>

    )
}

export default Home