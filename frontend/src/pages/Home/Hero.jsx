
// import { motion } from 'framer-motion';
// import { IoMdSwap } from "react-icons/io";
// import { FaSearch } from "react-icons/fa";
// import { IoArrowForwardSharp } from "react-icons/io5";
// import { IoLocationSharp } from "react-icons/io5";
// import { TbLocationFilled } from "react-icons/tb";

// import RootLayout from '../../layout/RootLayout';

// function Hero() {

//     // Hero section logic

//     const variants = {
//         hidden: { opacity: 0, y: -800},
//         visible: { opacity: 1, y: 0},
//     }

//     return (
//         <>
//             {/* Hero */}
//             <motion.div
//                 className='w-full flex-1 h-screen bg-[url("./assets/HomeBus.jpg")] bg-cover bg-no-repeat bg-top relative'
//                 initial="hidden"
//                 animate="visible"
//                 exit="hidden"
//                 variants={variants}
//                 transition={{ duration: 0.85, ease: "easeInOut" }}
//                 >
//                 {/* <div className="absolute inset-0 bg-white/30 z-0" /> */}
//                     <RootLayout className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-neutral-50/70 via-neutral-50/15 to-neutral-50/5'>
//                         {/* Title */}
//                         <div className='space-y-2'>
//                         <motion.p
//                             className='text-lg text-gray-900 font-medium text-center py-2'
//                             initial={{ opacity: 0, y: -30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
//                             >
//                                 Looking for tickets !!
//                             </motion.p>

//                             <motion.h1
//                             className='text-5xl text-gray-800 font-bold capitalize text-center'
//                             initial={{ opacity: 0, y: -30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.85, delay: 0.8, ease: "easeOut" }}
//                             >
//                                 Search Here
//                             </motion.h1>
//                         </div>

//                         {/* Search section */}
//                         <motion.div 
//                             className='w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-3 my-5'
//                             initial={{ opacity: 0, y: -30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.95, delay: 0.9, ease: "easeOut" }}>
//                                 <div className="w-full flex items-center gap-5 justify-between">
//                                     {/* Location set section */}
//                                     <div className="w-[60%] flex items-center gap-5 relative">
//                                         {/* From button */}
//                                         <div className="w-1/2 h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg" >
//                                             <input type="text" placeholder='From' className='flex-1 h-full border-none bg-transparent focus:outline-none placeholder-neutral-600' />
//                                             <div className="w-5 h-5 text-neutral-600">
//                                                 <IoLocationSharp size={22} />
//                                             </div>
//                                         </div>

//                                         {/* To button */}
//                                         <div className="w-1/2 h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg" >
//                                             <input type="text" placeholder='To' className='flex-1 h-full border-none bg-transparent focus:outline-none placeholder-neutral-600' />
//                                             <div className="w-5 h-5 text-neutral-600">
//                                                 <TbLocationFilled size={22} />
//                                             </div>
//                                         </div>

//                                         {/* Swap button */}
//                                         <button className='absolute w-11 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-primary '>
//                                             {/* < IoArrowForwardSharp className='w-5 h-5 text-neutral-50'/> */}
//                                             < IoMdSwap className='w-6 h-6 text-neutral-50'/>
//                                         </button>
//                                     </div>

//                                     {/* Date and search button */}
//                                     <div className="flex-1 h-14 flex items-center gap-5">
//                                         {/* Date */}
//                                         <div className="flex-1 h-full border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg" >
//                                             <input type="date" className='flex-1 h-full border-none bg-transparent focus:outline-none placeholder-neutral-600 cursor-pointer' />
//                                         </div>

//                                         {/* Search */}
//                                         <button className="w-fit px-5 h-full hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 ease-in-out duration-300">
//                                             <FaSearch />
//                                             Search
//                                         </button>

//                                     </div>

//                                 </div>
//                         </motion.div>

//                     </RootLayout>
//             </motion.div>
//         </>
//     );
// }

// export default Hero



import { motion } from 'framer-motion';
import { IoMdSwap } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { TbLocationFilled } from "react-icons/tb";

import RootLayout from '../../layout/RootLayout';

