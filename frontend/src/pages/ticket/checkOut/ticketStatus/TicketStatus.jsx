
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa6";

function TicketStatus() {
  return (
    <div className="w-full col-span-3 sticky top-20 space-y-7">

      <div className="w-full bg-neutral-50 rounded-xl py-4 px-6 border border-neutral-200 shadow-sm space-y-5">

        <h1 className="text-lg text-neutral-700 font-bold text-center border-b border-neutral-200 pb-4">
            Ticket Status
        </h1>

        <div className="space-y-5">
            <div className="space-y-2 w-full">
                <h1 className="text-base text-neutral-700 font-medium">
                    Your Destination
                </h1>
                
                {/* From and To */}
                <div className="space-y-0.5 w-full" >
                    {/* From and to words */}
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

                    {/* Location of from and to */}
                    <div className="w-full flex items-center justify-bewteen gap-x-4">
                        <h1 className="text-sm text-neutral-600 front-normal">
                            Delhi <span className="font-medium"> (08:00 AM) </span>
                        </h1>

                        <div className="flex-1 border-dashed border border-neutral-300" />

                        <h1 className="text-sm text-neutral-600 front-normal">
                            Lucknow <span className="font-medium"> (08:00 AM) </span>
                        </h1>    
                    </div>

                    {/* Bus Number */}
                    <div className="w-full flex items-center justify-between gap-x-4 !mt-1.5">
                        <h1 className="text-sm text-neutral-600 font-normal">
                            Bus No.:
                        </h1>

                        <h1 className="text-base text-neutral-700 font-medium">
                            (HY - 1234)
                        </h1>
                    </div>
                </div>
            </div>

            {/* Seat details section */}
            <div className="space-y-2 w-full">
                <h1 className="text-base text-neutral-700 font-medium">
                    Your Seats
                </h1>

                <div className="w-full flex items-center gap-x-3 ">
                    <div className="w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold">
                        B8
                    </div>
                    <div className="w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold">
                        B9
                    </div>
                    <div className="w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold">
                        B10
                    </div>
                    <div className="w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold">
                        19
                    </div>
                </div>
            </div>

            {/* Price details section */}
            <div className="space-y-2 w-full">
                <h1 className="text-base text-neutral-700 font-medium">
                    Total Amount
                </h1>

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
                        Rs. 1800
                    </p>
                </div>
            </div>
        </div>

      </div>

      <div className="w-full px-1.5">
        <Link to={"/ticket/payment"} className="w-full bg-primary hover:bg-primary/80 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center uppercase rounded-lg transition">
            Proceed to Pay
            <FaArrowRight className="ml-2 text-base" />
        </Link> 
      </div>

    </div>
  );
}

export default TicketStatus;