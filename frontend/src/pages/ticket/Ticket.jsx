

import { useState } from 'react';
import TopLayout from '../../layout/topLayout/TopLayout'
import RootLayout from '../../layout/RootLayout';
import Filter from './filter/Filter';
import SearchResult from './searchResult/SearchResult';

import TopImage from '../../assets/HomeBus.jpg'

import { IoMdSwap } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { TbLocationFilled } from "react-icons/tb";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

import { motion, AnimatePresence } from 'framer-motion';

function Ticket() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return(
        <div className="w-full space-y-8 sm:space-y-12 pb-12 sm:pb-16">
            <TopLayout img={TopImage} title={"Book Your Ticket"} />

            <RootLayout className='space-y-8 sm:space-y-12 relative'>
                {/* Search Ticket */}
                <div className='space-y-3 sm:space-y-5 w-full bg-neutral-20 flex py-3 sm:py-4 items-center justify-center flex-col sticky top-0 z-30'>
                    <motion.h1
                        className='text-xl sm:text-2xl lg:text-3xl text-neutral-700 py-2 sm:py-3 font-semibold text-center px-4'
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
                </div>

                {/* Mobile Filter Button */}
                <div className="lg:hidden w-full flex justify-start px-4 sm:px-0">
                    <button 
                        onClick={toggleFilter}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-colors duration-300"
                    >
                        <HiAdjustmentsHorizontal className="w-5 h-5" />
                        <span className="text-sm font-medium">Filters</span>
                    </button>
                </div>

                {/* Mobile Filter Overlay */}
                <AnimatePresence>
                    {isFilterOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="lg:hidden fixed inset-0 bg-black/50 z-40"
                                onClick={toggleFilter}
                            />
                            
                            {/* Filter Panel */}
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100%' }}
                                transition={{ 
                                    type: 'spring', 
                                    damping: 25, 
                                    stiffness: 200,
                                    duration: 0.4 
                                }}
                                className="lg:hidden fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-xl overflow-y-auto"
                            >
                                {/* Filter Header */}
                                <div className="flex items-center justify-between p-4 border-b border-neutral-200">
                                    <h2 className="text-lg font-semibold text-neutral-700">Filters</h2>
                                    <button 
                                        onClick={toggleFilter}
                                        className="p-2 hover:bg-neutral-100 rounded-full transition-colors duration-200"
                                    >
                                        <IoClose className="w-6 h-6 text-neutral-600" />
                                    </button>
                                </div>
                                
                                {/* Filter Content */}
                                <div className="p-4">
                                    <Filter className="space-y-4" />
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Searched Bus Ticket */}
                <div className='w-full h-auto grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-16 relative'>
                    {/* Filter - Desktop Only */}
                    <div className="hidden lg:block lg:col-span-1">
                        <Filter className="space-y-4 sticky top-52 z-20" />
                    </div>

                    {/* Search Results */}
                    <div className="lg:col-span-3">
                        <SearchResult />
                    </div>
                </div>
            </RootLayout>
        </div>
    );
}

export default Ticket


// import { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import TopLayout from '../../layout/topLayout/TopLayout';
// import RootLayout from '../../layout/RootLayout';
// import Filter from './filter/Filter';
// import SearchResult from './searchResult/SearchResult';

// import TopImage from '../../assets/HomeBus.jpg';

// import { IoMdSwap } from "react-icons/io";
// import { FaSearch } from "react-icons/fa";
// import { IoLocationSharp } from "react-icons/io5";
// import { TbLocationFilled } from "react-icons/tb";
// import { HiAdjustmentsHorizontal } from "react-icons/hi2";
// import { IoClose } from "react-icons/io5";

// import { motion, AnimatePresence } from 'framer-motion';

// function Ticket() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [isFilterOpen, setIsFilterOpen] = useState(false);
//     const [buses, setBuses] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
    
//     // Search form state
//     const [searchData, setSearchData] = useState({
//         from: location.state?.from || '',
//         to: location.state?.to || '',
//         date: location.state?.date || ''
//     });

//     // Fetch buses on component mount if search params exist
//     useEffect(() => {
//         if (location.state && location.state.from && location.state.to && location.state.date) {
//             fetchBuses(location.state.from, location.state.to, location.state.date);
//         }
//     }, [location.state]);

