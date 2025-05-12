import { Link } from "react-router-dom";
import RootLayout from "../../layout/RootLayout";

import { motion } from "framer-motion";

import { FaBus, FaInstagram, FaFacebook, FaYoutube, FaXTwitter } from "react-icons/fa6";

function Footer() {

    const variants = {
        hidden: { opacity: 0, y: -30},
        visible: { opacity: 1, y: 0},
    }

    return(
        <div className="w-full h-auto bg-neutral-800 py-12">
            <RootLayout className="space-y-10">

                <motion.div className="w-full grid grid-cols-5 gap-8"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={variants}
                        transition={{ duration: 0.65, ease: "easeInOut" }}>

                    {/* Left Footer */}

                    <div className="col-span-2 space-y-6 md:pr-10 pr-0">
                        <div className="space-y-3">
                            {/* Logo */}
                            <Link to="/" className="text-2xl flex items-center gap-2 font-bold uppercase text-primary">
                                <FaBus />
                                <p>BusMe</p>
                            </Link>  

                            {/* Description */}
                            <p className="text-sm text-neutral-300 font-normal">
                                Bus is one of the most important and safest transportation system. We make sure you enjoy the ride.
                            </p>
                        </div>

                        {/* Social media links */}
                        <div className="w-full flex items-center gap-x-5">
                            <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-300">
                                <FaInstagram className="w-5 h-5 text-neutral-50" />
                            </div>

                            <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-300">
                                <FaFacebook className="w-5 h-5 text-neutral-50" />
                            </div>

                            <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-300">
                                <FaYoutube className="w-5 h-5 text-neutral-50" />
                            </div>

                            <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-300">
                                <FaXTwitter className="w-5 h-5 text-neutral-50" />
                            </div>
                        </div>

                    </div>

                    {/* Middle Footer 1 */}

                    <div className="col-span-1 space-y-5">
                        <h1 className="text-lg text-neutral-100 font-semibold">
                            To Know More
                        </h1>

                        <div className="space-y-2">
                            <Link to="/about" className="block text-base text-neutral-400 hover:text-neutral-100 font-normal ease-in-out duration-300">
                                About Us
                            </Link>

                            <Link to="/account" className="block text-base text-neutral-400 hover:text-neutral-100 font-normal ease-in-out duration-300">
                                Account
                            </Link>

                            <Link to="/tickets" className="block text-base text-neutral-400 hover:text-neutral-100 font-normal ease-in-out duration-300">
                                Check tickets
                            </Link>

                            <Link to="/signin" className="block text-base text-neutral-400 hover:text-neutral-100 font-normal ease-in-out duration-300">
                                Create a new Account
                            </Link>
                        </div>
                    </div>

                    {/* Middle Footer 2 */}

                    <div className="col-span-1 space-y-5">
                        <h1 className="text-lg text-neutral-100 font-semibold">
                            Most Reserved Routes
                        </h1>

                        <div className="space-y-2">
                            <Link to="/" className="block text-base text-neutral-400 hover:text-neutral-100 font-normal ease-in-out duration-300">
                                Delhi - Ayodhaya
                            </Link>

                            <Link to="/" className="block text-base text-neutral-400 hover:text-neutral-100 font-normal ease-in-out duration-300">
                                Mumbai - Jaipur
                            </Link>

                            <Link to="/" className="block text-base text-neutral-400 hover:text-neutral-100 font-normal ease-in-out duration-300">
                                Bangalore - Lucknow
                            </Link>

                            <Link to="/" className="block text-base text-neutral-400 hover:text-neutral-100 font-normal ease-in-out duration-300">
                                Chennai - Kolkata
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-1 space-y-5">
                        <h1 className="text-lg text-neutral-100 font-semibold">
                            Support
                        </h1>

                        <div className="space-y-2">
                            <Link to="/" className="block text-base text-neutral-400 hover:text-neutral-100 font-normal ease-in-out duration-300">
                                Terms & Conditions
                            </Link>

                            <Link to="/" className="block text-base text-neutral-400 hover:text-neutral-100 font-normal ease-in-out duration-300">
                                Support Center
                            </Link>

                            <Link to="/" className="block text-base text-neutral-400 hover:text-neutral-100 font-normal ease-in-out duration-300">
                                Privacy Policy
                            </Link>

                            <Link to="/faqs" className="block text-base text-neutral-400 hover:text-neutral-100 font-normal ease-in-out duration-300">
                                FAQs
                            </Link>
                        </div>
                    </div>

                </motion.div>

                <div className="w-full h-px bg-neutral-500/50 m-6" />

                <div className="w-full flex items-center justify-between">
                    <p className="text-sm text-neutral-400 font-normal">
                        Copyright &copy; 2025
                    </p>

                    {/* Any cards or design at right */}

                    {/* <div className="flex items-center gap-x-2">
                        <div className="">
                            <img src="" alt="" className="w-fit h-9 object-contain object-center" />
                        </div>
                    </div> */}
                </div>

            </RootLayout>
        </div>
    );
}

export default Footer