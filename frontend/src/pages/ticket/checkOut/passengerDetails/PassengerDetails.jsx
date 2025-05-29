

import PaymentMethod from "./paymentMethod/PaymentMethod";

function PassengerDetails() {
    return(
        <div className="w-full space-y-5 sm:space-y-6 lg:space-y-7">
            {/* Passenger Details Card */}
            <div className="w-full bg-neutral-50 rounded-lg sm:rounded-xl py-4 sm:py-5 lg:py-6 px-4 sm:px-5 lg:px-6 border border-neutral-200 shadow-sm space-y-4 sm:space-y-5">
                
                <h1 className="text-base sm:text-lg lg:text-xl text-neutral-700 font-bold text-center border-b border-neutral-200 pb-3 sm:pb-4">
                    Passenger Details
                </h1>

                {/* Form Fields */}
                <div className="space-y-4 sm:space-y-5">
                    
                    {/* Personal Information Section */}
                    <div className="space-y-2 sm:space-y-3 w-full">
                        <h2 className="text-sm sm:text-base lg:text-lg text-neutral-700 font-medium">
                            Personal Information
                        </h2>
                        
                        <div className="w-full bg-white rounded-lg p-3 sm:p-4 border border-neutral-200 space-y-4">
                            {/* Full Name */}
                            <div className="w-full space-y-1.5 sm:space-y-2">
                                <label htmlFor="fullname" className="text-xs sm:text-sm text-neutral-600 font-medium">
                                    Full Name *
                                </label>
                                <input 
                                    type="text" 
                                    id="fullname"
                                    placeholder="e.g. Naruto Uzumaki" 
                                    className="
                                        w-full 
                                        h-10 sm:h-11 lg:h-12 
                                        px-3 sm:px-4 
                                        bg-neutral-50 
                                        focus:bg-white 
                                        border border-neutral-300 
                                        rounded-md sm:rounded-lg 
                                        focus:outline-none 
                                        focus:border-primary 
                                        focus:ring-2 focus:ring-primary/20
                                        text-sm sm:text-base 
                                        text-neutral-700 font-normal 
                                        placeholder:text-neutral-400 
                                        transition-all duration-200
                                    " 
                                />
                            </div>

                            {/* Email Address */}
                            <div className="w-full space-y-1.5 sm:space-y-2">
                                <label htmlFor="email" className="text-xs sm:text-sm text-neutral-600 font-medium">
                                    Email Address *
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    placeholder="e.g. naruto@gmail.com" 
                                    className="
                                        w-full 
                                        h-10 sm:h-11 lg:h-12 
                                        px-3 sm:px-4 
                                        bg-neutral-50 
                                        focus:bg-white 
                                        border border-neutral-300 
                                        rounded-md sm:rounded-lg 
                                        focus:outline-none 
                                        focus:border-primary 
                                        focus:ring-2 focus:ring-primary/20
                                        text-sm sm:text-base 
                                        text-neutral-700 font-normal 
                                        placeholder:text-neutral-400 
                                        transition-all duration-200
                                    " 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Information Section */}
                    <div className="space-y-2 sm:space-y-3 w-full">
                        <h2 className="text-sm sm:text-base lg:text-lg text-neutral-700 font-medium">
                            Contact Information
                        </h2>
                        
                        <div className="w-full bg-white rounded-lg p-3 sm:p-4 border border-neutral-200 space-y-4">
                            {/* Mobile Number */}
                            <div className="w-full space-y-1.5 sm:space-y-2">
                                <label htmlFor="phone" className="text-xs sm:text-sm text-neutral-600 font-medium">
                                    Mobile Number *
                                </label>
                                <input 
                                    type="tel" 
                                    id="phone"
                                    placeholder="e.g. +91-9876054321" 
                                    className="
                                        w-full 
                                        h-10 sm:h-11 lg:h-12 
                                        px-3 sm:px-4 
                                        bg-neutral-50 
                                        focus:bg-white 
                                        border border-neutral-300 
                                        rounded-md sm:rounded-lg 
                                        focus:outline-none 
                                        focus:border-primary 
                                        focus:ring-2 focus:ring-primary/20
                                        text-sm sm:text-base 
                                        text-neutral-700 font-normal 
                                        placeholder:text-neutral-400 
                                        transition-all duration-200
                                    " 
                                />
                            </div>

                            {/* Alternate Number */}
                            <div className="w-full space-y-1.5 sm:space-y-2">
                                <label htmlFor="altphone" className="text-xs sm:text-sm text-neutral-600 font-medium">
                                    Alternate Number
                                    <span className="text-xs text-neutral-400 ml-1 font-normal">(Optional)</span>
                                </label>
                                <input 
                                    type="tel" 
                                    id="altphone"
                                    placeholder="e.g. +91-9876543210" 
                                    className="
                                        w-full 
                                        h-10 sm:h-11 lg:h-12 
                                        px-3 sm:px-4 
                                        bg-neutral-50 
                                        focus:bg-white 
                                        border border-neutral-300 
                                        rounded-md sm:rounded-lg 
                                        focus:outline-none 
                                        focus:border-primary 
                                        focus:ring-2 focus:ring-primary/20
                                        text-sm sm:text-base 
                                        text-neutral-700 font-normal 
                                        placeholder:text-neutral-400 
                                        transition-all duration-200
                                    " 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Travel Details Section */}
                    <div className="space-y-2 sm:space-y-3 w-full">
                        <h2 className="text-sm sm:text-base lg:text-lg text-neutral-700 font-medium">
                            Travel Details
                        </h2>
                        
                        <div className="w-full bg-white rounded-lg p-3 sm:p-4 border border-neutral-200">
                            {/* Pickup Location */}
                            <div className="w-full space-y-1.5 sm:space-y-2">
                                <label htmlFor="pickup" className="text-xs sm:text-sm text-neutral-600 font-medium">
                                    Pickup Location *
                                </label>

                                <div className="relative">
                                    <select 
                                        id="pickup"
                                        className="
                                            w-full 
                                            h-10 sm:h-11 lg:h-12 
                                            px-3 sm:px-4 pr-8 sm:pr-10 
                                            bg-neutral-50 
                                            focus:bg-white 
                                            border border-neutral-300 
                                            rounded-md sm:rounded-lg 
                                            focus:outline-none 
                                            focus:border-primary 
                                            focus:ring-2 focus:ring-primary/20
                                            text-sm sm:text-base 
                                            text-neutral-700 font-normal 
                                            appearance-none
                                            cursor-pointer
                                            transition-all duration-200
                                        "
                                    >
                                        <option value="" disabled defaultValue>
                                            Choose nearest pickup location
                                        </option>
                                        <option value="tc-palya">TC Palya</option>
                                        <option value="tin-factory">Tin Factory</option>
                                        <option value="hoskote">Hoskote</option>
                                        <option value="yeshwanthpur">Yeshwanthpur</option>
                                    </select>

                                    {/* Custom Arrow */}
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 text-neutral-500">
                                        <svg className="fill-current h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Info Note */}
                            <div className="flex items-center justify-between text-xs text-neutral-400 pt-2 mt-2 border-t border-neutral-200">
                                <span>Please arrive 15 minutes before departure</span>
                                <span>Required fields *</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Method Card */}
            <div className="w-full bg-neutral-50 rounded-lg sm:rounded-xl py-4 sm:py-5 lg:py-6 px-4 sm:px-5 lg:px-6 border border-neutral-200 shadow-sm">
                <h1 className="text-base sm:text-lg lg:text-xl text-neutral-700 font-bold text-center border-b border-neutral-200 pb-3 sm:pb-4 mb-4 sm:mb-5">
                    Payment Method
                </h1>
                
                <PaymentMethod/>
            </div>
        </div>
    );
}

export default PassengerDetails;