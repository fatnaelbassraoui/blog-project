import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUsStory from './Pages/AboutUsStory'
import './index.css'
import Home from './Pages/Home'
import OurContacts from './Pages/OurContacts'
import PageNotFound from './Pages/PageNotFound'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About-us" element={<AboutUsStory />} />
                <Route path="/our-contacts" element={<OurContacts />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
