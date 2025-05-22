import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/foorter/Footer";

import Home from "./pages/Home/Home";
import About from './pages/about/About'
import FAQs from './pages/faqs/FAQs'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'
import Ticket from './pages/ticket/Ticket'
import Detail from "./pages/ticket/detail/Detail";
import CheckOut from "./pages/ticket/checkOut/CheckOut";

function App() {
  
  return (
    <>
        <div className="overflow-x-hidden">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ticket" element={<Ticket />} />

            {/* Ticket Detail */}
            <Route path="/ticket/detail" element={<Detail />} />
            {/* Ticked Checkout */}
            <Route path="/ticket/checkout" element={<CheckOut />} />

            <Route path="/faqs" element={<FAQs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          < Footer/>
        </div>
    </>
  )
}

export default App
