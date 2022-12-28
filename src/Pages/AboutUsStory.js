import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ScrollToTopButton from '../Components/ScrollToTopButton'
import aboutUs1 from '../Assets/aboutUs1.jpg'
import aboutUs2 from '../Assets/aboutUs2.jpg'

const AboutUsStory = () => {
    return (
        <>
            <NavBar />
            <div className="container flex justify-center pl-6">
                <div className="content py-2 px-10 w-[75%] ">
                    <img
                        src={aboutUs1}
                        className=" w-[600px] h-[600px] float-left pr-4 "
                        alt="ourTeam"
                    ></img>

                    <div className="item-body w-[100%] text-justify">

                        <div className="indent-1 ">
                            <h4 className="font-semibold">Our history</h4>
                            <p>
                                Together with my fiancee Ries I have been living in Amsterdam for quite a few years. However, you won’t find me very often in Amsterdam. Since there is nothing I rather do than travel and discover new places. Or perhaps one thing: planning a new trip. Yes, travelling makes my heart beat faster. But, as a born control freak ánd very curious in nature, I always want to know everything about where I’m going. Therefore, if I am not abroad, there is a good chance that you will find me reading a travel guide.
                            </p>

                            <p>
                                Furthermore, when I am travelling I’m always a bit homesick to my family and friends! You can wake me up for a piece of Manchego cheese, pink candy or a glass of cold rose from the Provence. What I am less fond of is waiting for public transport (I am not so patient), pushy sellers or meat
                            </p>
                            <p>
                                Every trip we make is different. Every country, every city and every mountain we climb is special in its own way. Through this blog, we share our personal experiences. We describe everything we experience and discover in our diary blogs, the positive and less positive things. In our itinerary blogs, you will find useful tips and itineraries. In the budget post, we keep track of exactly how much money we spent on a trip. All from our own perspective and experiences.{' '}
                            </p>
                        </div>

                        <div className="text-justify mt-6">
                            <h4 className="font-bold">
                                What you won’t find on this blog:
                            </h4>
                            <ul>
                                <li>
                                    The perfect picture: life is not perfect, we certainly are not and our Instagram and blog posts are not like that either.
                                </li>
                                <li>
                                    Always the most expensive resorts or only budget accommodations: we travel with backpacks and with a strict budget, but also love an occasional splurge. We, therefore, try to have a good mix of budget and more expensive accommodations.
                                </li>
                                <li>
                                    The hippest clubs or underground festivals: well grandma here is asleep before 10 p.m. so the only parties I have are with DJ pillow and MC blanket. However, we love to go for some drinks or a fancy dinner and I’m happily tell you about those spots!
                                </li>
                                <li>
                                    You can wake me up for good coffee and a beautiful sunrise. Since I take all the photos on this blog, I love the light in the golden hour during sunrise and sunset. Do you have a question about photography? Please send me a message. I am a bit of a gadget freak and love to immerse myself in everything about lenses, cameras and drones! In addition, I always have a new destination in my head which I HAVE to go to. Sometimes I have to slow down a bit because I prefer to be in a different place every day and according to Charlotte, I never get tired.
                                </li>
                            </ul>


                        </div>
                        <div className="text-justify mt-5">
                            <img
                                className=" w-[300px]  float-right pl-4 pt-6"
                                src={aboutUs2}
                                alt="aboutUs2"
                            />
                            <h4 className="font-bold mt-5">Our history</h4>
                            <p>
                                You can wake me up for good coffee and a beautiful sunrise. Since I take all the photos on this blog, I love the light in the golden hour during sunrise and sunset. Do you have a question about photography? Please send me a message. I am a bit of a gadget freak and love to immerse myself in everything about lenses, cameras and drones! In addition, I always have a new destination in my head which I HAVE to go to. Sometimes I have to slow down a bit because I prefer to be in a different place every day and according to Charlotte, I never get tired.
                            </p>
                            <p>
                                Important Disclaimer: We only ever share our most honest opinions with you and this also applies to the various partnerships we have with brands and corporations. Which means that for us, sponsorship does not always equate to positive reviews, but rather open and honest ones.
                                And before you ask, we are not backpackers, neither are we flash packers or glampers. We wouldn’t want to restrict ourselves to only one style of travelling. We are who we are – free spirited individual travellers. And you are you. Therefore, what may be best for us, may not be the case for you. That’s good though! We want you to get the most out of your journey so we definitely don’t want to impose our travel style onto anyone. Through our Travel Blog, we hope to show you how it’s possible to integrate periods of travel into your life.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default AboutUsStory
