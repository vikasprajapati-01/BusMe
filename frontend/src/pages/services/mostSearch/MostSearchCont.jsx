import { IoWifi, IoFastFoodSharp, IoNewspaperOutline } from "react-icons/io5";
import { GiCharging } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
// import { FaBottleWater } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const MostSearchCont = ( { from, to, travelTime, price } ) => {

    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },   
    }

    return (
        <motion.div className="w-full rounded-xl p-5 border-2 border-neutral-300 space-y-10"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    transition={{ duration: 0.65, delay:0.5, ease: "easeInOut" }}>
            <div className="space-y-3.5 w-full">
                {/* Route from and to */}
                <div className="space-y-0">
                    <div className="w-full flex items-center justify-between">
                        <p className="text-xs text-neutral-400 font-normal">From</p>
                        <p className="text-xs text-neutral-400 font-normal">To</p>
                    </div>

                    {/* From */}

                    <div className="w-full flex items-center justify-between gap-x-3">
                        <h1 className="text-xl text-neutral-600 font-semibold">
                            { from }
                        </h1>

                        {/* Travel Time */}

                        <div className="flex-1 border-dashed border border-neutral-400 relative">
                            <p className="absolute w-fit px-3 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 rounded-full flex items-center justify-center text-sm text-neutral-500 font-normal border-dashed border border-neutral-500">
                                { travelTime }
                            </p>
                        </div>

                        {/* To */}

                        <h1 className="text-xl text-neutral-600 font-semibold">
                            { to }
                        </h1>
                    </div>

                </div>

                {/* Facilities provided */}
                <div className="w-full flex items-center gap-3 flex-wrap">

                    {/* Water */}
                    <div className="flex items-center gap-x-1">
                        <IoFastFoodSharp className="w-3 h-3 text-neutral-500" />
                        <p className="text-xs text-neutral-600 font-normal">
                            Fastfood
                        </p>
                    </div>

                    {/* Internet */}
                    <div className="flex items-center gap-x-1">
                        <IoWifi className="w-3 h-3 text-neutral-500" />
                        <p className="text-xs text-neutral-600 font-normal">
                            Internet
                        </p>
                    </div>

                    {/* Charger */}
                    <div className="flex items-center gap-x-1">
                        <GiCharging className="w-3 h-3 text-neutral-500" />
                        <p className="text-xs text-neutral-600 font-normal">
                            Charging ports
                        </p>
                    </div>

                    {/* Newspaper */}
                    <div className="flex items-center gap-x-1">
                        <IoNewspaperOutline className="w-3 h-3 text-neutral-500" />
                        <p className="text-xs text-neutral-600 font-normal">
                            Newpapers
                        </p>
                    </div>
                </div>

            </div>

            <div className="w-full flex intems-center justify-between">

                {/* Price */}
                <h1 className="text-xl text-neutral-700 font-semibold">
                    Rs. { price }
                </h1>

                {/* Button */}
                <Link to={"/ticket/detail"} className="w-fit px-5 py-1.5 hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary text-sm font-normal text-neutral-50 flex items-center justify-center gap-x-2 ease-in-out duration-300">
                    Book Seat
                </Link>
            </div>

        </motion.div>
    );
}

export default MostSearchCont