import Navigation from "../../components/navigation"
import SearchFileld from "../../components/search-field"
import "./home.css"
import photo from "../../img/rick-and-morty.png"

function Home() {
    return (
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