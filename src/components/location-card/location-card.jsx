import { Link } from "react-router-dom"
import "./location-card.css"

function LocationCards({ information }) {
    return (
        Array.isArray(information.results) ?
            information.results.map(el => {
                const { id, name, type, dimension } = el
                return (
                    <Link key={id} to={`/location/${id}`}>
                        <div className="info__info-locations">
                            <div className="locations__name">{name}</div>
                            <div className="locations__type"><span>Type: </span>{type}</div>
                            <div className="locations__dimension"><span>Dimension: </span>{dimension}</div>
                        </div>
                    </Link>
                )
            }) : null
    )
}

export default LocationCards