//     // Handle input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setSearchData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     // Swap from and to locations
//     const handleSwapLocations = () => {
//         setSearchData(prev => ({
//             ...prev,
//             from: prev.to,
//             to: prev.from
//         }));
//     };

//     // Handle search submission
//     const handleSearch = () => {
//         if (!searchData.from || !searchData.to || !searchData.date) {
//             alert('Please fill all fields');
//             return;
//         }

//         fetchBuses(searchData.from, searchData.to, searchData.date);
        
//         // Update browser URL with search params without page refresh
//         navigate('/ticket', { 
//             state: searchData, 
//             replace: true 
//         });
//     };

//     // Fetch buses from API
//     const fetchBuses = async (from, to, date) => {
//         setLoading(true);
//         setError(null);
        
//         try {
//             const response = await axios.get('/api/bus/search/', {
//                 params: {
//                     from: from,
//                     to: to,
//                     date: date
//                 }
//             });
            
//             setBuses(response.data);
//         } catch (err) {
//             console.error('Error fetching buses:', err);
//             setError('Failed to fetch buses. Please try again.');
//             setBuses([]); // Clear buses on error
//         } finally {
//             setLoading(false);
//         }
//     };

//     const toggleFilter = () => {
//         setIsFilterOpen(!isFilterOpen);
//     };

//     return(
//         <div className="w-full space-y-8 sm:space-y-12 pb-12 sm:pb-16">
//             <TopLayout img={TopImage} title={"Book Your Ticket"} />

//             <RootLayout className='space-y-8 sm:space-y-12 relative'>
//                 {/* Search Ticket */}
//                 <div className='space-y-3 sm:space-y-5 w-full bg-neutral-20 flex py-3 sm:py-4 items-center justify-center flex-col sticky top-0 z-30'>
//                     <motion.h1
//                         className='text-xl sm:text-2xl lg:text-3xl text-neutral-700 py-2 sm:py-3 font-semibold text-center px-4'
//                         initial={{ opacity: 0, y: -30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1.35, delay: 0.8, ease: "easeOut" }}
//                         >
//                             Do you want to change the route?
//                     </motion.h1>

//                     {/* Search */}
//                     <motion.div 
//                         className='w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-3 my-5'
//                         initial={{ opacity: 0, y: -30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.95, delay: 0.9, ease: "easeOut" }}>
//                             <div className="w-full flex flex-col md:flex-row items-center gap-3 md:gap-5 justify-between">
//                                 {/* Location set section */}
//                                 <div className="w-full md:w-[60%] flex flex-col sm:flex-row items-center relative sm:gap-5">
//                                     {/* Location input group for mobile with reduced spacing */}
//                                     <div className="w-full space-y-1 sm:space-y-0 sm:w-auto sm:flex-1 sm:flex sm:flex-row sm:items-center sm:gap-5">
//                                         {/* From input */}
//                                         <div className="w-full sm:w-1/2 h-12 sm:h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-3 sm:px-5 flex items-center gap-x-3 rounded-lg">
//                                             <div className="w-5 h-5 text-neutral-600 sm:order-2">
//                                                 <IoLocationSharp size={22} />
//                                             </div>
//                                             <input 
//                                                 type="text" 
//                                                 name="from"
//                                                 value={searchData.from}
//                                                 onChange={handleInputChange}
//                                                 placeholder='From' 
//                                                 className='flex-1 h-full border-none bg-transparent focus:outline-none placeholder-neutral-600 sm:order-1' 
//                                             />
//                                         </div>

//                                         {/* Mobile swap button container with minimal height */}
//                                         <div className="sm:hidden flex justify-center items-center h-6">
//                                             <button 
//                                                 className='w-10 h-10 rounded-full flex items-center justify-center bg-primary shadow-md'
//                                                 onClick={handleSwapLocations}
//                                                 type="button"
//                                             >
//                                                 <IoMdSwap className='w-6 h-6 text-neutral-50 transform rotate-90'/>
//                                             </button>
//                                         </div>

