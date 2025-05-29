
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import busSeatData from "../../../constant/busSeatData/BusSeatData"
import ErrorMessage from "../../../components/alertSection/errorMsg/ErrorMessage";

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
                if(prevSelectedSeats.length >= 8) {
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

    // Seat styling based on status
    const getSeatStyling = (seat) => {
        if(seat.status === 'booked') {
            return 'text-primary cursor-not-allowed bg-primary/10 border-2 border-primary/30'; // Already Booked seats
        }
        if(selectedSeats.includes(seat.id)) {
            return 'text-green-600 cursor-pointer bg-green-100 border-2 border-green-400 shadow-md transform scale-105' // Selected seats
        }
        return 'text-neutral-500 cursor-pointer bg-neutral-50 border-2 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300 transition-all duration-200'
    }

    return(
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-10" >
            {/* Seat Layout */}
            <div className="lg:col-span-3 w-full flex items-center justify-center shadow-sm rounded-xl p-3 sm:p-4 lg:p-5 border border-neutral-200 order-2 lg:order-1">
                <div className="w-full space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-7">
                    <p className="text-sm sm:text-base text-neutral-600 font-medium text-center px-2" >
                        Click on the available seats to book.
                    </p>

                    {/* Seat Layout */}
                    <div className="w-full flex items-stretch gap-x-2 sm:gap-x-3 lg:gap-x-4">
                        <div className="w-6 sm:w-8 lg:w-10 h-fit flex justify-center">
                            <GiSteeringWheel className="text-xl sm:text-2xl lg:text-3xl mt-6 sm:mt-8 lg:mt-10 text-primary -rotate-90" />
                        </div>

                        {/* Seat row */}
                        <div className='flex flex-col items-center border-l-2 border-dashed border-neutral-300 pl-3 sm:pl-4 lg:pl-6'>
                            <div className='flex-1 space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-6'>
                                {/* First row */}
                                <div className='w-full h-auto grid grid-cols-9 gap-x-1 sm:gap-x-2 lg:gap-x-3 xl:gap-x-4 justify-center' >
                                    {busSeatData.slice(0,9).map((seat) => (
                                        <div key={seat.id} 
                                            className={`flex flex-col items-center justify-center p-1 sm:p-2 rounded-md sm:rounded-lg min-w-[32px] sm:min-w-[40px] lg:min-w-[48px] xl:min-w-[56px] h-[32px] sm:h-[40px] lg:h-[48px] xl:h-[56px] ${getSeatStyling(seat)}`}
                                            onClick={() => handleSeatSelection(seat.id)}>
                                                <LuArmchair className="text-sm sm:text-lg lg:text-xl xl:text-2xl -rotate-90 mb-0.5 sm:mb-1" />
                                                <span className="text-[10px] sm:text-xs lg:text-sm font-bold leading-none">
                                                    {seat.id}
                                                </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Second row */}
                                <div className='w-full h-auto grid grid-cols-9 gap-x-1 sm:gap-x-2 lg:gap-x-3 xl:gap-x-4 justify-center' >
                                    {busSeatData.slice(9,18).map((seat) => (
                                        <div key={seat.id} 
                                            className={`flex flex-col items-center justify-center p-1 sm:p-2 rounded-md sm:rounded-lg min-w-[32px] sm:min-w-[40px] lg:min-w-[48px] xl:min-w-[56px] h-[32px] sm:h-[40px] lg:h-[48px] xl:h-[56px] ${getSeatStyling(seat)}`}
                                            onClick={() => handleSeatSelection(seat.id)}>
                                                <LuArmchair className="text-sm sm:text-lg lg:text-xl xl:text-2xl -rotate-90 mb-0.5 sm:mb-1" />
                                                <span className="text-[10px] sm:text-xs lg:text-sm font-bold leading-none">
                                                    {seat.id}
                                                </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Third row */}
                                <div className='w-full h-auto grid grid-cols-10 gap-x-1 sm:gap-x-2 lg:gap-x-3 xl:gap-x-4 justify-center' >
                                    <div className="col-span-9" ></div>
                                    {busSeatData.slice(18,19).map((seat) => (
                                        <div key={seat.id} 
                                            className={`flex flex-col items-center justify-center p-1 sm:p-2 rounded-md sm:rounded-lg min-w-[32px] sm:min-w-[40px] lg:min-w-[48px] xl:min-w-[56px] h-[32px] sm:h-[40px] lg:h-[48px] xl:h-[56px] ${getSeatStyling(seat)}`}
                                            onClick={() => handleSeatSelection(seat.id)}>
                                                <LuArmchair className="text-sm sm:text-lg lg:text-xl xl:text-2xl -rotate-90 mb-0.5 sm:mb-1" />
                                                <span className="text-[10px] sm:text-xs lg:text-sm font-bold leading-none">
                                                    {seat.id}
                                                </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Fourth row */}
                                <div className='w-full h-auto grid grid-cols-9 gap-x-1 sm:gap-x-2 lg:gap-x-3 xl:gap-x-4 justify-center' >
                                    {busSeatData.slice(19,28).map((seat) => (
                                        <div key={seat.id} 
                                            className={`flex flex-col items-center justify-center p-1 sm:p-2 rounded-md sm:rounded-lg min-w-[32px] sm:min-w-[40px] lg:min-w-[48px] xl:min-w-[56px] h-[32px] sm:h-[40px] lg:h-[48px] xl:h-[56px] ${getSeatStyling(seat)}`}
                                            onClick={() => handleSeatSelection(seat.id)}>
                                                <LuArmchair className="text-sm sm:text-lg lg:text-xl xl:text-2xl -rotate-90 mb-0.5 sm:mb-1" />
                                                <span className="text-[10px] sm:text-xs lg:text-sm font-bold leading-none">
                                                    {seat.id}
                                                </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Fifth row */}
                                <div className='w-full h-auto grid grid-cols-9 gap-x-1 sm:gap-x-2 lg:gap-x-3 xl:gap-x-4 justify-center' >
                                    {busSeatData.slice(28,37).map((seat) => (
                                        <div key={seat.id} 
                                            className={`flex flex-col items-center justify-center p-1 sm:p-2 rounded-md sm:rounded-lg min-w-[32px] sm:min-w-[40px] lg:min-w-[48px] xl:min-w-[56px] h-[32px] sm:h-[40px] lg:h-[48px] xl:h-[56px] ${getSeatStyling(seat)}`}
                                            onClick={() => handleSeatSelection(seat.id)}>
                                                <LuArmchair className="text-sm sm:text-lg lg:text-xl xl:text-2xl -rotate-90 mb-0.5 sm:mb-1" />
                                                <span className="text-[10px] sm:text-xs lg:text-sm font-bold leading-none">
                                                    {seat.id}
                                                </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Booking seat info */}
                    <div className="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 xl:gap-6 border-t border-neutral-200 pt-3 sm:pt-4 lg:pt-5 xl:pt-6">
                        <div className="flex items-center gap-x-1.5 sm:gap-x-2">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-neutral-50 border-2 border-neutral-200 rounded-md sm:rounded-lg flex items-center justify-center">
                                <LuArmchair className="text-xs sm:text-sm text-neutral-500 -rotate-90" />
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                                Available
                            </p>
                        </div>

                        <div className="flex items-center gap-x-1.5 sm:gap-x-2">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 border-2 border-primary/30 rounded-md sm:rounded-lg flex items-center justify-center">
                                <LuArmchair className="text-xs sm:text-sm text-primary -rotate-90" />
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                                Booked
                            </p>
                        </div>

                        <div className="flex items-center gap-x-1.5 sm:gap-x-2">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 border-2 border-green-400 rounded-md sm:rounded-lg flex items-center justify-center">
                                <LuArmchair className="text-xs sm:text-sm text-green-600 -rotate-90" />
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                                Selected
                            </p>
                        </div>

                        <div className="flex items-center gap-x-1.5 sm:gap-x-2">
                            <RiMoneyRupeeCircleFill className="text-base sm:text-lg lg:text-xl text-neutral-500 " />
                            <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                                Rs. 1600
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Select seat panel */}
            <div className="lg:col-span-2 w-full h-fit sticky top-4 space-y-4 sm:space-y-5 lg:space-y-6 bg-neutral-50 rounded-xl py-4 sm:py-5 lg:py-6 px-4 sm:px-5 lg:px-6 border border-neutral-200 shadow-lg order-1 lg:order-2">

                <div className="w-full space-y-2 sm:space-y-3">
                    {/* Destination and Change route */}
                    <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                        <h1 className="text-sm sm:text-base lg:text-lg text-neutral-600 font-medium">
                            Your Destination
                        </h1>

                        <Link to={"/ticket"} className="text-xs sm:text-sm text-primary font-normal w-fit hover:underline" >
                            Change Route
                        </Link>
                    </div>

                    {/* From and To  */}
                    <div className="space-y-1 w-full bg-white rounded-lg p-3 border border-neutral-200" >
                        <div className="w-full flex items-center justify-between gap-x-2 sm:gap-x-3 lg:gap-x-5">
                            <p className="text-xs sm:text-sm text-neutral-400 font-normal">
                                From 
                                <span className="text-xs block sm:inline">
                                    (Indus Park)
                                </span>
                            </p>

                            <p className="text-xs sm:text-sm text-neutral-400 font-normal">
                                To 
                                <span className="text-xs block sm:inline">
                                    (Green Layout)
                                </span>
                            </p>
                        </div>

                        <div className="w-full flex items-center justify-between gap-x-1 sm:gap-x-2 lg:gap-x-4">
                            <h1 className="text-xs sm:text-sm text-neutral-600 font-normal flex-1">
                                Delhi <span className="font-medium block sm:inline"> (08:00 AM) </span>
                            </h1>

                            <div className="flex-1 max-w-[60px] sm:max-w-none border-dashed border border-neutral-300" />

                            <h1 className="text-xs sm:text-sm text-neutral-600 font-normal flex-1 text-right">
                                Lucknow <span className="font-medium block sm:inline"> (08:00 AM) </span>
                            </h1>    
                        </div>
                    </div>
                </div>

                <div className="w-full space-y-2 sm:space-y-3">
                    {/* Selected seats heading */}
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-sm sm:text-base lg:text-lg text-neutral-600 font-medium">
                            Selected Seats
                        </h1>

                        <div className="bg-primary/20 rounded-md sm:rounded-lg py-0.5 px-1.5 text-xs text-neutral-600 font-normal uppercase">
                            Non-refundable
                        </div>
                    </div>

                    {/* Selected seat list */}
                    <div className="bg-white rounded-lg p-3 border border-neutral-200 min-h-[60px] flex items-center">
                        {
                            selectedSeats.length > 0 ?
                                <div className="w-full flex flex-wrap items-center gap-1.5 sm:gap-2 lg:gap-3">
                                    {
                                        selectedSeats.map((seatId) => {
                                            return (
                                                <div key={seatId} className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-green-100 border-2 border-green-400 rounded-md sm:rounded-lg flex items-center justify-center text-xs sm:text-sm lg:text-base text-green-700 font-semibold">
                                                    {seatId}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                :
                                <div className="w-full flex items-center justify-center">
                                    <p className="text-xs sm:text-sm text-neutral-400 font-normal">No seat selected</p>
                                </div>
                        }
                    </div>
                </div>

                {/* Amount/Fair detail section */}
                <div className="w-full space-y-2 sm:space-y-3">
                    <h1 className="text-sm sm:text-base lg:text-lg text-neutral-600 font-medium">
                        Fair Details
                    </h1>

                    <div className="bg-white rounded-lg p-3 border border-neutral-200 space-y-2">
                        {/* Single seat (Fair amount) Amount */}
                        <div className="w-full flex items-center justify-between border-dashed border-l-[1.5px] border-neutral-400 pl-2">
                            <h3 className="text-xs sm:text-sm text-neutral-500 font-medium">
                                Fair per seat:
                            </h3>

                            <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                                Rs. 800
                            </p>
                        </div>

                        {/* Number of seats */}
                        <div className="w-full flex items-center justify-between border-dashed border-l-[1.5px] border-neutral-400 pl-2">
                            <h3 className="text-xs sm:text-sm text-neutral-500 font-medium">
                                Seats selected:
                            </h3>

                            <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                                {selectedSeats.length}
                            </p>
                        </div>

                        {/* Divider */}
                        <hr className="border-neutral-200" />

                        {/* Total amount section */}
                        <div className="flex items-center justify-between gap-x-2 sm:gap-x-4">
                            <div className="flex gap-y-0.5 flex-col">
                                <h3 className="text-xs sm:text-sm lg:text-base text-neutral-600 font-semibold">
                                    Total Amount:
                                </h3>

                                <span className="text-xs text-neutral-400 font-normal">
                                    (Including all taxes)
                                </span>
                            </div>

                            {/* Calculating price */}
                            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-bold">
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
                </div>

                {/* Checkout Button */}
                <div className="w-full pt-2">
                    {
                        selectedSeats.length > 0 ?
                            <Link to={"/ticket/checkout"} className="w-full bg-primary hover:bg-primary/90 text-xs sm:text-sm text-neutral-50 font-medium py-3 sm:py-3.5 flex items-center justify-center uppercase rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                                Proceed to Checkout
                            </Link> 

                            :

                            <div className="w-full space-y-1">
                                <button disabled className="w-full bg-neutral-300 text-xs sm:text-sm text-neutral-500 font-medium py-3 sm:py-3.5 flex items-center justify-center uppercase rounded-lg cursor-not-allowed">
                                    Proceed to Checkout
                                </button>
                                <small className="text-xs text-red-500 font-medium px-1 text-center block">
                                    Select any seat to proceed to checkout
                                </small>
                            </div>
                    }
                </div>

                {/* Additional Info */}
                <div className="w-full pt-2 border-t border-neutral-200">
                    <div className="flex items-center justify-between text-xs text-neutral-400">
                        <span>Booking ID: #BK{Date.now().toString().slice(-6)}</span>
                        <span>Max 8 seats</span>
                    </div>
                </div>
            </div>

            {/* Error if seats more than 8 */}
            {showError && <ErrorMessage message={"Please contact our support team to book more than 8 seats"} />}

        </div>
    );
};

export default BusSeat