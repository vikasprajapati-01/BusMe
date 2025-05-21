import { div } from "framer-motion/client";

function Reservation() {
    return(
        <div className="col-span-4 w-full border-l border-neutral-300 pl-5">
            <div className="w-full space-y-3 text-left">
                <h1 className="text-lg text-neutral-600 font-medium text-start">
                    Reservation Policy
                </h1>

                <ul className="w-full list-disc list-outside space-y-2 5 px-4">
                    <li className="text-sm text-neutral-500 font-normal">
                        The ticket is non-refundable.
                    </li>

                    <li className="text-sm text-neutral-500 font-normal">
                        Carry the ticket until the journey ends.
                    </li>

                    <li className="text-sm text-neutral-500 font-normal">
                        50% amount refundable, If ticket is cancelled before 24 hours.
                    </li>

                    <li className="text-sm text-neutral-500 font-normal">
                        Bus may get cancelled, rescheduled or delayed due to unknown circumstances.
                    </li>

                    <li className="text-sm text-neutral-500 font-normal">
                        Make sure to arrive the boarding point 30 minutes before the departure.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Reservation