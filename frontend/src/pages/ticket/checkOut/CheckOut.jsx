import TopLayout from "../../../layout/topLayout/TopLayout";
import RootLayout from "../../../layout/RootLayout";

import TopImage from '../../../assets/HomeBus.jpg';

import PassengerDetails from "./passengerDetails/PassengerDetails";
import TicketStatus from "./ticketStatus/TicketStatus";

function CheckOut() {
    return(
        <div className="w-full space-y-12 pb-16">
            <TopLayout img={TopImage} title={"Checkout"} />
            
            <RootLayout className='space-y-12 w-full pb-16'>
                <div className="w-full grid grid-cols-7 items-start gap-44 relative">
                    {/* Passenger Details */}

                    <PassengerDetails />

                    {/* Ticket Status */}

                    <TicketStatus />

                </div>
            </RootLayout>
        </div>
    );
}

export default CheckOut