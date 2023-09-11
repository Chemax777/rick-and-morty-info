import { useEffect, useState } from "react"
import "./search-field.css"
import { getData } from "../../methods/methods"
import { Link } from "react-router-dom"

function SearchFileld() {
    const [searchReq, setSearchReq] = useState('')
    const [reqInfo, setReqInfo] = useState([])

    useEffect(() => {
        if (searchReq === '') return setReqInfo([])
        getData(`https://rickandmortyapi.com/api/character/?name=${searchReq}`)
            .then(data => setReqInfo(data.results))
    }, [searchReq])

    const search = (e) => {
        setSearchReq(e.target.value)
    }
    return (
        <div className="homepage__search-feild">
            <input onChange={(e) => search(e)} type="search" placeholder="Enter character name" />
            <ul className="search-results">
                {
                    Array.isArray(reqInfo) && reqInfo.length > 0 &&
                    reqInfo.map(el => {
                        return (
                            <li className="search-results__item">
                                <Link to={`character/${el.id}`}>
                                    {el.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SearchFileld