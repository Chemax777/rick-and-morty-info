import "./character-info.css"
import { Link } from "react-router-dom"
import { getData } from "../../methods/methods"
import { useState, useEffect } from "react"

function CharacterInfo({ information }) {
    const { id, name, image, species, gender, status, origin, type, location, episode } = information
    const [allEp, setAllEp] = useState([])

    useEffect(() => {
        const all = Array.isArray(episode) ?
            episode.map(res => {
                return getData(res)
            }) : []

        Promise.all(all).then(data => setAllEp(data))
    }, [allEp])
    return (
        <div className="character__details">
            <h1 className="details__header">{name}</h1>
            <div className="details__photo">
                <img src={image} alt={name} />
            </div>
            <div className="details__species">
                <span>Species:</span>&nbsp;
                {species}
            </div>
            <div className="details__gender">
                <span>Gender:</span>&nbsp;
                {gender}
            </div>
            <div className="details__type">
                <span>Type:</span>&nbsp;
                {type === "" ? "none" : type}
            </div>
            <div className="details__origin">
                <span>Origin:</span>&nbsp;
                <Link to={`/location/${origin ? origin.url.slice(41) : null}`}>
                    {origin ? origin.name : null}
                </Link>
            </div>
            <div className="details__status">
                <span>Status:</span>&nbsp;
                <span className={status === 'Alive' ? 'green' : 'red'}>{status}</span>
            </div>
            <div className="details__location">
                <span>Location:</span>&nbsp;
                <Link to={`/location/${location ? location.url.slice(41) : null}`}>
                    {location ? location.name : null}
                </Link>
            </div>
            <h2>Episode:</h2>
            <div className="details__episode">
                {Array.isArray(allEp) ?
                    allEp.map(el => {
                        const { id, name, air_date, episode } = el
                        return (
                            <Link key={id} to={`/episode/${id}`}>
                                <div className="info__info-episodes">
                                    <div className="episodes__name">{name}</div>
                                    <div className="episodes__air-date">{air_date}</div>
                                    <div className="episodes__count">{episode}</div>
                                </div>
                            </Link>
                        )
                    }) : null}
            </div>
        </div>
    )
}

export default CharacterInfo