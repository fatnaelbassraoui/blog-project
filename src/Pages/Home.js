import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import Posts from '../Components/Posts'
import Footer from '../Components/Footer'
import StoryOfImperialCities from '../Components/StoryOfImperialCities'

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <StoryOfImperialCities />
            <Posts />
            <Footer />
        </>
    )
}

export default Home
