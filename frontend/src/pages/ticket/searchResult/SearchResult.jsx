
import { FaBus } from "react-icons/fa6";
import TicketCard from "../../../components/ticketCard/TicketCard";

import { Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io";

function SearchResult() {
    return(
        <div className="w-full lg:col-span-3 space-y-6 sm:space-y-8 lg:space-y-10 pt-6 sm:pt-8 lg:pt-11">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <TicketCard icon={FaBus} busName={"Eagle"} from={"Pune"} to={"Agra"} arrivalTime={"08:30 AM"} departTime={"01:00 AM"} price={"800"} availableSeats={"11"} />
                <TicketCard icon={FaBus} busName={"Eagle"} from={"Pune"} to={"Agra"} arrivalTime={"08:30 AM"} departTime={"01:00 AM"} price={"800"} availableSeats={"11"} />
                <TicketCard icon={FaBus} busName={"Eagle"} from={"Pune"} to={"Agra"} arrivalTime={"08:30 AM"} departTime={"01:00 AM"} price={"800"} availableSeats={"11"} />
                <TicketCard icon={FaBus} busName={"Eagle"} from={"Pune"} to={"Agra"} arrivalTime={"08:30 AM"} departTime={"01:00 AM"} price={"800"} availableSeats={"11"} />
            </div>

            <div className="w-full flex items-center justify-center px-4 sm:px-0">
                <Link className="w-full sm:w-fit px-4 sm:px-6 py-2.5 sm:py-2 hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary text-sm sm:text-base font-normal text-neutral-50 flex items-center justify-center gap-x-2 ease-in-out duration-300">
                    <IoMdRefresh className="w-4 h-4 sm:w-5 sm:h-5" />
                    Load More
                </Link>
            </div>
        </div>
    );
}

export default SearchResult