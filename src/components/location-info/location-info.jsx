import { useEffect, useState } from "react"
import { getData } from "../../methods/methods"
import { Link } from "react-router-dom"

import "./location-info.css"

function LocationInfo({ information }) {
    const { name, type, residents, dimension } = information
    const [allRes, setAllRes] = useState([])

    useEffect(() => {
        const all = Array.isArray(residents) ?
            residents.map(res => {
                return getData(res)
            }) : []

        Promise.all(all).then(data => setAllRes(data))
    }, [allRes])

    return (
        <>
            <div className="location__details">
                <h1 className="details__title">{name}</h1>
                <h3 className="details__subtitle">Type: {type}</h3>
                <h3 className="details__subtitle">Dimension: {dimension}</h3>
                <h2>Residents: </h2>
                <div className="details__residents">
                    {Array.isArray(allRes) &&
                        allRes.map(res => {
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

export default LocationInfo