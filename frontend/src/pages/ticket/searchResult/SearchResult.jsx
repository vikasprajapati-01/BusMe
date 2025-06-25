
import { FaBus } from "react-icons/fa6";
import TicketCard from "../../../components/ticketCard/TicketCard";

import { Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io";

function SearchResult() {
    return(
        <div className="w-full lg:col-span-3 space-y-6 sm:space-y-8 lg:space-y-10 pt-6 sm:pt-8 lg:pt-11">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <TicketCard icon={FaBus} busName={"Eagle"} from={"Bangalore"} to={"Chennai"} arrivalTime={"08:30 AM"} departTime={"01:00 AM"} price={"700"} availableSeats={"11"} />
                <TicketCard icon={FaBus} busName={"Eagle"} from={"Bangalore"} to={"Goa"} arrivalTime={"07:30 PM"} departTime={"11:30 PM"} price={"1200"} availableSeats={"14"} />
                <TicketCard icon={FaBus} busName={"Eagle"} from={"Bangalore"} to={"Mysore"} arrivalTime={"09:30 AM"} departTime={"11:00 AM"} price={"2400"} availableSeats={"09"} />
                <TicketCard icon={FaBus} busName={"Eagle"} from={"Bangalore"} to={"Pune"} arrivalTime={"11:30 AM"} departTime={"08:30 PM"} price={"600"} availableSeats={"12"} />
                <TicketCard icon={FaBus} busName={"Eagle"} from={"Delhi"} to={"Agra"} arrivalTime={"08:30 AM"} departTime={"12:00 PM"} price={"300"} availableSeats={"04"} />
                <TicketCard icon={FaBus} busName={"Eagle"} from={"Pune"} to={"Ayodhya"} arrivalTime={"10:30 AM"} departTime={"01:00 PM"} price={"500"} availableSeats={"22"} />
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



// import { useState } from "react";
// import { FaBus } from "react-icons/fa6";
// import TicketCard from "../../../components/ticketCard/TicketCard";
// import { IoMdRefresh } from "react-icons/io";

// function SearchResult({ buses }) {
//     const [visibleCount, setVisibleCount] = useState(4);

//     // Default buses for first load (no search)
//     const defaultBuses = [
//         {id: 1, bus_name: "Eagle", from_location: "Pune", to_location: "Agra", arrival_time: "08:30 AM", departure_time: "01:00 AM", price: "800", available_seats: "11", bus_type: "AC", total_seats: "40", rating: "4.6"},
//         {id: 2, bus_name: "Eagle", from_location: "Pune", to_location: "Agra", arrival_time: "08:30 AM", departure_time: "01:00 AM", price: "800", available_seats: "11", bus_type: "AC", total_seats: "40", rating: "4.6"},
//         {id: 3, bus_name: "Eagle", from_location: "Pune", to_location: "Agra", arrival_time: "08:30 AM", departure_time: "01:00 AM", price: "800", available_seats: "11", bus_type: "AC", total_seats: "40", rating: "4.6"},
//         {id: 4, bus_name: "Eagle", from_location: "Pune", to_location: "Agra", arrival_time: "08:30 AM", departure_time: "01:00 AM", price: "800", available_seats: "11", bus_type: "AC", total_seats: "40", rating: "4.6"},
//     ];

//     // Only show default buses if buses is undefined (no search yet)
//     let busesToRender = defaultBuses;
//     if (Array.isArray(buses)) {
//         if (buses.length === 0) {
//             return (
//                 <div className="w-full lg:col-span-3 flex flex-col items-center justify-center py-12">
//                     <div className="text-gray-400 text-6xl mb-4">
//                         <FaBus />
//                     </div>
//                     <p className="text-gray-700 text-xl font-medium">No buses currently available for the route</p>
//                     <p className="text-gray-500 mt-2">Try different dates or locations</p>
//                 </div>
//             );
//         } else {
//             busesToRender = buses.slice(0, visibleCount);
//         }
//     } else {
//         busesToRender = defaultBuses.slice(0, visibleCount);
//     }

//     const handleLoadMore = () => {
//         setVisibleCount(prev => prev + 4);
//     };

//     return(
//         <div className="w-full lg:col-span-3 space-y-6 sm:space-y-8 lg:space-y-10 pt-6 sm:pt-8 lg:pt-11">
//             <div className="space-y-4 sm:space-y-5 lg:space-y-6">
//                 {busesToRender.map(bus => (
//                     <TicketCard 
//                         key={bus.id || Math.random()}
//                         busId={bus.id}
//                         icon={FaBus}
//                         busName={bus.bus_name}
//                         from={bus.from_location}
//                         to={bus.to_location}
//                         arrivalTime={bus.arrival_time}
//                         departTime={bus.departure_time}
//                         price={bus.price}
//                         availableSeats={bus.available_seats}
//                         busType={bus.bus_type || "AC"}
//                         rating={bus.rating || "4.6"}
//                         totalSeats={bus.total_seats || "40"}
//                     />
//                 ))}
//             </div>
//             {(Array.isArray(buses) && buses.length > visibleCount) && (
//                 <div className="w-full flex items-center justify-center px-4 sm:px-0">
//                     <button 
//                         onClick={handleLoadMore}
//                         className="w-full sm:w-fit px-4 sm:px-6 py-2.5 sm:py-2 hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary text-sm sm:text-base font-normal text-neutral-50 flex items-center justify-center gap-x-2 ease-in-out duration-300"
//                     >
//                         <IoMdRefresh className="w-4 h-4 sm:w-5 sm:h-5" />
//                         Load More
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }
// export default SearchResult;