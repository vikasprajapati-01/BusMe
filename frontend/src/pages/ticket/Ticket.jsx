import TopLayout from '../../layout/topLayout/TopLayout'
import RootLayout from '../../layout/RootLayout';

import TopImage from '../../assets/HomeBus.jpg'

import { IoMdSwap } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { TbLocationFilled } from "react-icons/tb";

import { motion } from 'framer-motion';

function Ticket() {
    return(
        <div className="w-full space-y-12 pb-16 ">
            <TopLayout img={TopImage} title={"Book Your Ticket"} />

            <RootLayout className='space-y-12 relative'>
                {/* Search Ticket */}
                <div className='space-y-5 w-full bg-neutral-20 flex py-4 items-center justify-center flex-col sticky top-0 z-30'>
                    <motion.h1
                        className='text-3xl text-neutral-700 py-3 font-semibold text-center'
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.35, delay: 0.8, ease: "easeOut" }}
                        >
                            Do you want to change the route?
                    </motion.h1>

                    {/* Search */}
                    <motion.div 
                        className='w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-3 my-5'
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.95, delay: 0.9, ease: "easeOut" }}>
                            <div className="w-full flex items-center gap-5 justify-between">
                                {/* Location set section */}
                                <div className="w-[60%] flex items-center gap-5 relative">
                                    {/* From button */}
                                    <div className="w-1/2 h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg" >
                                        <input type="text" placeholder='From' className='flex-1 h-full border-none bg-transparent focus:outline-none placeholder-neutral-600' />
                                        <div className="w-5 h-5 text-neutral-600">
                                            <IoLocationSharp size={22} />
                                        </div>
                                    </div>

                                    {/* To button */}
                                    <div className="w-1/2 h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg" >
                                        <input type="text" placeholder='To' className='flex-1 h-full border-none bg-transparent focus:outline-none placeholder-neutral-600' />
                                        <div className="w-5 h-5 text-neutral-600">
                                            <TbLocationFilled size={22} />
                                        </div>
                                    </div>

                                    {/* Swap button */}
                                    <button className='absolute w-11 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-primary '>
                                        {/* < IoArrowForwardSharp className='w-5 h-5 text-neutral-50'/> */}
                                        < IoMdSwap className='w-6 h-6 text-neutral-50'/>
                                    </button>
                                </div>

                                {/* Date and search button */}
                                <div className="flex-1 h-14 flex items-center gap-5">
                                    {/* Date */}
                                    <div className="flex-1 h-full border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg" >
                                        <input type="date" className='flex-1 h-full border-none bg-transparent focus:outline-none placeholder-neutral-600 cursor-pointer' />
                                    </div>

                                    {/* Search */}
                                    <button className="w-fit px-5 h-full hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 ease-in-out duration-300">
                                        <FaSearch />
                                        Search
                                    </button>

                                </div>

                            </div>
                    </motion.div>
                </div>

                {/* Searched Bus Ticket */}
                <div className='w-full h-auto grid grid-cols-4 gap-16 relative'>
                    {/* Filter */}

                    {/* Search for the ticket */}
                </div>
            </RootLayout>
        </div>
    );
}

export default Ticket