

import { GoCheckbox } from "react-icons/go"
import { AiOutlineCloseSquare } from "react-icons/ai"

function Amenities() {
    
    // Amenities data organized for better layout
    const amenitiesData = [
        { name: "Internet", available: true },
        { name: "TV", available: true },
        { name: "AC", available: true },
        { name: "Water Bottles", available: true },
        { name: "Footrest", available: true },
        { name: "Luggage Storage", available: true },
        { name: "Restroom", available: true },
        { name: "Emergency exit", available: true },
        { name: "CCTV", available: true },
        { name: "Snacks", available: false },
        { name: "Sleeper Seat", available: false },
        { name: "Curtains", available: false },
        { name: "Pet carriers", available: false },
    ];

    // Split amenities into two columns for desktop
    const midPoint = Math.ceil(amenitiesData.length / 2);
    const leftColumnAmenities = amenitiesData.slice(0, midPoint);
    const rightColumnAmenities = amenitiesData.slice(midPoint);

    return (
        <div className="col-span-3 w-full">
            <div className="w-full space-y-3">
                <h1 className="text-sm sm:text-base lg:text-lg text-neutral-600 font-medium text-start">
                    Bus Amenities
                </h1>

                {/* Desktop View - Two Columns */}
                <div className="hidden md:block w-full">
                    <div className="w-full grid grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="col-span-1 w-full space-y-2">
                            {leftColumnAmenities.map((amenity, index) => (
                                <div key={`left-${index}`} className="flex items-center gap-x-2 w-full">
                                    {amenity.available ? (
                                        <GoCheckbox className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    ) : (
                                        <AiOutlineCloseSquare className="w-5 h-5 text-red-500 flex-shrink-0" />
                                    )}
                                    <p className="text-base text-neutral-700 font-normal">
                                        {amenity.name}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="col-span-1 w-full space-y-2">
                            {rightColumnAmenities.map((amenity, index) => (
                                <div key={`right-${index}`} className="flex items-center gap-x-2 w-full">
                                    {amenity.available ? (
                                        <GoCheckbox className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    ) : (
                                        <AiOutlineCloseSquare className="w-5 h-5 text-red-500 flex-shrink-0" />
                                    )}
                                    <p className="text-base text-neutral-700 font-normal">
                                        {amenity.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet View - Compact Grid */}
                <div className="block md:hidden w-full">
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {amenitiesData.map((amenity, index) => (
                            <div 
                                key={`mobile-${index}`}
                                className="flex items-center gap-x-1.5 w-full py-1.5 px-2 rounded hover:bg-neutral-50/50 transition-colors duration-150"
                            >
                                {amenity.available ? (
                                    <GoCheckbox className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                                ) : (
                                    <AiOutlineCloseSquare className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
                                )}
                                <p className="text-xs sm:text-sm text-neutral-700 font-normal break-words leading-tight">
                                    {amenity.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Summary */}
                    <div className="flex items-center justify-between text-xs text-neutral-500 pt-2 mt-2 border-t border-neutral-200/50">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                                <GoCheckbox className="w-3 h-3 text-green-500" />
                                {amenitiesData.filter(a => a.available).length}
                            </span>
                            <span className="flex items-center gap-1">
                                <AiOutlineCloseSquare className="w-3 h-3 text-red-500" />
                                {amenitiesData.filter(a => !a.available).length}
                            </span>
                        </div>
                        <span className="text-neutral-400">
                            {amenitiesData.length} total
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Amenities