import Navigation from "../../components/navigation";
import GoBack from "../../components/go-back";
import InfoCards from "../../components/infoCards";
import SwitchBtn from "../../components/switch-btn";

import { useEffect, useState } from "react";

import { getData } from "../../methods/methods";


import "./character.css"


function Character() {
    const [characters, setCharacters] = useState([])
    let [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(0)

    useEffect(() => {
        getData(`https://rickandmortyapi.com/api/character`)
            .then(data => {
                setCharacters(data)
                setMaxPage(data.info.pages)
            })
    }, [])

    useEffect(() => {
        getData(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(data => {
                setCharacters(data)
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
            <div className="character__info">
                <InfoCards information={characters}></InfoCards>
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

export default Character