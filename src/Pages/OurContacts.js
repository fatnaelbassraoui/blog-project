import React, { useEffect, useState } from 'react'
import NavBar from '../Componentes/NavBar'
import Footer from '../Componentes/Footer'
import ScrollToTopButton from '../Componentes/ScrollToTopButton'
import Facebook from '../Assets/Facebook.jpg'
import Twittwr from '../Assets/Twitter.jpg'
import Instagram from '../Assets/Instagram.jpg'
import Pinterest from '../Assets/Pinterest.jpg'
import FormContactUs from '../Componentes/FormContactUs'
import FollowMe from '../Assets/FollowMe.jpg'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

const OurContacts = () => {
    const [currentPosition, setCurrentPosition] = useState(null)
    console.log(currentPosition);

    const currentUserPosition = () => {
        return navigator.geolocation.getCurrentPosition(
            position => setCurrentPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }),
            error => console.log(error)
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
                    <img className="w-[100px] p-2" src={Facebook} alt="facebook" />
                    <img className="w-[100px] p-2" src={Instagram} alt="instagram" />
                    <img className="w-[100px] p-2" src={Twittwr} alt="twitter" />
                    <img className="w-[100px] p-2" src={Pinterest} alt="pinterest" />
                </div>
                <div className='  container flex flex-col items-center justify-center p-4 mx-auto'>
                    <div className="flex flex-col mx-auto w-[40%] ">
                        <p className="font-semibold p-2 ">
                            ✓ Vuoi propormi una collaborazione?
                        </p>{' '}
                        <p>
                            {' '}
                            Se desideri propormi nuovi progetti o iniziative
                            interessanti, scrivimi compilando il form qui sopra
                            o via mail [info@langolinodellalettura.com], sarò felice di
                            leggerti!
                        </p>{' '}
                    </div>
                    <div className="flex flex-col mx-auto w-[40%]">
                        <p className="font-semibold p-2">
                            ✓ Hai bisogno di una Copywriter o Assistente
                            Virtuale ?{' '}
                        </p>{' '}
                        <p> Dai un’occhiata al mio sito web professionale</p>
                    </div>
                    <div className=" flex flex-col mx-auto w-[40%]">
                        <p className="font-semibold p-2">
                            ✓ Hai bisogno di una Copywriter o Assistente
                            Virtuale ?{' '}
                        </p>{' '}
                        <p> Dai un’occhiata al mio sito web professionale</p>
                    </div>
                    <div className="flex flex-col mx-auto w-[40%]">
                        <p className="font-semibold p-2">
                            ✓ Vuoi farti un’idea in breve?{' '}
                        </p>{' '}
                        <p>
                            {' '}
                            Scarica il mio MediaKit e/o dai un’occhiata ai miei
                            servizi
                        </p>
                    </div>
                    <div className=" flex flex-col mx-auto w-[40%]">
                        <p className="font-semibold p-2 ">
                            ✓ Con chi ho collaborato?
                        </p>{' '}
                        <p>
                            {' '}
                            Consulta la sezione Collaborazioni e/o al mio
                            Portfolio professionale
                        </p>
                    </div>
                    <div className=" flex flex-col mx-auto w-[40%]">
                        <p className="font-semibold p-2">✓ Hai dei dubbi? </p>{' '}
                        <p>
                            {' '}
                            Leggi la sezione FAQ dove troverai le risposte alle
                            domande più frequenti
                        </p>
                    </div>
                </div>
            </div>
            {currentPosition &&
                <MapContainer
                    style={{ height: '400px' }}
                    center={currentPosition} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={currentPosition}>
                        <Popup>You are here</Popup>
                    </Marker>
                </MapContainer>
            }
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default OurContacts
