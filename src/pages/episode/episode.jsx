import Navigation from "../../components/navigation";
import EpisodeCards from "../../components/episode-cards";
import GoBack from "../../components/go-back";
import SwitchBtn from "../../components/switch-btn";

import { useState, useEffect } from "react";
import { getData } from "../../methods/methods";

import "./episode.css"

function Episode() {
    const [episodes, setEpisodes] = useState([])
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(0)

    useEffect(() => {
        getData(`https://rickandmortyapi.com/api/episode`)
            .then(data => {
                setEpisodes(data)
                setMaxPage(data.info.pages)
            })
    }, [])

    useEffect(() => {
        getData(`https://rickandmortyapi.com/api/episode?page=${page}`)
            .then(data => {
                setEpisodes(data)
            })
    }, [page])

    const nextPage = () => {
        setPage(page + 1)
    }

    const prevPage = () => {
        setPage(page - 1)
    }
    return (
        <>
            <Navigation></Navigation>
            <GoBack url={`/`}></GoBack>
            <div className="episode__info">
                <EpisodeCards information={episodes}></EpisodeCards>
            </div>
            <div className="switchers">
                {page !== 1 ? <SwitchBtn text={`🠔 Prev page`} clickEvent={prevPage}></SwitchBtn> : null}
                <div className="pages-counter">
                    <span className="pages-counter__current">{page} of {maxPage}</span>
                </div>
                {page < maxPage ? <SwitchBtn text={`Next page 🠖`} clickEvent={nextPage}></SwitchBtn> : null}
            </div>
        </>
    )
}

export default Episode