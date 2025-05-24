import { div } from "framer-motion/client";

import { FaBus, FaCircleCheck, FaPhone } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { BsQrCode } from "react-icons/bs"

function PassengerInvoice() {
    return (
        <div className="w-full col-span-4 rounded-3xl relative">
            
            {/* Top section */}
            <div className="w-full flex items-center justify-between bg-primary px-6 py-3 rounded-tl-md">
                <div className="flex items-center gap-x-3">

                    <FaBus className="w-auto h-8 object-cover object-center" />

                    <h1 className="text-xl text-neutral-50 font-bold uppercase tracking-wider pt-1">
                        Gold Express
                    </h1>

                </div>

                <div className="flex- items-center gap-x-2">
                    <p className="text-xl text-neutral-50 font-bold">
                        <span className="text-lg">
                            (Bus No.) HY - 1234
                        </span>
                    </p>
                </div>
            </div>

            <div className="w-full grid grid-cols-5 gap-8 items-center px-5 py-6 mb-7">

                {/* Passenger and route detail */}
                <div className="col-span-4 space-y-3.5">

                    {/* Date, Bill No and seat */}
                    <div className="w-full flex items-center justify-between border-dashed border-b-2 border-neutral-200 pb-3">
                        <p className="text-base text-neutral-500 font-normal">
                            Bill No.: 4321
                        </p>

                        <p className="text-base text-neutral-500 font-normal">
                            Rs. 800
                            <span className="text-xs">
                                /seat
                            </span>
                        </p>

                        <p className="text-base text-neutral-500 font-normal">
                            Date: 30-Feb-1999
                        </p>
                    </div>

                    {/* Passenger detail */}
                    <div className="w-full flex items-center justify-between">
                        <div className="space-y-1.5">
                            <p className="text-base text-neutral-600 font-normal">
                                Name of Passenger: 
                                <span className="font-medium">
                                    Naruto Uzumaki
                                </span>
                            </p>

                            <p className="text-base text-neutral-600 font-normal">
                                Seats: 
                                <span className="font-medium">
                                    B7, B8, B9, 19
                                </span>
                            </p>

                            <p className="text-base text-neutral-600 font-normal">
                                Passengers: 
                                <span className="font-medium">
                                    04
                                </span>
                            </p>

                            <p className="text-base text-neutral-600 font-normal">
                                Pickup Station: 
                                <span className="font-medium">
                                    Indus Park
                                </span>
                            </p>
                        </div>

                        <div className="space-y-4 flex items-center justify-center flex-col">
                            
                            {/* Total amount */}
                            <div className="space-y-1 text-center">
                                <p className="text-base text-neutral-600 font-normal">
                                    Total Amount: 
                                    <h1 className="text-xl text-neutral-600 font-bold">
                                        Rs. 1800
                                    </h1>
                                </p>
                            </div>

                            {/* Paid section */}
                            <div className="w-fit px-3 py-1 rounded-full bg-green-100 border border-green-600 text-green-700 text-sm font-medium flex items-center justify-center gap-2">
                                <FaCircleCheck size={20} />
                                <span>Bill Paid</span>
                            </div>

                            {/* <div className="w-fit px-3 py-1 rounded-full bg-red-100 border border-red-600 text-red-700 text-sm font-medium flex items-center justify-center gap-2">
                                <IoCloseCircle size={20} />
                                <span>Pending</span>
                            </div> */}

                        </div>
                    </div>

                    {/* Route detail */}
                    <div className="w-full flex items-center justify-between border-dashed border-t-2 border-neutral-200 pt-3">
                        <p className="text-base text-neutral-600 font-normal">
                            Delhi
                            <span className="text-neutral-400 px-2">
                                ------
                            </span>
                            Agra
                        </p>

                        <p className="text-base text-neutral-600 font-normal">
                            Depart at 08:30 AM
                        </p>

                        <p className="text-base text-neutral-600 font-normal">
                            Arrive at 11:45 AM
                        </p>
                    </div>

                </div>

                <div className="col-span-1 border border-neutral-200 rounded-sm shadow-sm p-1">
                    <BsQrCode className="w-full h-fit aspect-square object-cover object-center rounded-sm" />
                </div>

            </div>

            {/* Left bottom section */}
            <div className="w-full bg-primary absolute bottom-0 left-0 rounded-bl-md flex items-center justify-between px-5 py-1.5">
                <p className="text-xs text-neutral-100 font-light">
                    Contact our support team for ticket updates or technical help. 
                </p>

                <div className="flex items-center gap-x-2">
                    <FaPhone className="w-3 h-3 text-neutral-100" />
                    <p className="text-sm text-neutral-100 font-light">
                        +91-1122334455, +91-6677889900
                    </p>
                </div>
            </div>

        </div>
    );
}

export default PassengerInvoice