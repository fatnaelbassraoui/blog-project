import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUsStory from './Pages/AboutUsStory'
import './index.css'
import Home from './Pages/Home'
import OurContacts from './Pages/OurContacts'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUsStory />} />
                <Route path="/Our-Contacts" element={<OurContacts/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
