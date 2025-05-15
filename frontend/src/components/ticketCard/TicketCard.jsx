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
        <motion.div className="w-full rounded-xl p-5 border-2 border-neutral-300 space-y-4"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    transition={{ duration: 0.65, delay:0.5, ease: "easeInOut" }}>
            <div className="space-y-4 w-full border-b border-neutral-300/60 pb-3">

                {/* Bus Info */}
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <FaBus className="h-5 w-5 text-primary" />
                        <p className="text-lg text-neutral-700 font-semibold">
                            {busName}
                        </p>
                    </div>

                    <div className="flex items-center gap-x-4">
                        <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                            <TbAirConditioning className="w-4 h-4 text-primary" />
                            <p className="text-xs text-neutral-600 font-normal">
                                AC
                            </p>
                        </div>

                        <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                            <FaStar className="w-4 h-4 text-yellow-600" />
                            <p className="text-xs text-yellow-600 font-normal pt-0.5">
                                4.6
                            </p>
                        </div>

                        <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                            <TbAirConditioning className="w-4 h-4 text-primary" />
                            <p className="text-xs text-neutral-600 font-normal">
                                Sofa
                            </p>
                        </div>

                        <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                            <MdOutlineChair className="w-4 h-4 text-primary -rotate-90" />
                            <p className="text-xs text-neutral-600 font-normal">
                                40 seats
                            </p>
                        </div>

                    </div>
                </div>

                {/* Route Details */}
                <div className="space-y-0">

                    <div className="w-full flex items-center justify-between gap-x-2.5">
                        <h1 className="text-2xl text-neutral-600 font-semibold">
                            {arrivalTime}
                        </h1>

                        <div className="flex-1 border-dashed border border-neutral-300 relative">
                            <p className="absolute w-14 h-14 p-0.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 border-dashed border border-neutral-400 rounded-full flex items-center justify-center">
                                <Icon className="w-8 h-8 text-primary" />
                            </p>
                        </div>

                        <h1 className="text-2xl text-neutral-600 font-semibold">
                            {departTime}
                        </h1>
                    </div>

                    <div className="w-full flex items-center justify-between gap-x-5">
                        <p className="text-base text-neutral-500 font-normal">
                            {from}
                        </p>

                        <p className="text-base text-neutral-500 font-normal">
                            {to}
                        </p>
                    </div>

                </div>
            </div>

            {/* Price , available seat and book seat */}
            <div className="w-full flex intems-center justify-between">

                {/* Price */}
                <h1 className="text-xl text-neutral-700 font-semibold">
                    Rs. { price }
                    <span className="text-sm text-neutral-500 font-normal">
                        /per seat
                    </span>
                </h1>

                <h1 className="text-sm text-neutral-600 font-normal flex items-center justify-center gap-x-1.5">
                    <span className="text-lg text-primary font-bold pt-0 5">
                        { availableSeats }
                    </span>
                    seats available
                </h1>

                {/* Button */}
                <Link to="/ticket/detail" className="w-fit px-5 py-1.5 hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary text-sm font-normal text-neutral-50 flex items-center justify-center gap-x-2 ease-in-out duration-300">
                    Book Seat
                </Link>
            </div>

        </motion.div>
    );
}

export default TicketCard