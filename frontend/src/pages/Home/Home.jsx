import { motion } from 'framer-motion';
import { IoMdSwap } from "react-icons/io";

import RootLayout from '../../layout/RootLayout';

function Home() {

    // Hero section logic

    const variants = {
        hidden: { opacity: 0, y: -800},
        visible: { opacity: 1, y: 0},
    }

    return (
        <div className="space-y-16 w-full min-h-screen pb-16" >
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
                            className='text-lg text-gray-900 font-medium text-center py-2'
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                            >
                                Need tickets !!
                            </motion.p>

                            <motion.p
                            className='text-5xl text-gray-800 font-bold capitalize text-center'
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, delay: 0.8, ease: "easeOut" }}
                            >
                                Search for tickets
                            </motion.p>
                        </div>

                        {/* Search section */}
                        <motion.div 
                            className='w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-5 my-3'
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.95, delay: 0.9, ease: "easeOut" }}>
                                <div className="w-full flex items-center gap-5 justify-between">
                                    {/* Location set section */}
                                    <div className="w-[60%] flex items-center gap-5 relative">
                                        {/* From button */}
                                        <div className="w-1/2 h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg" >
                                            From
                                        </div>

                                        {/* To button */}
                                        <div className="w-1/2 h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg" >
                                            To
                                        </div>

                                        {/* Swap button */}
                                        <button className='absolute w-11 h-6 top-1/2 left-1/2'>
                                            < IoMdSwap className='w-6 h-6 text-neutral-50'/>
                                        </button>
                                    </div>

                                    {/* Date section */}
                                    <div className="flex-1 h-14 flex items-center gap-5"></div>

                                </div>
                        </motion.div>

                    </RootLayout>
            </motion.div>

        </div>
    );
}

export default Home