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
        <div className="flex itens-center justify-between p-4 text-sm text-red-700 font-semibold bg-red-100 rounded-xl" role="alert">
            <span>{ message }</span>

            <button onClick={handleClose} aria-label="close" className="ml-4 text-primary hover:text-primary" >
                <FaX className="w-3 h-3" />
            </button>
        </div>
    );
};

export default WarningSeat