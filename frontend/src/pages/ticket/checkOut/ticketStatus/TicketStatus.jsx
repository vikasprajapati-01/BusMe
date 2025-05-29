


import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa6";

function TicketStatus() {
  return (
    <div className="w-full lg:sticky lg:top-20 space-y-5 sm:space-y-6 lg:space-y-7">

      <div className="w-full bg-neutral-50 rounded-lg sm:rounded-xl py-4 sm:py-5 lg:py-6 px-4 sm:px-5 lg:px-6 border border-neutral-200 shadow-sm space-y-4 sm:space-y-5">

        <h1 className="text-base sm:text-lg lg:text-xl text-neutral-700 font-bold text-center border-b border-neutral-200 pb-3 sm:pb-4">
            Ticket Status
        </h1>

        <div className="space-y-4 sm:space-y-5">
            {/* Destination Section */}
            <div className="space-y-2 sm:space-y-3 w-full">
                <h1 className="text-sm sm:text-base lg:text-lg text-neutral-700 font-medium">
                    Your Destination
                </h1>
                
                {/* From and To */}
                <div className="space-y-1 sm:space-y-1.5 w-full bg-white rounded-lg p-3 sm:p-4 border border-neutral-200" >
                    {/* From and to words */}
                    <div className="w-full flex items-center justify-between gap-x-3 sm:gap-x-5">
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

                    {/* Location of from and to */}
                    <div className="w-full flex items-center justify-between gap-x-2 sm:gap-x-4">
                        <h1 className="text-xs sm:text-sm text-neutral-600 font-normal flex-1">
                            Delhi <span className="font-medium block sm:inline"> (08:00 AM) </span>
                        </h1>

                        <div className="flex-1 max-w-[40px] sm:max-w-none border-dashed border border-neutral-300" />

                        <h1 className="text-xs sm:text-sm text-neutral-600 font-normal flex-1 text-right">
                            Lucknow <span className="font-medium block sm:inline"> (08:00 AM) </span>
                        </h1>    
                    </div>

                    {/* Bus Number */}
                    <div className="w-full flex items-center justify-between gap-x-4 pt-2 border-t border-neutral-200">
                        <h1 className="text-xs sm:text-sm text-neutral-600 font-normal">
                            Bus No.:
                        </h1>

                        <h1 className="text-sm sm:text-base text-neutral-700 font-medium">
                            (HY - 1234)
                        </h1>
                    </div>
                </div>
            </div>

            {/* Seat details section */}
            <div className="space-y-2 sm:space-y-3 w-full">
                <h1 className="text-sm sm:text-base lg:text-lg text-neutral-700 font-medium">
                    Your Seats
                </h1>

                <div className="w-full bg-white rounded-lg p-3 sm:p-4 border border-neutral-200">
                    <div className="w-full flex flex-wrap items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-green-100 border-2 border-green-400 rounded-md sm:rounded-lg flex items-center justify-center text-xs sm:text-sm lg:text-base text-green-700 font-semibold">
                            B8
                        </div>
                        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-green-100 border-2 border-green-400 rounded-md sm:rounded-lg flex items-center justify-center text-xs sm:text-sm lg:text-base text-green-700 font-semibold">
                            B9
                        </div>
                        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-green-100 border-2 border-green-400 rounded-md sm:rounded-lg flex items-center justify-center text-xs sm:text-sm lg:text-base text-green-700 font-semibold">
                            B10
                        </div>
                        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-green-100 border-2 border-green-400 rounded-md sm:rounded-lg flex items-center justify-center text-xs sm:text-sm lg:text-base text-green-700 font-semibold">
                            19
                        </div>
                    </div>
                    
                    {/* Seat count */}
                    <div className="flex items-center justify-between text-xs text-neutral-400 pt-2 mt-2 border-t border-neutral-200">
                        <span>Selected seats</span>
                        <span>4 seats</span>
                    </div>
                </div>
            </div>

            {/* Price details section */}
            <div className="space-y-2 sm:space-y-3 w-full">
                <h1 className="text-sm sm:text-base lg:text-lg text-neutral-700 font-medium">
                    Total Amount
                </h1>

                <div className="w-full bg-white rounded-lg p-3 sm:p-4 border border-neutral-200">
                    <div className="space-y-2">
                        {/* Breakdown */}
                        <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-500">
                            <span>Base fare (4 seats)</span>
                            <span>Rs. 1600</span>
                        </div>
                        <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-500">
                            <span>Taxes & fees</span>
                            <span>Rs. 200</span>
                        </div>
                        
                        <hr className="border-neutral-200" />
                        
                        {/* Total */}
                        <div className="flex items-center justify-between gap-x-4">
                            <div className="flex gap-y-0.5 flex-col">
                                <h3 className="text-sm sm:text-base text-neutral-600 font-semibold">
                                    Total Amount:
                                </h3>

                                <span className="text-xs text-neutral-400 font-normal">
                                    (Including all taxes)
                                </span>
                            </div>

                            {/* Total price */}
                            <p className="text-base sm:text-lg lg:text-xl text-neutral-700 font-bold">
                                Rs. 1800
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* Payment Button */}
      <div className="w-full px-0 sm:px-1 lg:px-1.5">
        <Link 
            to={"/ticket/payment"} 
            className="
                w-full bg-primary hover:bg-primary/90 
                text-xs sm:text-sm lg:text-base 
                text-neutral-50 font-medium 
                py-3 sm:py-3.5 lg:py-4 
                flex items-center justify-center 
                uppercase rounded-lg 
                transition-all duration-200 
                shadow-md hover:shadow-lg
                active:scale-95 transform
            "
        >
            <span className="flex items-center gap-2">
                Proceed to Pay
                <FaArrowRight className="text-xs sm:text-sm lg:text-base" />
            </span>
        </Link> 
      </div>

    </div>
  );
}

export default TicketStatus;