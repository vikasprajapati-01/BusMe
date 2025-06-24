
import { motion } from "framer-motion";

import { FaBus, FaStar } from "react-icons/fa6";
import { IoWifi, IoFastFoodSharp, IoNewspaperOutline } from "react-icons/io5";
import { GiCharging } from "react-icons/gi";
import { RiVipLine } from "react-icons/ri";
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlineChair } from "react-icons/md";

import { Link } from "react-router-dom"; 

function TicketCard({ icon:Icon, busName, from, to, arrivalTime, departTime, price, availableSeats }) {

    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },   
    }

    return(
        <motion.div className="w-full rounded-xl p-3 sm:p-4 lg:p-5 border-2 border-neutral-300 space-y-3 sm:space-y-4"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    transition={{ duration: 0.65, delay:0.5, ease: "easeInOut" }}>
            <div className="space-y-3 sm:space-y-4 w-full border-b border-neutral-300/60 pb-2 sm:pb-3">

                {/* Bus Info */}
                <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-y-2 sm:gap-y-0">
                    <div className="flex items-center gap-x-2">
                        <FaBus className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        <p className="text-base sm:text-lg text-neutral-700 font-semibold">
                            {busName}
                        </p>
                    </div>

                    <div className="flex items-center gap-x-2 sm:gap-x-3 lg:gap-x-4 flex-wrap">
                        <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                            <TbAirConditioning className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            <p className="text-xs text-neutral-600 font-normal">
                                AC
                            </p>
                        </div>

                        <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                            <FaStar className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                            <p className="text-xs text-yellow-600 font-normal pt-0.5">
                                4.6
                            </p>
                        </div>

                        <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                            <TbAirConditioning className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                            <p className="text-xs text-neutral-600 font-normal">
                                Sofa
                            </p>
                        </div>

                        <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                            <MdOutlineChair className="w-3 h-3 sm:w-4 sm:h-4 text-primary -rotate-90" />
                            <p className="text-xs text-neutral-600 font-normal">
                                40 seats
                            </p>
                        </div>
                    </div>
                </div>

                {/* Route Details */}
                <div className="space-y-0">

                    <div className="w-full flex items-center justify-between gap-x-2 sm:gap-x-2.5">
                        <h1 className="text-lg sm:text-xl lg:text-2xl text-neutral-600 font-semibold">
                            {arrivalTime}
                        </h1>

                        <div className="flex-1 border-dashed border border-neutral-300 relative">
                            <p className="absolute w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 p-0.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 border-dashed border border-neutral-400 rounded-full flex items-center justify-center">
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary" />
                            </p>
                        </div>

                        <h1 className="text-lg sm:text-xl lg:text-2xl text-neutral-600 font-semibold">
                            {departTime}
                        </h1>
                    </div>

                    <div className="w-full flex items-center justify-between gap-x-3 sm:gap-x-5">
                        <p className="text-sm sm:text-base text-neutral-500 font-normal">
                            {from}
                        </p>

                        <p className="text-sm sm:text-base text-neutral-500 font-normal">
                            {to}
                        </p>
                    </div>

                </div>
            </div>

            {/* Price, available seat and book seat */}
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-3 sm:gap-y-0">

                {/* Price */}
                <h1 className="text-lg sm:text-xl text-neutral-700 font-semibold">
                    Rs. {price}
                    <span className="text-xs sm:text-sm text-neutral-500 font-normal">
                        /per seat
                    </span>
                </h1>

                <h1 className="text-xs sm:text-sm text-neutral-600 font-normal flex items-center justify-center gap-x-1.5">
                    <span className="text-base sm:text-lg text-primary font-bold pt-0.5">
                        {availableSeats}
                    </span>
                    seats available
                </h1>

                {/* Button */}
                <Link to="/ticket/detail" className="w-full sm:w-fit px-4 sm:px-5 py-2 sm:py-1.5 hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary text-sm font-normal text-neutral-50 flex items-center justify-center gap-x-2 ease-in-out duration-300">
                    Book Seat
                </Link>
            </div>

        </motion.div>
    );
}

export default TicketCard



// import { motion } from "framer-motion";

// import { FaBus, FaStar } from "react-icons/fa6";
// import { IoWifi, IoFastFoodSharp, IoNewspaperOutline } from "react-icons/io5";
// import { GiCharging } from "react-icons/gi";
// import { RiVipLine } from "react-icons/ri";
// import { TbAirConditioning } from "react-icons/tb";
// import { MdOutlineChair } from "react-icons/md";

