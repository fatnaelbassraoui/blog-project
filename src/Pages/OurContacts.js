import React from 'react'
import NavBar from '../Componentes/NavBar'
import Footer from '../Componentes/Footer'
import ScrollToTopButton from '../Componentes/ScrollToTopButton'
import Facebook from '../Assets/Facebook.jpg'
import Twittwr from '../Assets/Twitter.jpg'
import Instagram from '../Assets/Instagram.jpg'
import Pinterest from '../Assets/Pinterest.jpg'
import FormContactUs from '../Componentes/FormContactUs'
import FollowMe from '../Assets/FollowMe.jpg'

const OurContacts = () => {
    return (
        <>
            <NavBar />

            <FormContactUs />

            <div className="  flex flex-col  mt-5">
                <div className="flex justify-center">
                    <img className="w-[280px]" src={FollowMe} alt="followMe" />
                </div>
                <div className="flex flex-row justify-center pb-6">
                    <img className="w-[80px]" src={Facebook} alt="facebook" />
                    <img className="w-[80px]" src={Instagram} alt="instagram" />
                    <img className="w-[80px]" src={Twittwr} alt="twitter" />
                    <img className="w-[80px]" src={Pinterest} alt="pinterest" />
                </div>
                <div className='  container flex flex-col items-center justify-center p-4 mx-auto'>
                    <div className="flex flex-col mx-auto w-[40%] ">
                        <p className="font-semibold p-2">
                            ✓ Vuoi propormi una collaborazione?
                        </p>{' '}
                        <p>
                            {' '}
                            Se desideri propormi nuovi progetti o iniziative
                            interessanti, scrivimi compilando il form qui sopra
                            o via mail [info@langolinodiale.com], sarò felice di
                            leggerti!
                        </p>{' '}
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold ">
                            ✓ Hai bisogno di una Copywriter o Assistente
                            Virtuale ?{' '}
                        </p>{' '}
                        <p> Dai un’occhiata al mio sito web professionale</p>
                    </div>
                    <div className=" flex flex-col">
                        <p className="font-semibold ">
                            ✓ Hai bisogno di una Copywriter o Assistente
                            Virtuale ?{' '}
                        </p>{' '}
                        <p> Dai un’occhiata al mio sito web professionale</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold ">
                            ✓ Vuoi farti un’idea in breve?{' '}
                        </p>{' '}
                        <p>
                            {' '}
                            Scarica il mio MediaKit e/o dai un’occhiata ai miei
                            servizi
                        </p>
                    </div>
                    <div className=" flex flex-col">
                        <p className="font-semibold ">
                            ✓ Con chi ho collaborato?
                        </p>{' '}
                        <p>
                            {' '}
                            Consulta la sezione Collaborazioni e/o al mio
                            Portfolio professionale
                        </p>
                    </div>
                    <div className=" flex flex-col">
                        <p className="font-semibold ">✓ Hai dei dubbi? </p>{' '}
                        <p>
                            {' '}
                            Leggi la sezione FAQ dove troverai le risposte alle
                            domande più frequenti
                        </p>
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default OurContacts
