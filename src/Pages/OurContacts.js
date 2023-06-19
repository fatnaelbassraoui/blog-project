import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ScrollToTopButton from '../Components/ScrollToTopButton'
import MapsIcon from '../Assets/MapsIcon.png'
import Facebook from '../Assets/Facebook.jpg'
import Twitter from '../Assets/Twitter.jpg'
import Instagram from '../Assets/Instagram.jpg'
import Pinterest from '../Assets/Pinterest.jpg'
import FormContactUs from '../Components/FormContactUs'
import FollowMe from '../Assets/FollowMe.jpg'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const DefaultIcon = L.icon({
    iconUrl: MapsIcon,
    iconSize: [40, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow


})
L.Marker.prototype.options.icon = DefaultIcon;

const OurContacts = () => {
    const [currentPosition, setCurrentPosition] = useState(null)
    console.log(currentPosition)

    const currentUserPosition = () => {
        return navigator.geolocation.getCurrentPosition(
            (position) =>
                setCurrentPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }),
            (error) => console.log(error)
        )
    }

    useEffect(() => {
        currentUserPosition()
    }, [])
    return (
        <>
            <NavBar />

            <FormContactUs />

            <div className="  flex flex-col  mt-5">
                <div className="flex justify-center">
                    <img className="w-[280px]" src={FollowMe} alt="followMe" />
                </div>
                <div className="flex flex-row justify-center pb-6">
                    <img
                        className="w-[100px] p-2"
                        src={Facebook}
                        alt="facebook"
                    />
                    <img
                        className="w-[100px] p-2"
                        src={Instagram}
                        alt="instagram"
                    />
                    <img
                        className="w-[100px] p-2"
                        src={Twitter}
                        alt="twitter"
                    />
                    <img
                        className="w-[100px] p-2"
                        src={Pinterest}
                        alt="pinterest"
                    />
                </div>

            </div>
            {currentPosition && (
                <div
                    className='flex items-center justify-center'
                >
                    <MapContainer
                        style={{ height: '400px', width: '60%', borderRadius: '10px' }}
                        center={currentPosition}
                        zoom={13}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker
                            position={currentPosition}
                        >
                            <Popup>You are here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            )}
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default OurContacts
