import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getData } from "../../methods/methods"
import Navigation from "../../components/navigation"
import GoBack from "../../components/go-back"
import CharacterInfo from "../../components/character-info"
import Loader from "../../components/loader"

function CharacterDetails({ url }) {
    const [characterDetails, setCharacterDetails] = useState({})
    const { id } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData(`${url}${id}`)
            .then(data => {
                setCharacterDetails(data)
            })
        setLoading(false)
    }, [])

    return (
        loading ? <Loader/> :
        <>
            <Navigation></Navigation>
            <GoBack url={`/character`}></GoBack>
            <CharacterInfo information={characterDetails}></CharacterInfo>
        </>
    )
}

export default CharacterDetails