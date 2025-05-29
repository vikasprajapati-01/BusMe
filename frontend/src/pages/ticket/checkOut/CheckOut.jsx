
import TopLayout from "../../../layout/topLayout/TopLayout";
import RootLayout from "../../../layout/RootLayout";

import TopImage from '../../../assets/HomeBus.jpg';

import PassengerDetails from "./passengerDetails/PassengerDetails";
import TicketStatus from "./ticketStatus/TicketStatus";

function CheckOut() {
    return(
        <div className="w-full space-y-8 sm:space-y-10 lg:space-y-12 pb-12 sm:pb-14 lg:pb-16">
            <TopLayout img={TopImage} title={"Checkout"} />
            
            <RootLayout className='space-y-8 sm:space-y-10 lg:space-y-12 w-full pb-12 sm:pb-14 lg:pb-16'>
                <div className="w-full grid grid-cols-1 lg:grid-cols-7 items-start gap-6 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 relative">
                    {/* Passenger Details */}
                    <div className="lg:col-span-4 order-1 lg:order-1">
                        <PassengerDetails />
                    </div>

                    {/* Ticket Status */}
                    <div className="lg:col-span-3 order-2 lg:order-2">
                        <TicketStatus />
                    </div>
                </div>
            </RootLayout>
        </div>
    );
}

export default CheckOut