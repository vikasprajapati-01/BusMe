import { FaPhone } from "react-icons/fa6";

function CompanyInvoice() {
    return(
        <div className="w-full col-span-1 border-dashed border-l-2 border-neutral-400 relative">
            <div className="w-full bg-primary px-4 py-3 rounded-tr-md">
                <h1 className="text-2xl text-neutral-50 font-bold text-center">
                    Bus Ticket
                </h1>
            </div>

            <div className="w-full px-4 py-7 space-y-1">
                <p className="text-sm text-neutral-600 font-normal">
                    Bill No.: 4321
                </p>

                <p className="text-sm text-neutral-600 font-normal">
                    Date: 30-Feb-1999
                </p>

                <p className="text-sm text-neutral-600 font-normal">
                    Name: Naruto Uzumaki
                </p>

                <p className="text-sm text-neutral-600 font-normal">
                    From: Delhi &nbsp;
                    <span className="text-xs">
                        (Indus park)
                    </span>
                </p>

                <p className="text-sm text-neutral-600 font-normal">
                    To: Lucknow &nbsp;
                    <span className="text-xs">
                        (Green layout)
                    </span>
                </p>

                <p className="text-sm text-neutral-600 font-normal">
                    Depart: 08:30 AM
                </p>

                <p className="text-sm text-neutral-600 font-normal">
                    Seats: B7, B8, B9, 19
                </p>

                <p className="text-sm text-neutral-600 font-normal">
                    Passengers: 04
                </p>

                <p className="text-sm text-neutral-600 font-normal">
                    Total Amount: Rs. 1800
                </p>
            </div>

            <div className="w-full bg-primary absolute bottom-0 right-0 rounded-br-md flex items-center justify-center px-5 py-1.5">
        
                <div className="flex items-center gap-x-2">
                    <FaPhone className="w-3 h-3 text-neutral-100" />
                    <p className="text-sm text-neutral-100 font-light">
                        +91-1122334455
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CompanyInvoice