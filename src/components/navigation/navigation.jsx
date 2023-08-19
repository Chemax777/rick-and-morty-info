import { useEffect, useState } from "react"
import { getData, getPagePath } from "../../methods/methods"
import "./navigation.css"

import logo from "../../img/logo.svg"
import { Link, NavLink } from "react-router-dom"

function Navigation() {
    const [pages, setPages] = useState([])

    useEffect(() => {
        getData('https://rickandmortyapi.com/api')
            .then(data => {
                setPages(Object.keys(data))
            })
    }, [])


    return (
        <nav className="nav-menu">
            <Link to={`/`}>
                <div className="nav-menu__logo">
                    <img src={logo} alt="Rick and Morty logo" />
                </div>
            </Link>
            <ul className="nav-menu__links">
                {
                    pages.map((page, i) => {
                        return (
                            <NavLink key={i} to={`/${page.slice(0, -1)}`}>
                                <li className="links__link" key={i}>{page}</li>
                            </NavLink>)
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation