import { useEffect, useState } from "react";
import GoBack from "../../components/go-back";
import Navigation from "../../components/navigation";
import LocationInfo from "../../components/location-info";
import { useParams } from "react-router";
import { getData } from "../../methods/methods";

function LocationDetails({ url }) {
    const [locationInfo, setLocaionInfo] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getData(`${url}${id}`).then(data => {
            setLocaionInfo(data)
        })
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <GoBack url={`/location`}></GoBack>
            <LocationInfo information={locationInfo}></LocationInfo>
        </>
    )
}

export default LocationDetails