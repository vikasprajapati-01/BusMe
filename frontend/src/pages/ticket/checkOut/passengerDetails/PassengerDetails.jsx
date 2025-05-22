import PaymentMethod from "./paymentMethod/PaymentMethod";

function PassengerDetails() {
    return(
        <div className="w-full col-span-4 py-4 space-y-6">
            <h1 className="text-xl text-neutral-700 font-semibold">
                Passenger Details
            </h1>

            {/* Passenger details section */}

            <div className="space-y-7">
                <div className="w-full space-y-2">
                    <label htmlFor="fullname" className="text-sm text-neutral-500 font-medium">
                        Full Name
                    </label>
                    <input type="text" placeholder="e.g. Naruto Uzumaki" className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400 " />
                </div>

                <div className="w-full space-y-2">
                    <label htmlFor="email" className="text-sm text-neutral-500 font-medium">
                        Email Address
                    </label>
                    <input type="email" placeholder="e.g. naruto@gmail.com" className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400 " />
                </div>

                <div className="w-full space-y-2">
                    <label htmlFor="phone" className="text-sm text-neutral-500 font-medium">
                        Mobile Number
                    </label>
                    <input type="tel" placeholder="e.g. +91-9876054321" className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400 " />
                </div>

                <div className="w-full space-y-2">
                    <label htmlFor="altphone" className="text-sm text-neutral-500 font-medium">
                        Alternate Number
                    </label>
                    <input type="tel" placeholder="e.g. +91-9876543210" className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400 " />
                </div>

                {/* Location section */}

                <div className="w-full space-y-2">

                    <label htmlFor="altphone" className="text-sm text-neutral-500 font-medium">
                        Pickup Location
                    </label>

                    <div className="relative">
                        <select className="custom-select w-full h-14 px-4 pr-10 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400 appearance-none">
                            <option selected disabled>
                                Choose nearest pickup location
                            </option>
                            <option value="tc-palya">TC Palya</option>
                            <option value="tin-factory">Tin Factory</option>
                            <option value="hoskote">Hoskote</option>
                            <option value="yeshwanthpur">Yeshwanthpur</option>
                        </select>

                        {/* Custom Arrow */}

                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-700">
                            <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>

            {/* Payment method */}
            
            <PaymentMethod/>

        </div>
    );
}

export default PassengerDetails