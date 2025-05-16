import { FaBus } from "react-icons/fa6";
import TicketCard from "../../../components/ticketCard/TicketCard";

import { Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io";

function SearchResult() {
    return(
        <div className="w-full col-span-3 space-y-10 pt-11">
            <div className="space-y-6">
                <TicketCard icon={FaBus} busName={"Eagle"} from={"Pune"} to={"Agra"} arrivalTime={"08:30 AM"} departTime={"01:00 AM"} price={"800"} availableSeats={"11"} />
                <TicketCard icon={FaBus} busName={"Eagle"} from={"Pune"} to={"Agra"} arrivalTime={"08:30 AM"} departTime={"01:00 AM"} price={"800"} availableSeats={"11"} />
                <TicketCard icon={FaBus} busName={"Eagle"} from={"Pune"} to={"Agra"} arrivalTime={"08:30 AM"} departTime={"01:00 AM"} price={"800"} availableSeats={"11"} />
                <TicketCard icon={FaBus} busName={"Eagle"} from={"Pune"} to={"Agra"} arrivalTime={"08:30 AM"} departTime={"01:00 AM"} price={"800"} availableSeats={"11"} />
            </div>

            <div className="w-full flex items-center justify-center">
                <Link className="w-fit px-6 py-2 hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary text-base font-normal text-neutral-50 flex items-center justify-center gap-x-2 ease-in-out duration-300">
                    <IoMdRefresh className="w-5 h-5" />
                    Load More
                </Link>
            </div>
        </div>
    );
}

export default SearchResult