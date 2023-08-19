import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getData } from "../../methods/methods"
import Navigation from "../../components/navigation"
import GoBack from "../../components/go-back"
import CharacterInfo from "../../components/character-info"

function CharacterDetails({ url }) {
    const [characterDetails, setCharacterDetails] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getData(`${url}${id}`)
            .then(data => {
                setCharacterDetails(data)
            })
    }, [])

    return (
        <>
            <Navigation></Navigation>
            <GoBack url={`/character`}></GoBack>
            <CharacterInfo information={characterDetails}></CharacterInfo>
        </>
    )
}

export default CharacterDetails