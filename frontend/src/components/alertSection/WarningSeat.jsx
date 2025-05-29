

import { useState } from "react";

import { FaX } from "react-icons/fa6";

function WarningSeat({ message }) {

    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if(!isVisible) {
        return null;
    }

    return(
        <div className="flex items-center justify-between p-3 sm:p-4 text-xs sm:text-sm text-red-700 font-semibold bg-red-100 rounded-lg sm:rounded-xl gap-2 sm:gap-4" role="alert">
            <span className="flex-1 leading-relaxed">{ message }</span>

            <button onClick={handleClose} aria-label="close" className="flex-shrink-0 ml-2 sm:ml-4 text-primary hover:text-primary p-1 sm:p-0 hover:bg-red-200 rounded transition-colors duration-200" >
                <FaX className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
        </div>
    );
};

export default WarningSeat