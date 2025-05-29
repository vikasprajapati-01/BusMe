
function Reservation() {
    return(
        <div className="
            lg:col-span-3 w-full 
            lg:border-l border-neutral-300 
            lg:pl-5 xl:pl-6 
            pt-4 lg:pt-0
            border-t lg:border-t-0 border-neutral-200 lg:border-neutral-300
        ">
            <div className="w-full space-y-3 sm:space-y-4 text-left">
                <h1 className="
                    text-sm sm:text-base lg:text-lg 
                    text-neutral-600 font-medium 
                    text-start
                    pt-2 sm:pt-3 lg:pt-0
                ">
                    Reservation Policy
                </h1>

                <ul className="
                    w-full list-disc list-outside 
                    space-y-2 sm:space-y-2.5 lg:space-y-2 
                    px-3 sm:px-4 lg:px-4
                ">
                    <li className="
                        text-xs sm:text-sm lg:text-sm 
                        text-neutral-500 font-normal 
                        leading-relaxed sm:leading-relaxed lg:leading-normal
                    ">
                        The ticket is non-refundable.
                    </li>

                    <li className="
                        text-xs sm:text-sm lg:text-sm 
                        text-neutral-500 font-normal 
                        leading-relaxed sm:leading-relaxed lg:leading-normal
                    ">
                        Carry the ticket until the journey ends.
                    </li>

                    <li className="
                        text-xs sm:text-sm lg:text-sm 
                        text-neutral-500 font-normal 
                        leading-relaxed sm:leading-relaxed lg:leading-normal
                    ">
                        50% amount refundable, if ticket is cancelled before 24 hours.
                    </li>

                    <li className="
                        text-xs sm:text-sm lg:text-sm 
                        text-neutral-500 font-normal 
                        leading-relaxed sm:leading-relaxed lg:leading-normal
                    ">
                        Bus may get cancelled, rescheduled or delayed due to unknown circumstances.
                    </li>

                    <li className="
                        text-xs sm:text-sm lg:text-sm 
                        text-neutral-500 font-normal 
                        leading-relaxed sm:leading-relaxed lg:leading-normal
                    ">
                        Make sure to arrive at the boarding point 30 minutes before departure.
                    </li>
                </ul>

                {/* Mobile Contact Info */}
                <div className="
                    block lg:hidden 
                    mt-4 pt-3 
                    border-t border-neutral-200 
                    text-center
                ">
                    <p className="text-xs text-neutral-400 font-normal">
                        Questions about our policy? 
                        <span className="text-primary font-medium ml-1">Contact Support</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Reservation