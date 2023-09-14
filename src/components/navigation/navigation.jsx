import { useEffect, useState } from "react"
import { getData } from "../../methods/methods"
import "./navigation.css"

import logo from "../../img/logo.svg"
import { Link, NavLink } from "react-router-dom"

function Navigation() {
    const [pages, setPages] = useState([])

    const toggle = () => {
        const menu = document.querySelector('.nav-menu__links')
        const menuBtn = document.querySelector('.menu-btn')
        menu.classList.toggle('open')
        menuBtn.classList.toggle('open')
    }

    useEffect(() => {
        getData('https://rickandmortyapi.com/api')
            .then(data => {
                setPages(Object.keys(data))
            })
    }, [])


    return (
        <nav className="nav-menu">
            <div className="nav-menu-logo-btn">
                <div className="nav-menu__logo">
                    <Link to={`/`}>
                        <img src={logo} alt="Rick and Morty logo" />
                    </Link>
                </div>
                <div className="btn-container" onClick={toggle}>
                    <div className="menu-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

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