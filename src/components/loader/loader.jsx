import { Circles } from "react-loader-spinner"
import './loader.css'

function Loader() {
    return (
        <div className="loader">
            <Circles
                height="80"
                width="80"
                color="#3A4141"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader