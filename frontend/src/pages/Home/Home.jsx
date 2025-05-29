
import RootLayout from '../../layout/RootLayout';


import { RiRefund2Line } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { PiGpsFixBold } from "react-icons/pi";

import { motion } from "framer-motion";

import Hero from './Hero';
// import Services from '../services/Services';
import MostSearch from '../services/mostSearch/MostSearch';
import ServiceCont from '../services/ServiceCont';

function Home() {

    // Hero section logic

    const variants = {
        hidden: { opacity: 0, y: -800},
        visible: { opacity: 1, y: 0},
    }

    return (
        <div className="space-y-16 w-full min-h-screen pb-16" >
            {/* Hero */}
            <Hero />

            {/* Services */}
            <RootLayout className="space-y-12">
                <div className="w-full flex items-center justify-center text-center mt-20 mb-8">
                    <h1 className="text-3xl text-neutral-800 font-bold"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={variants}
                        transition={{ duration: 0.65, ease: "easeInOut" }}>
                        Our <span className="text-primary">Services</span>
                    </h1>
                </div>

                {/* Service container */}

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={variants}
                        transition={{ duration: 0.85, delay:0.4, ease: "easeInOut" }}>
                    <ServiceCont icon={RiRefund2Line} title={"Secure Payment"} desc={"Refunds available if canceled 24+ hrs before departure, based on terms."} />
                    <ServiceCont icon={PiGpsFixBold} title={"Track Bus"} desc={"Track your bus live and stay updated on its location."} />
                    <ServiceCont icon={RiCustomerService2Fill} title={"24/7 Support"} desc={"Get help anytime through our always-available support team."} />
                </div>
            </RootLayout>

            {/* Most searched */}
            <MostSearch />

        </div>
    );
}

export default Home