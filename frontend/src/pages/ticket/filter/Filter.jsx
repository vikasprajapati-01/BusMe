// import { useState } from "react";

// import PriceSlider from "../../../components/priceSlider/PriceSlider";

// function Filter({ className }) {

//     const [rangeVal, setRangeVal] = useState({min:0, max:100});

//     const handleRange = (values) => {
//         setRangeVal({ values });
//     };

//     return(
//         <div className={`w-full ${className}`}>
//             <h1 className="text-xl text-neutral-700 font-semibold">
//                 Add filters
//             </h1>

//             {/* Price filter */}
//             <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
//                 <h1 className="text-lg text-neutral-800 font-medium">
//                     Price Range
//                 </h1>

//                 <PriceSlider 
//                     min={200}
//                     max={5000}
//                     onChange={handleRange} />
//             </div>

//             {/* Bus Types */}
//             <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
//                 <h1 className="text-lg text-neutral-800 font-medium">
//                     Bus Type
//                 </h1>

//                 <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="sleeper-Bus" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="sleeper-Bus" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             Sleeper 
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>

//                 <div className="space-y-2.5">
//                     <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="non-ac-Bus" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="non-ac-Bus" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             Non-AC 
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>

//                     <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="ac-Bus" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="ac-Bus" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             AC 
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>

//                     <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="luxury-Bus" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="luxury-Bus" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             Luxury 
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>
//                 </div>
//             </div>

//             {/* Amenties filter */}
//             <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
//                 <h1 className="text-lg text-neutral-800 font-medium">
//                     Extras
//                 </h1>

//                 <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="internet" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="internet" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             Internet
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>

//                 <div className="space-y-2.5">
//                     <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="water-bottle" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="water-bottle" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             Water Bottles
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>

//                     <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="charging" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="charging" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             Charging Port
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>

//                     <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="television" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="television" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             Television 
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>

//                     <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="wheel-chair" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="wheel-chair" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             WheelChair
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>

//                     <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="dust-bin" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="dust-bin" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             Dust Bin 
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>

//                     <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="foot-rest" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="foot-rest" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             Footrests 
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>
//                 </div>
//             </div>

//             {/* Bus Company */}
//             <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
//                 <h1 className="text-lg text-neutral-800 font-medium">
//                     Bus Company
//                 </h1>

//                 <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="neeta-Bus" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="neeta-Bus" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             Neeta Travels 
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>

//                 <div className="space-y-2.5">
//                     <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="vrl-Bus" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="vrl-Bus" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             VRL Travels 
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>

//                     <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="sara-Bus" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="sara-Bus" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             Sara Transport
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>

//                     <div className="w-full flex items-center gap-2">
//                         <input type="checkbox" id="eagle-Bus" className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer" />

//                         <label htmlFor="eagle-Bus" className="text-sm text-neutral-600 font-normal cursor-pointer">
//                             Eagle Travels 
//                             <span className="text-xs text-neutral-600">
//                                 {/* Fill any value here later based on the bus */}
//                             </span>
//                         </label>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Filter


import { useState } from "react";

import PriceSlider from "../../../components/priceSlider/PriceSlider";

