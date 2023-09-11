import { useState, useEffect } from "react"
import { useParams } from "react-router"

import { getData } from "../../methods/methods"
import Navigation from "../../components/navigation"
import GoBack from "../../components/go-back"
import EpisodeInfo from "../../components/episode-info"
import Loader from "../../components/loader"


function EpisodeDetails({ url }) {
    const [episodeInfo, setEpisodeInfo] = useState([])
    const { id } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData(`${url}${id}`).then(data => {
            setEpisodeInfo(data)
        })
        setLoading(false)
    }, [])
    return (
        loading ? <Loader /> :
            <>
                <Navigation></Navigation>
                <GoBack url={`/episode`}></GoBack>
                <EpisodeInfo information={episodeInfo}></EpisodeInfo>
            </>
    )
}

export default EpisodeDetails