// import { Link } from "react-router-dom"; 

// function TicketCard({ busId, icon:Icon = FaBus, busName, from, to, arrivalTime, departTime, price, availableSeats, busType = "AC", rating = "4.6", totalSeats = "40" }) {

//     const variants = {
//         hidden: { opacity: 0, y: -50 },
//         visible: { opacity: 1, y: 0 },   
//     }

//     return(
//         <motion.div className="w-full rounded-xl p-3 sm:p-4 lg:p-5 border-2 border-neutral-300 space-y-3 sm:space-y-4"
//                     initial="hidden"
//                     animate="visible"
//                     exit="hidden"
//                     variants={variants}
//                     transition={{ duration: 0.65, delay:0.5, ease: "easeInOut" }}>
//             <div className="space-y-3 sm:space-y-4 w-full border-b border-neutral-300/60 pb-2 sm:pb-3">

//                 {/* Bus Info */}
//                 <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-y-2 sm:gap-y-0">
//                     <div className="flex items-center gap-x-2">
//                         <FaBus className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
//                         <p className="text-base sm:text-lg text-neutral-700 font-semibold">
//                             {busName}
//                         </p>
//                     </div>

//                     <div className="flex items-center gap-x-2 sm:gap-x-3 lg:gap-x-4 flex-wrap">
//                         <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
//                             <TbAirConditioning className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
//                             <p className="text-xs text-neutral-600 font-normal">
//                                 {busType}
//                             </p>
//                         </div>

//                         <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
//                             <FaStar className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
//                             <p className="text-xs text-yellow-600 font-normal pt-0.5">
//                                 {rating}
//                             </p>
//                         </div>

//                         <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
//                             <TbAirConditioning className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
//                             <p className="text-xs text-neutral-600 font-normal">
//                                 Sofa
//                             </p>
//                         </div>

//                         <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
//                             <MdOutlineChair className="w-3 h-3 sm:w-4 sm:h-4 text-primary -rotate-90" />
//                             <p className="text-xs text-neutral-600 font-normal">
//                                 {totalSeats} seats
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Route Details */}
//                 <div className="space-y-0">

//                     <div className="w-full flex items-center justify-between gap-x-2 sm:gap-x-2.5">
//                         <h1 className="text-lg sm:text-xl lg:text-2xl text-neutral-600 font-semibold">
//                             {departTime}
//                         </h1>

//                         <div className="flex-1 border-dashed border border-neutral-300 relative">
//                             <p className="absolute w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 p-0.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 border-dashed border border-neutral-400 rounded-full flex items-center justify-center">
//                                 <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary" />
//                             </p>
//                         </div>

//                         <h1 className="text-lg sm:text-xl lg:text-2xl text-neutral-600 font-semibold">
//                             {arrivalTime}
//                         </h1>
//                     </div>

//                     <div className="w-full flex items-center justify-between gap-x-3 sm:gap-x-5">
//                         <p className="text-sm sm:text-base text-neutral-500 font-normal">
//                             {from}
//                         </p>

//                         <p className="text-sm sm:text-base text-neutral-500 font-normal">
//                             {to}
//                         </p>
//                     </div>

//                 </div>
//             </div>

//             {/* Price, available seat and book seat */}
//             <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-3 sm:gap-y-0">

//                 {/* Price */}
//                 <h1 className="text-lg sm:text-xl text-neutral-700 font-semibold">
//                     Rs. {price}
//                     <span className="text-xs sm:text-sm text-neutral-500 font-normal">
//                         /per seat
//                     </span>
//                 </h1>

//                 <h1 className="text-xs sm:text-sm text-neutral-600 font-normal flex items-center justify-center gap-x-1.5">
//                     <span className="text-base sm:text-lg text-primary font-bold pt-0.5">
//                         {availableSeats}
//                     </span>
//                     seats available
//                 </h1>

//                 {/* Button */}
//                 <Link to={`/ticket/detail/${busId}`} className="w-full sm:w-fit px-4 sm:px-5 py-2 sm:py-1.5 hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary text-sm font-normal text-neutral-50 flex items-center justify-center gap-x-2 ease-in-out duration-300">
//                     Book Seat
//                 </Link>
//             </div>

//         </motion.div>
//     );
// }

// export default TicketCard;