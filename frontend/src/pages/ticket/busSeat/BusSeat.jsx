import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import busSeatData from "../../../constant/busSeatData/BusSeatData"

import { GiSteeringWheel } from "react-icons/gi";
import { LuArmchair } from "react-icons/lu";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

function BusSeat() {

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showError, setShowError] = useState(false);

    const handleSeatSelection = (seatId) => {
        // Ignore the seat that is booked
        const curSeat = busSeatData.find((seat) => seat.id === seatId);
        if(curSeat.status === 'booked') {
            return;
        }

        // If not seat booked
        setSelectedSeats((prevSelectedSeats) => {
            if(prevSelectedSeats.includes(seatId)) {
                return prevSelectedSeats.filter((seat) => seat !== seatId);
            }
            else {
                if(prevSelectedSeats.length > 8) {
                    setShowError(true);
                    return prevSelectedSeats;
                }
                else {
                    return [...prevSelectedSeats, seatId];
                }
            }
        })
    }

    // hiding the error message after 10 seconds
    useEffect(() => {
        if(showError) {
            const timer = setTimeout(() => {
                setShowError(false);
            }, 10000); // 10 sec

            return () => clearTimeout(timer);
        }
    }, [showError] );

    // Seat Name and details
    const getSeatName = (seat) => {
        if(seat.status === 'booked') {
            return 'text-primary cursor-not-allowed'; // Already Booked seats
        }
        if(selectedSeats.includes(seat.id)) {
            return 'text-green-600 cursor-pointer' // Selected seats
        }
        return 'text-neutral-500 cursor-pointer'
    }

    return(
        <div className="w-full grid grid-cols-5 gap-10" >
            {/* Seat Layout */}
            <div className="col-span-3 w-full flex items-center justify-center shadow-sm rounded-xl p-4 border border-neutral-200">
                <div className="w-full space-y-7">
                    <p className="text-base text-neutral-600 font-medium text-center" >
                        Click on the available seats to book.
                    </p>

                    {/* Seat Layout */}
                    <div className="w-full flex items-stretch gap-x-1.5">
                        <div className="w-10 h-fit">
                            <GiSteeringWheel className="text-3xl mt-7 text-primary -rotate-90" />
                        </div>

                        {/* Seat row */}
                        <div className='flex flex-col items-center border-l-2 border-dashed border-neutral-300 pl-7'>
                            <div className='flex-1 space-y-5'>
                                {/* First row */}
                                <div className='w-full h-auto grid grid-cols-9 gap-x-5 justify-end' >
                                    {busSeatData.slice(0,9).map((seat) => (
                                        <div key={seat.id} 
                                            className="flex items-center gap-x-0" 
                                            onClick={() => handleSeatSelection(seat.id)}>
                                                <h6 className="text-base text-neutral-600 font-bold">
                                                    {seat.id}
                                                </h6>
                                                <LuArmchair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>

                                {/* Second row */}
                                <div className='w-full h-auto grid grid-cols-9 gap-x-5 justify-end' >
                                    {busSeatData.slice(9,18).map((seat) => (
                                        <div key={seat.id} 
                                            className="flex items-center gap-x-0" 
                                            onClick={() => handleSeatSelection(seat.id)}>
                                                <h6 className="text-base text-neutral-600 font-bold">
                                                    {seat.id}
                                                </h6>
                                                <LuArmchair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>

                                {/* Third row */}
                                <div className='w-full h-auto grid grid-cols-10 gap-x-5 justify-end' >
                                    <div className="col-span-9" ></div>
                                    {busSeatData.slice(18,19).map((seat) => (
                                        <div key={seat.id} 
                                            className="flex items-center gap-x-0" 
                                            onClick={() => handleSeatSelection(seat.id)}>
                                                <h6 className="text-base text-neutral-600 font-bold">
                                                    {seat.id}
                                                </h6>
                                                <LuArmchair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>

                                {/* Forth row */}
                                <div className='w-full h-auto grid grid-cols-9 gap-x-5 justify-end' >
                                    {busSeatData.slice(19,28).map((seat) => (
                                        <div key={seat.id} 
                                            className="flex items-center gap-x-0" 
                                            onClick={() => handleSeatSelection(seat.id)}>
                                                <h6 className="text-base text-neutral-600 font-bold">
                                                    {seat.id}
                                                </h6>
                                                <LuArmchair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>

                                {/* Fifth row */}
                                <div className='w-full h-auto grid grid-cols-9 gap-x-5 justify-end' >
                                    {busSeatData.slice(28,37).map((seat) => (
                                        <div key={seat.id} 
                                            className="flex items-center gap-x-0" 
                                            onClick={() => handleSeatSelection(seat.id)}>
                                                <h6 className="text-base text-neutral-600 font-bold">
                                                    {seat.id}
                                                </h6>
                                                <LuArmchair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Booking info */}
                    <div className="w-full flex items-center justify-center gap-6 border-t border-neutral-200 pt-5">
                        <div className="flex items-center gap-x-2">
                            <LuArmchair className="text-xl text-neutral-500 -rotate-90" />
                            <p className="text-sm text-neutral-500 font-medium">
                                Available
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <LuArmchair className="text-xl text-primary-500 -rotate-90" />
                            <p className="text-sm text-neutral-500 font-medium">
                                Booked
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <LuArmchair className="text-xl text-green-500 -rotate-90" />
                            <p className="text-sm text-neutral-500 font-medium">
                                Selected
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <RiMoneyRupeeCircleFill className="text-xl text-neutral-500 " />
                            <p className="text-sm text-neutral-500 font-medium">
                                Rs. 1600
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Select seat */}
            <div className="col-span-2 w-full space-y-5 bg-neutral-50 rounded-xl py-4 px-6 border border-neutral-200 shadow-sm">

                <div className="w-full space-y-2">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-lg text-neutral-600 font">
                            Your Destination
                        </h1>

                        <Link to={"/ticket"} className="text-sm text-primary font-normal" >
                            Change Route
                        </Link>
                    </div>
                </div>

                <div className="w-full space-y-2">
                    Hey
                </div>

                <div className="w-full space-y-2">
                    Hey
                </div>

                <div className="w-full flex items-center justify-center">
                    Hey
                </div>
            </div>

            {/* Error if seats more than 8 */}

        </div>
    );
};

export default BusSeat