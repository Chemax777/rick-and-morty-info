import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"

import Home from "../../pages/home"
import Character from "../../pages/character"
import Episode from "../../pages/episode"
import LocationPage from "../../pages/location-page"
import CharacterDetails from "../../pages/character-details"
import LocationDetails from "../../pages/location-details"
import EpisodeDetails from "../../pages/episode-details"
import Page404 from "../../pages/page-404"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/character" element={<Character></Character>}></Route>
                <Route path="/location" element={<LocationPage></LocationPage>}></Route>
                <Route path="/episode" element={<Episode></Episode>}></Route>
                <Route path="/character/:id" element={<CharacterDetails url={"https://rickandmortyapi.com/api/character/"}></CharacterDetails>}></Route>
                <Route path="/location/:id" element={<LocationDetails url={"https://rickandmortyapi.com/api/location/"}></LocationDetails>}></Route>
                <Route path="/episode/:id" element={<EpisodeDetails url ={"https://rickandmortyapi.com/api/episode/"}></EpisodeDetails>}></Route>
                <Route path="*" element={<Page404></Page404>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App