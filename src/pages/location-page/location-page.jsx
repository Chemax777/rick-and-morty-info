import Navigation from "../../components/navigation";
import LocationCards from "../../components/location-card";
import GoBack from "../../components/go-back";
import SwitchBtn from "../../components/switch-btn";
import Loader from "../../components/loader";

import { useState, useEffect } from "react";
import { getData } from "../../methods/methods";

import "./location-page.css"

function LocationPage() {
    const [locations, setLocations] = useState([])
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData(`https://rickandmortyapi.com/api/location`)
            .then(data => {
                setLocations(data)
                setMaxPage(data.info.pages)
            })
        setLoading(false)
    }, [])

    useEffect(() => {
        getData(`https://rickandmortyapi.com/api/location?page=${page}`)
            .then(data => {
                setLocations(data)
            })
        setLoading(false)
    }, [page])

    const nextPage = () => {
        setLoading(true)
        setPage(page + 1)
    }

    const prevPage = () => {
        setLoading(true)
        setPage(page - 1)
    }

    return (
        loading ? <Loader /> :
            <>
                <Navigation></Navigation>
                <div className="container">
                    <GoBack url={`/`}></GoBack>
                    <div className="location__info">
                        <LocationCards information={locations}></LocationCards>
                    </div>
                    <div className="switchers">
                        {page !== 1 ? <SwitchBtn text={`🠔 Prev page`} clickEvent={prevPage}></SwitchBtn> : null}
                        <div className="pages-counter">
                            <span className="pages-counter__current">{page} of {maxPage}</span>
                        </div>
                        {page < maxPage ? <SwitchBtn text={`Next page 🠖`} clickEvent={nextPage}></SwitchBtn> : null}
                    </div>
                </div>
            </>
    )
}

export default LocationPage