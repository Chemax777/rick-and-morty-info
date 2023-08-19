import { Link } from "react-router-dom"
import "./info-cards.css"

function InfoCards({ information }) {
    return (
        Array.isArray(information.results) ?
            information.results.map(el => {
                const { id, name, image, species } = el
                return (
                    <div key={id} className="info__info-card">
                        <Link to={`/character/${id}`}>
                            <div className="info-card__photo">
                                <img src={image} alt={name} />
                            </div>
                            <div className="info-card__name">{name}</div>
                            <div className="info-card__species">{species}</div>
                        </Link>
                    </div>
                )
            }) : null
    )
}

export default InfoCards