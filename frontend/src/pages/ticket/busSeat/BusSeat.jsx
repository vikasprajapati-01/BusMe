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

                    {/* Booking seat info */}
                    <div className="w-full flex items-center justify-center gap-6 border-t border-neutral-200 pt-5">
                        <div className="flex items-center gap-x-2">
                            <LuArmchair className="text-xl text-neutral-600 -rotate-90" />
                            <p className="text-sm text-neutral-500 font-medium">
                                Available
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <LuArmchair className="text-xl text-primary -rotate-90" />
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
                    {/* Destination and Change route */}
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-lg text-neutral-600 font">
                            Your Destination
                        </h1>

                        <Link to={"/ticket"} className="text-sm text-primary font-normal" >
                            Change Route
                        </Link>
                    </div>

                    {/* From and To  */}
                    <div className="space-y-0.5 w-full" >
                        <div className="w-full flex items-center justify-between gap-x-5">
                            <p className="text-sm text-neutral-400 front-normal">
                                From 
                                <span className="text-xs">
                                    (Indus Park)
                                </span>
                            </p>

                            <p className="text-sm text-neutral-400 front-normal">
                                To 
                                <span className="text-xs">
                                    (Green Layout)
                                </span>
                            </p>
                        </div>

                        <div className="w-full flex items-center justify-bewteen gap-x-4">
                            <h1 className="text-sm text-neutral-600 front-normal">
                                Delhi <span className="font-medium"> (08:00 AM) </span>
                            </h1>

                            <div className="flex-1 border-dashed border border-neutral-300" />

                            <h1 className="text-sm text-neutral-600 front-normal">
                                Lucknow <span className="font-medium"> (08:00 AM) </span>
                            </h1>    
                        </div>
                    </div>
                </div>

                <div className="w-full space-y-2">
                    {/* Selected seats heading */}
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-lg text-neutral-600 font-medium">
                            Selected Seats
                        </h1>

                        <div className="bg-primary" />

                        <div className="bg-primary/20 rounded-lg py-0.5 px-1.5 text-xs text-neutral-600 font-normal uppercase">
                            Non-refundable
                        </div>
                    </div>

                    {/* Selected seat list */}
                    {
                        selectedSeats.length > 0 ?
                            <div className="w-full flex items-center gap-x-3 ">
                                {
                                    selectedSeats.map((seatId) => {
                                        return (
                                            <div key={seatId} className="w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold">
                                                {seatId}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            :
                            <div className="w-full flex items-center gap-x-3 ">
                                <p className="text-sm text-neutral-500 font-normal">No seat selected</p>
                            </div>
                    }
                </div>

                <div className="w-full space-y-2">
                    <h1 className="text-lg text-neutral-600 font-medium">
                        Fair Details
                    </h1>

                    <div className="w-full flex items-center justify-between border-dashed border-l-[1.5px] border-neutral-400 pl-2">
                        <h3 className="text-sm text-neutral-500 font-medium">
                            Fair:
                        </h3>

                        <p className="text-sm text-neutral-500 font-medium">
                            Rs. 800
                        </p>
                    </div>

                    <div className="flex items-center justify-between gap-x-4">
                        <div className="flex gap-y-0.5 flex-col">
                            <h3 className="text-base text-neutral-500 font-medium">
                                Total Amount:
                            </h3>

                            <span className="text-xs text-neutral-500 font-normal">
                                (Including all taxes)
                            </span>
                        </div>

                        {/* Calculating price */}
                        <p className="text-base text-neutral-600 font-semibold">
                            Rs. {" "}
                            {
                                selectedSeats.reduce((total, seatId) => {
                                    const seat = busSeatData.find(busSeat => busSeat.id === seatId);
                                    return total + (seat ? seat.price : 0);
                                }, 0)
                            }
                        </p>

                    </div>

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