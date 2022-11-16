import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUsStory from './Pages/AboutUsStory'
import './index.css'
import Home from './Pages/Home'
import OurContacts from './Pages/OurContacts'
import PageNotFound from './Pages/PageNotFound'
import ReadMorePosts from'./Pages/ReadMorePosts'
import Privacy from './Pages/Privacy'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About-us" element={<AboutUsStory />} />
                <Route path="/our-contacts" element={<OurContacts />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path='/posts/:id' element={<ReadMorePosts/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