//                                         {/* To input */}
//                                         <div className="w-full sm:w-1/2 h-12 sm:h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-3 sm:px-5 flex items-center gap-x-3 rounded-lg">
//                                             <div className="w-5 h-5 text-neutral-600 sm:order-2">
//                                                 <TbLocationFilled size={22} />
//                                             </div>
//                                             <input 
//                                                 type="text" 
//                                                 name="to"
//                                                 value={searchData.to}
//                                                 onChange={handleInputChange}
//                                                 placeholder='To' 
//                                                 className='flex-1 h-full border-none bg-transparent focus:outline-none placeholder-neutral-600 sm:order-1' 
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Desktop swap button */}
//                                     <button 
//                                         className='hidden sm:flex absolute w-11 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full items-center justify-center bg-primary'
//                                         onClick={handleSwapLocations}
//                                         type="button"
//                                     >
//                                         <IoMdSwap className='w-6 h-6 text-neutral-50'/>
//                                     </button>
//                                 </div>

//                                 {/* Date and search button */}
//                                 <div className="w-full md:flex-1 h-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-3 sm:mt-0">
//                                     {/* Date */}
//                                     <div className="w-full sm:flex-1 h-12 sm:h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-3 sm:px-5 flex items-center gap-x-1 rounded-lg">
//                                         <input 
//                                             type="date" 
//                                             name="date"
//                                             value={searchData.date}
//                                             onChange={handleInputChange}
//                                             className='flex-1 h-full border-none bg-transparent focus:outline-none placeholder-neutral-600 cursor-pointer text-neutral-700 appearance-none' 
//                                         />
//                                     </div>

//                                     {/* Search */}
//                                     <button 
//                                         onClick={handleSearch}
//                                         type="button"
//                                         className="w-full sm:w-fit px-5 h-12 sm:h-14 bg-primary hover:bg-primary/90 text-white font-semibold rounded-md border-2 border-primary text-base flex items-center justify-center gap-x-2 ease-in-out duration-300"
//                                     >
//                                         <FaSearch />
//                                         Search
//                                     </button>
//                                 </div>
//                             </div>
//                     </motion.div>
//                 </div>

//                 {/* Mobile Filter Button */}
//                 <div className="lg:hidden w-full flex justify-start px-4 sm:px-0">
//                     <button 
//                         onClick={toggleFilter}
//                         className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-colors duration-300"
//                     >
//                         <HiAdjustmentsHorizontal className="w-5 h-5" />
//                         <span className="text-sm font-medium">Filters</span>
//                     </button>
//                 </div>

//                 {/* Mobile Filter Overlay */}
//                 <AnimatePresence>
//                     {isFilterOpen && (
//                         <>
//                             {/* Backdrop */}
//                             <motion.div
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 exit={{ opacity: 0 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="lg:hidden fixed inset-0 bg-black/50 z-40"
//                                 onClick={toggleFilter}
//                             />
                            
//                             {/* Filter Panel */}
//                             <motion.div
//                                 initial={{ x: '-100%' }}
//                                 animate={{ x: 0 }}
//                                 exit={{ x: '-100%' }}
//                                 transition={{ 
//                                     type: 'spring', 
//                                     damping: 25, 
//                                     stiffness: 200,
//                                     duration: 0.4 
//                                 }}
//                                 className="lg:hidden fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-xl overflow-y-auto"
//                             >
//                                 {/* Filter Header */}
//                                 <div className="flex items-center justify-between p-4 border-b border-neutral-200">
//                                     <h2 className="text-lg font-semibold text-neutral-700">Filters</h2>
//                                     <button 
//                                         onClick={toggleFilter}
//                                         className="p-2 hover:bg-neutral-100 rounded-full transition-colors duration-200"
//                                     >
//                                         <IoClose className="w-6 h-6 text-neutral-600" />
//                                     </button>
//                                 </div>
                                
//                                 {/* Filter Content */}
//                                 <div className="p-4">
//                                     <Filter className="space-y-4" />
//                                 </div>
//                             </motion.div>
//                         </>
//                     )}
//                 </AnimatePresence>

//                 {/* Searched Bus Ticket */}
//                 <div className='w-full h-auto grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-16 relative'>
//                     {/* Filter - Desktop Only */}
//                     <div className="hidden lg:block lg:col-span-1">
//                         <Filter className="space-y-4 sticky top-52 z-20" />
//                     </div>

//                     {/* Search Results */}
//                     <div className="lg:col-span-3">
//                         {loading ? (
//                             <div className="flex justify-center items-center py-12">
//                                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
//                             </div>
//                         ) : error ? (
//                             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//                                 <p>{error}</p>
//                             </div>
//                         ) : (
//                             <SearchResult buses={buses} />
//                         )}
//                     </div>
//                 </div>
//             </RootLayout>
//         </div>
//     );
// }

// export default Ticket;