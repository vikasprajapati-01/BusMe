
import { useState, useEffect } from "react"

function ErrorMessage({ message }) {

    const [isVisible, setIsVisible] = useState(true);
    const [countDown, setCountDown] = useState(10);

    useEffect(() => {
        if(countDown > 0) {
            const timer = setTimeout(() => {
                setCountDown(countDown - 1);
            }, 1000);

            return () => clearTimeout(timer);
        }
        else {
            setIsVisible(false);
        }
    }, [countDown]);

    if(!isVisible) {
        return null;
    }

    return(
        <div className="fixed inset-x-2 sm:inset-x-auto sm:right-4 sm:left-auto top-16 sm:top-20 lg:top-28 z-50">
            <div className="bg-primary text-white rounded-xl sm:rounded-2xl shadow-2xl transition-all transform-gpu animate-slide-in max-w-full sm:max-w-sm">
                {/* Mobile: Stacked Layout */}
                <div className="block sm:hidden p-4 space-y-3">
                    <div className="flex items-start justify-between">
                        <p className="text-sm leading-relaxed pr-2">
                            {message}
                        </p>
                        <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold">
                                {countDown}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="text-xs text-white/70 text-center">
                            Auto-dismiss in {countDown} seconds
                        </div>
                    </div>
                </div>

                {/* Desktop: Inline Layout */}
                <div className="hidden sm:block p-4">
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-sm leading-relaxed flex-1">
                            {message}
                        </span>
                        <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-xs text-white/70">
                                {countDown}s
                            </span>
                            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold">
                                    {countDown}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="h-1 bg-white/20 rounded-b-xl sm:rounded-b-2xl overflow-hidden">
                    <div 
                        className="h-full bg-white/40 transition-all duration-1000 ease-linear"
                        style={{ width: `${(countDown / 10) * 100}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default ErrorMessage