function Hero() {

    // Hero section logic

    const variants = {
        hidden: { opacity: 0, y: -800},
        visible: { opacity: 1, y: 0},
    }

    return (
        <>
            {/* Hero */}
            <motion.div
                className='w-full flex-1 h-screen bg-[url("./assets/HomeBus.jpg")] bg-cover bg-no-repeat bg-top relative'
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={{ duration: 0.85, ease: "easeInOut" }}
                >
                {/* <div className="absolute inset-0 bg-white/30 z-0" /> */}
                    <RootLayout className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-neutral-50/70 via-neutral-50/15 to-neutral-50/5'>
                        {/* Title */}
                        <div className='space-y-2'>
                        <motion.p
                            className='text-lg sm:text-lg text-gray-900 font-medium text-center py-2'
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                            >
                                Looking for tickets !!
                            </motion.p>

                            <motion.h1
                            className='text-3xl sm:text-4xl md:text-5xl text-gray-800 font-bold capitalize text-center'
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, delay: 0.8, ease: "easeOut" }}
                            >
                                Search Here
                            </motion.h1>
                        </div>

                        {/* Search section */}
                        <motion.div 
                            className='w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-3 my-5'
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.95, delay: 0.9, ease: "easeOut" }}>
                                <div className="w-full flex flex-col md:flex-row items-center gap-3 md:gap-5 justify-between">
                                    {/* Location set section */}
                                    <div className="w-full md:w-[60%] flex flex-col sm:flex-row items-center relative sm:gap-5">
                                        {/* Location input group for mobile with reduced spacing */}
                                        <div className="w-full space-y-1 sm:space-y-0 sm:w-auto sm:flex-1 sm:flex sm:flex-row sm:items-center sm:gap-5">
                                            {/* From input */}
                                            <div className="w-full sm:w-1/2 h-12 sm:h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-3 sm:px-5 flex items-center gap-x-3 rounded-lg">
                                                <div className="w-5 h-5 text-neutral-600 sm:order-2">
                                                    <IoLocationSharp size={22} />
                                                </div>
                                                <input type="text" placeholder='From' className='flex-1 h-full border-none bg-transparent focus:outline-none placeholder-neutral-600 sm:order-1' />
                                            </div>

                                            {/* Mobile swap button container with minimal height */}
                                            <div className="sm:hidden flex justify-center items-center h-6">
                                                <button className='w-10 h-10 rounded-full flex items-center justify-center bg-primary shadow-md'>
                                                    <IoMdSwap className='w-6 h-6 text-neutral-50 transform rotate-90'/>
                                                </button>
                                            </div>

                                            {/* To input */}
                                            <div className="w-full sm:w-1/2 h-12 sm:h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-3 sm:px-5 flex items-center gap-x-3 rounded-lg">
                                                <div className="w-5 h-5 text-neutral-600 sm:order-2">
                                                    <TbLocationFilled size={22} />
                                                </div>
                                                <input type="text" placeholder='To' className='flex-1 h-full border-none bg-transparent focus:outline-none placeholder-neutral-600 sm:order-1' />
                                            </div>
                                        </div>

                                        {/* Desktop swap button */}
                                        <button className='hidden sm:flex absolute w-11 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full items-center justify-center bg-primary'>
                                            <IoMdSwap className='w-6 h-6 text-neutral-50'/>
                                        </button>
                                    </div>

                                    {/* Date and search button */}
                                    <div className="w-full md:flex-1 h-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-3 sm:mt-0">
                                        {/* Date */}
                                        <div className="w-full sm:flex-1 h-12 sm:h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-3 sm:px-5 flex items-center gap-x-1 rounded-lg">
                                            <input type="date" className='flex-1 h-full border-none bg-transparent focus:outline-none placeholder-neutral-600 cursor-pointer text-neutral-700 appearance-none' />
                                        </div>

                                        {/* Search */}
                                        <button className="w-full sm:w-fit px-5 h-12 sm:h-14 hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 ease-in-out duration-300">
                                            <FaSearch />
                                            Search
                                        </button>
                                    </div>
                                </div>
                        </motion.div>
                    </RootLayout>
            </motion.div>
        </>
    );
}

export default Hero