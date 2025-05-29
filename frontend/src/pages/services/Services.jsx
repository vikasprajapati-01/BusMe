import React from "react";
import { motion } from "framer-motion";
import { 
    FaBus, 
    FaMapMarkerAlt, 
    FaRoute, 
    FaClock, 
    FaTicketAlt, 
    FaMobileAlt, 
    FaShieldAlt, 
    FaHeadset,
    FaWifi,
    FaSnowflake,
    FaChargingStation,
    FaStar
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdLiveHelp, MdSchedule, MdSecurity } from "react-icons/md";

import TopLayout from "../../layout/topLayout/TopLayout";
import RootLayout from "../../layout/RootLayout";
import TopImage from "../../assets/HomeBus.jpg"

function Services() {
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const mainServices = [
        {
            icon: <FaTicketAlt className="w-12 h-12" />,
            title: "Online Bus Booking",
            description: "Book your bus tickets online with ease. Choose from hundreds of routes, select your preferred seats, and get instant confirmation.",
            features: ["Instant Booking", "Seat Selection", "Multiple Payment Options", "E-Tickets"]
        },
        {
            icon: <FaMapMarkerAlt className="w-12 h-12" />,
            title: "Live Bus Tracking",
            description: "Track your bus in real-time with our advanced GPS technology. Know exactly where your bus is and when it will arrive.",
            features: ["Real-time GPS", "ETA Updates", "Route Visualization", "SMS Alerts"]
        },
        {
            icon: <FaRoute className="w-12 h-12" />,
            title: "Route Information",
            description: "Get comprehensive information about bus routes, stops, timings, and fare details for better trip planning.",
            features: ["Route Maps", "Stop Details", "Schedule Info", "Fare Calculator"]
        }
    ];

    const additionalServices = [
        {
            icon: <FaMobileAlt className="w-8 h-8" />,
            title: "Mobile App",
            description: "Download our mobile app for booking on the go"
        },
        {
            icon: <FaHeadset className="w-8 h-8" />,
            title: "24/7 Support",
            description: "Round-the-clock customer support for all your queries"
        },
        {
            icon: <FaShieldAlt className="w-8 h-8" />,
            title: "Secure Payments",
            description: "Safe and secure payment gateway with multiple options"
        },
        {
            icon: <MdSchedule className="w-8 h-8" />,
            title: "Flexible Booking",
            description: "Easy cancellation and rescheduling options"
        },
        {
            icon: <MdLiveHelp className="w-8 h-8" />,
            title: "Travel Insurance",
            description: "Optional travel insurance for a worry-free journey"
        },
        {
            icon: <MdSecurity className="w-8 h-8" />,
            title: "Safety First",
            description: "All buses undergo regular safety checks and maintenance"
        }
    ];

    const busFeatures = [
        {
            icon: <FaWifi className="w-6 h-6" />,
            title: "Free WiFi",
            description: "Stay connected during your journey"
        },
        {
            icon: <FaSnowflake className="w-6 h-6" />,
            title: "AC Coaches",
            description: "Comfortable air-conditioned buses"
        },
        {
            icon: <FaChargingStation className="w-6 h-6" />,
            title: "Charging Points",
            description: "USB charging ports for your devices"
        },
        {
            icon: <FaStar className="w-6 h-6" />,
            title: "Premium Comfort",
            description: "Reclining seats with extra legroom"
        }
    ];

    return (
        <div className="w-full">
            <TopLayout img={TopImage} title="Our Services" />
            
            <RootLayout className="space-y-16 py-16">
                
                {/* Hero Section */}
                <motion.div
                    className="text-center space-y-6 py-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
                        Your Journey, Our Commitment
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                        Experience seamless bus travel with our comprehensive services designed to make your journey comfortable, safe, and convenient.
                    </p>
                </motion.div>

                {/* Main Services */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {mainServices.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-shadow duration-300"
                            variants={itemVariants}
                        >
                            <div className="text-primary mb-6 flex justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-800 mb-4 text-center">
                                {service.title}
                            </h3>
                            <p className="text-neutral-600 mb-6 text-center leading-relaxed">
                                {service.description}
                            </p>
                            <div className="space-y-3">
                                {service.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="text-neutral-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Services */}
                <motion.div
                    className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                            Additional Services
                        </h2>
                        <p className="text-lg text-neutral-600">
                            More reasons to choose us for your bus travel needs
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {additionalServices.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                                variants={itemVariants}
                            >
                                <div className="text-primary mb-4">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-neutral-800 mb-2">
                                    {service.title}
                                </h4>
                                <p className="text-neutral-600">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Bus Features */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                        Premium Bus Features
                    </h2>
                    <p className="text-lg text-neutral-600 mb-12">
                        Travel in comfort with our modern fleet of buses equipped with premium amenities
                    </p>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {busFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg p-6 shadow-md border border-neutral-200 text-center hover:shadow-lg transition-shadow duration-300"
                                variants={itemVariants}
                            >
                                <div className="text-secondary mb-4 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                                    {feature.title}
                                </h4>
                                <p className="text-neutral-600 text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* CTA Section - Fully Responsive */}
                <motion.div
                    className="bg-primary m-4 rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* Responsive Bus Icon */}
                    <FaBus className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 opacity-80" />
                    
                    {/* Responsive Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                        Ready to Start Your Journey?
                    </h2>
                    
                    {/* Responsive Description */}
                    <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-2">
                        Book your bus ticket now and experience the best in comfort and convenience
                    </p>
                    
                    {/* Responsive Button Container */}
                    <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto">
                        <button className="w-full xs:w-auto bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-neutral-100 transition-colors duration-300 min-w-[140px] sm:min-w-[160px]">
                            Book Now
                        </button>
                        <button className="w-full xs:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-primary transition-colors duration-300 min-w-[140px] sm:min-w-[160px]">
                            Track Bus
                        </button>
                    </div>
                </motion.div>

            </RootLayout>
        </div>
    );
}

export default Services;