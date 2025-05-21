import { div } from "framer-motion/client";

import { GoCheckbox } from "react-icons/go"
import { AiOutlineCloseSquare } from "react-icons/ai"

function Amenities() {
    return (
        <div className="col-span-3 w-full ">
            <div className="w-full space-y-3">
                <h1 className="text-lg text-neutral-600 font-medium text-start">
                    Bus Amenities
                </h1>

                <div className="w-full grid grid-cols-2 gap-3">
                    {/* Left Side Amenities */}
                    <div className="col-span-1 w-full space-y-1">
                        <div className="flex items-center gap-x-2 w-full">
                            <GoCheckbox className="w-5 h-5 text-green-500" />

                            <p className="text-base text-neutral-700 font-normal">
                                Internet
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <GoCheckbox className="w-5 h-5 text-green-500" />

                            <p className="text-base text-neutral-700 font-normal">
                                TV
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <GoCheckbox className="w-5 h-5 text-green-500" />

                            <p className="text-base text-neutral-700 font-normal">
                                AC
                            </p>
                        </div>
 
                        <div className="flex items-center gap-x-2 w-full">
                            <GoCheckbox className="w-5 h-5 text-green-500" />

                            <p className="text-base text-neutral-700 font-normal">
                                Water Bottles
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <GoCheckbox className="w-5 h-5 text-green-500" />

                            <p className="text-base text-neutral-700 font-normal">
                                Footrest
                            </p>
                        </div>
   
                        <div className="flex items-center gap-x-2 w-full">
                            <AiOutlineCloseSquare className="w-5 h-5 text-red-500" />

                            <p className="text-base text-neutral-700 font-normal">
                                Snacks
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <AiOutlineCloseSquare className="w-5 h-5 text-red-500" />

                            <p className="text-base text-neutral-700 font-normal">
                                Sleeper Seat
                            </p>
                        </div>
                    </div>

                    {/* Right side Amenities */}
                    <div className="w-full col-span-1">
                        <div className="flex items-center gap-x-2 w-full">
                            <GoCheckbox className="w-5 h-5 text-green-500" />

                            <p className="text-base text-neutral-700 font-normal">
                                Luggage Storage
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <AiOutlineCloseSquare className="w-5 h-5 text-red-500" />

                            <p className="text-base text-neutral-700 font-normal">
                                Curtains
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-x-2 w-full">
                            <AiOutlineCloseSquare className="w-5 h-5 text-red-500" />

                            <p className="text-base text-neutral-700 font-normal">
                                Pet carriers
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <GoCheckbox className="w-5 h-5 text-green-500" />

                            <p className="text-base text-neutral-700 font-normal">
                                Restroom
                            </p>
                        </div>


                        <div className="flex items-center gap-x-2 w-full">
                            <GoCheckbox className="w-5 h-5 text-green-500" />

                            <p className="text-base text-neutral-700 font-normal">
                                Emergency exit
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <GoCheckbox className="w-5 h-5 text-green-500" />

                            <p className="text-base text-neutral-700 font-normal">
                                CCTV surveillance
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Amenities