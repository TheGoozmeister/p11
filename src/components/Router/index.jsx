import Home from '../../pages/Home'
import AboutUs from '../../pages/AboutUs'
import Lodging from '../../pages/Lodging'
import Header from '../Header'
import Footer from '../Footer'
import Error from '../Error'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

function AppRouter () {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/lodging/:lodgingId" element={<Lodging />} />
                <Route path ="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}


export default AppRouter