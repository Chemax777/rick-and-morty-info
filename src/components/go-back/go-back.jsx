import { Link } from "react-router-dom"

import arrow from "../../img/arrow.svg"

import "./go-back.css"


function GoBack({url}) {
    return (
        <div className="back">
            <Link to={url}>
                <div className="back__arrow">
                    <img src={arrow} alt="arrow go back" />
                </div>
                <div className="back__text">
                    GO BACK
                </div>
            </Link>
        </div>
    )
}

export default GoBack