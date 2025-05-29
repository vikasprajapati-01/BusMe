
import { useState, useEffect, useRef } from "react";

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
            {/* Responsive Toggle Button */}
            <button 
                onClick={toggleVisible} 
                className={`
                    w-full sm:w-fit 
                    px-3 sm:px-4 lg:px-6 
                    py-2.5 sm:py-2 lg:py-3 
                    border-2 border-primary 
                    ${!isVisible 
                        ? "bg-primary text-neutral-50 shadow-md" 
                        : "border-primary bg-transparent text-primary hover:bg-primary/5" 
                    } 
                    rounded-lg sm:rounded-xl 
                    transition-all duration-200 
                    text-sm sm:text-base lg:text-lg 
                    font-medium 
                    focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
                    active:scale-95
                `} 
            >
                <span className="flex items-center justify-center gap-2">
                    <span className="truncate">
                        {!isVisible ? btnTextHidden : btnText}
                    </span>
                    {/* Toggle Icon */}
                    <svg 
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${isVisible ? 'rotate-180' : 'rotate-0'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>

            {/* Responsive Content Container */}
            {isVisible && (
                <div className="
                    mt-4 sm:mt-6 lg:mt-8 xl:mt-10 
                    p-3 sm:p-4 lg:p-5 xl:p-6 
                    bg-neutral-50 
                    border border-neutral-300 
                    rounded-lg sm:rounded-xl lg:rounded-2xl 
                    shadow-sm hover:shadow-md 
                    transition-all duration-300 
                    animate-fade-in
                ">
                    <div className="w-full overflow-hidden">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ToggleBtn