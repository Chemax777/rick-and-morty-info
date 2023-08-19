import { useState, useEffect } from "react"
import { useParams } from "react-router"

import { getData } from "../../methods/methods"
import Navigation from "../../components/navigation"
import GoBack from "../../components/go-back"
import EpisodeInfo from "../../components/episode-info"


function EpisodeDetails({ url }) {
    const [episodeInfo, setEpisodeInfo] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getData(`${url}${id}`).then(data => {
            setEpisodeInfo(data)
        })
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <GoBack url={`/episode`}></GoBack>
            <EpisodeInfo information={episodeInfo}></EpisodeInfo>
        </>
    )
}

export default EpisodeDetails