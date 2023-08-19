import Navigation from "../../components/navigation"
import './page404.css'
function Page404(){
    return(
        <>
        <Navigation></Navigation>
        <h1 className="page404">Error 404</h1>
        <h2 className="page404">The page you were looking for does not exist :(</h2>
        <div className="page404__img">
            <img src="https://e0.pxfuel.com/wallpapers/119/143/desktop-wallpaper-morty-smith-rick-and-morty-sad-rick-sanchez.jpg" 
            alt="sad Morty img" />
        </div>
        </>
    )
}

export default Page404