function Filter({ className }) {

    const [rangeVal, setRangeVal] = useState({min:0, max:100});

    const handleRange = (values) => {
        setRangeVal({ values });
    };

    return(
        <div className={`w-full ${className}`}>
            <h1 className="text-lg sm:text-xl text-neutral-700 font-semibold">
                Add filters
            </h1>

            {/* Price filter */}
            <div className="w-full border border-neutral-300 rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3">
                <h1 className="text-base sm:text-lg text-neutral-800 font-medium">
                    Price Range
                </h1>

                <PriceSlider 
                    min={200}
                    max={5000}
                    onChange={handleRange} />
            </div>

            {/* Bus Types */}
            <div className="w-full border border-neutral-300 rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3">
                <h1 className="text-base sm:text-lg text-neutral-800 font-medium">
                    Bus Type
                </h1>

                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="sleeper-Bus" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                    <label htmlFor="sleeper-Bus" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                        Sleeper 
                        <span className="text-xs text-neutral-600">
                            {/* Fill any value here later based on the bus */}
                        </span>
                    </label>
                </div>

                <div className="space-y-2 sm:space-y-2.5">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id="non-ac-Bus" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                        <label htmlFor="non-ac-Bus" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                            Non-AC 
                            <span className="text-xs text-neutral-600">
                                {/* Fill any value here later based on the bus */}
                            </span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id="ac-Bus" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                        <label htmlFor="ac-Bus" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                            AC 
                            <span className="text-xs text-neutral-600">
                                {/* Fill any value here later based on the bus */}
                            </span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id="luxury-Bus" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                        <label htmlFor="luxury-Bus" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                            Luxury 
                            <span className="text-xs text-neutral-600">
                                {/* Fill any value here later based on the bus */}
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Amenities filter */}
            <div className="w-full border border-neutral-300 rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3">
                <h1 className="text-base sm:text-lg text-neutral-800 font-medium">
                    Extras
                </h1>

                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="internet" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                    <label htmlFor="internet" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                        Internet
                        <span className="text-xs text-neutral-600">
                            {/* Fill any value here later based on the bus */}
                        </span>
                    </label>
                </div>

                <div className="space-y-2 sm:space-y-2.5">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id="water-bottle" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                        <label htmlFor="water-bottle" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                            Water Bottles
                            <span className="text-xs text-neutral-600">
                                {/* Fill any value here later based on the bus */}
                            </span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id="charging" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                        <label htmlFor="charging" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                            Charging Port
                            <span className="text-xs text-neutral-600">
                                {/* Fill any value here later based on the bus */}
                            </span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id="television" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                        <label htmlFor="television" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                            Television 
                            <span className="text-xs text-neutral-600">
                                {/* Fill any value here later based on the bus */}
                            </span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id="wheel-chair" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                        <label htmlFor="wheel-chair" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                            WheelChair
                            <span className="text-xs text-neutral-600">
                                {/* Fill any value here later based on the bus */}
                            </span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id="dust-bin" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                        <label htmlFor="dust-bin" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                            Dust Bin 
                            <span className="text-xs text-neutral-600">
                                {/* Fill any value here later based on the bus */}
                            </span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id="foot-rest" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                        <label htmlFor="foot-rest" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                            Footrests 
                            <span className="text-xs text-neutral-600">
                                {/* Fill any value here later based on the bus */}
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Bus Company */}
            <div className="w-full border border-neutral-300 rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3">
                <h1 className="text-base sm:text-lg text-neutral-800 font-medium">
                    Bus Company
                </h1>

                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="neeta-Bus" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                    <label htmlFor="neeta-Bus" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                        Neeta Travels 
                        <span className="text-xs text-neutral-600">
                            {/* Fill any value here later based on the bus */}
                        </span>
                    </label>
                </div>

                <div className="space-y-2 sm:space-y-2.5">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id="vrl-Bus" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                        <label htmlFor="vrl-Bus" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                            VRL Travels 
                            <span className="text-xs text-neutral-600">
                                {/* Fill any value here later based on the bus */}
                            </span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id="sara-Bus" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                        <label htmlFor="sara-Bus" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                            Sara Transport
                            <span className="text-xs text-neutral-600">
                                {/* Fill any value here later based on the bus */}
                            </span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id="eagle-Bus" className="h-3 w-3 sm:h-4 sm:w-4 border border-neutral-300 text-neutral-300 cursor-pointer" />

                        <label htmlFor="eagle-Bus" className="text-xs sm:text-sm text-neutral-600 font-normal cursor-pointer">
                            Eagle Travels 
                            <span className="text-xs text-neutral-600">
                                {/* Fill any value here later based on the bus */}
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter