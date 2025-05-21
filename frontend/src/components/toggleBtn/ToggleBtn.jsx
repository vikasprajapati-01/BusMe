import { useState, useEffect, useRef } from "react";

import { div } from "framer-motion/client"

function ToggleBtn({ btnText, btnTextHidden, children }) {

    const [isVisible, setIsVisible] = useState(true);
    const toggleRef = useRef(null);

    const toggleVisible = () => {
        setIsVisible(!isVisible);
    }

    const outSideClick = (e) => {
        if(toggleRef.current && !toggleRef.current.contains(e.target)) {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', outSideClick);

        return() => {
            document.removeEventListener('mousedown', outSideClick);
        }
    }, []);

    return(
        <div className="w-full h-auto" ref={toggleRef}>
            <button onClick={toggleVisible} className={`w-fit px-4 py-2 border-2 border-primary ${!isVisible ? "bg-primary text-neutral-50" : "border-primary bg-transparent text-primary" } rounded-lg transition `} >
                {!isVisible ? btnTextHidden : btnText}
            </button>

            {
                isVisible && (
                    <div className="mt-10 p-4 bg-neutral-50 border border-neutral-300 rounded-xl shadow-sm">
                        { children }
                    </div>
                )
            }
        </div>
    );
}

export default ToggleBtn