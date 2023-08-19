import { useState, useEffect } from "react"
import { getData } from "../../methods/methods"
import { Link } from "react-router-dom"

import "./episode-info.css"

function EpisodeInfo({ information }) {
    const { id, name, air_date, episode, characters } = information
    const [allChar, setAllChar] = useState([])

    useEffect(() => {
        const all = Array.isArray(characters) ?
            characters.map(res => {
                return getData(res)
            }) : []

        Promise.all(all).then(data => setAllChar(data))
    }, [allChar])

    return (
        <>
            <div className="episode__details">
                <h1 className="details__title">{name}</h1>
                <h3 className="details__subtitle">{air_date}</h3>
                <h3 className="details__subtitle">{episode}</h3>
                <h2>Characters: </h2>
                <div className="details__residents">
                    {Array.isArray(allChar) &&
                        allChar.map(res => {
                            const { id, name, image, species } = res
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
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default EpisodeInfo