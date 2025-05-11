import { BrowserRouter , Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/foorter/Footer";

import Home from "./pages/Home/Home";
import About from './pages/about/About'
import FAQs from './pages/faqs/FAQs'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <div className="overflow-x-hidden">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          < Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
