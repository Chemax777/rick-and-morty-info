import { Link } from "react-router-dom"
import "./episode-cards.css"

function EpisodeCards({ information }) {
    return (
        Array.isArray(information.results) ?
            information.results.map(el => {
                const { id, name, air_date, episode } = el
                return (
                    <Link key={id} to={`/episode/${id}`}>
                        <div  className="info__info-episodes">
                            <div className="episodes__name">{name}</div>
                            <div className="episodes__air-date">{air_date}</div>
                            <div className="episodes__count">{episode}</div>
                        </div>
                    </Link>
                )
            }) : null
    )
}

export default EpisodeCards