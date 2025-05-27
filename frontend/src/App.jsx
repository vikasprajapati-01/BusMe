

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
import Bill from "./pages/ticket/bill/Bill";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  
  return (
    <>
        <div className="overflow-x-hidden">
          <Navbar />

          {/* Main content with top padding to avoid navbar overlap */}
          <main className="pt-16 md:pt-20">
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Login */}
              <Route path="/login" element={<Login />} />

              {/* Register */}
              <Route path="/register" element={<Register />} />

              <Route path="/about" element={<About />} />
              <Route path="/ticket" element={<Ticket />} />

              {/* Ticket Detail */}
              <Route path="/ticket/detail" element={<Detail />} />
              {/* Ticket Checkout */}
              <Route path="/ticket/checkout" element={<CheckOut />} />
              {/* Bill */}
              <Route path="/ticket/payment" element={<Bill />} />

              <Route path="/faqs" element={<FAQs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer/>
        </div>
    </>
  )
}

export default App