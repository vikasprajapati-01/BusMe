// import React, {
//     useCallback,
//     useEffect,
//     useState,
//     useRef
// } from 'react';

// const valueCSS = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 1,
//     gap: "2px",
//     paddingTop: "10px",
// };

// const PriceSlider = ({
//     min,
//     max,
//     trackColor = "#cecece",
//     onChange,
//     rangeColor = "#ff8901",
//     valueStyle = valueCSS,
//     width = "200px",
//     currencyText = "₹",
// }) => {

//     const [minVal, setMinVal] = useState(min);
//     const [maxVal, setMaxVal] = useState(max);
//     const minValRef = useRef(min);
//     const maxValRef = useRef(max);
//     const range = useRef(null);


//     // convert to percentage
//     const getPercent = useCallback(
//         (value) => Math.round(((value - min) / (max - min)) * 100),
//         [min, max]
//     );

//     // set width of the range to decrease from the left side
//     useEffect(() => {
//         const minPercent = getPercent(minVal);
//         const maxPercent = getPercent(maxValRef.current);

//         if (range.current) {
//             range.current.style.left = `${minPercent}%`;
//             range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//     }, [minVal, getPercent]);

//     // set the width of the range to decrease from right side
//     useEffect(() => {
//         const minPercent = getPercent(minValRef.current);
//         const maxPercent = getPercent(maxVal);

//         if (range.current) {
//             range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//     }, [maxVal, getPercent]);

//     // Get min and max values when their state changes
//     useEffect(() => {
//         if (minVal != minValRef.current || maxVal != maxValRef.current) {
//             onChange({ min: minVal, max: maxVal });
//             minValRef.current = minVal;
//             maxValRef.current = maxVal;
//         }
//     }, [minVal, maxVal, onChange]);

//     return (
//         <div className='w-full flex items-center justify-center flex-col space-y-14'>

//             {/* Display Price Value */}
//             <div className="w-[250px] px-4 flex items-center justify-between gap-x-5">

//                 <p className="text-xl text-neutral-600 font-semibold">
//                     {currencyText} {minVal}
//                 </p>

//                 <div className="flex-1 border-dashed border border-neutral-500 mt-1"></div>

//                 <p className="text-xl text-neutral-600 font-semibold">
//                     {currencyText} {maxVal}
//                 </p>

//             </div>


//             {/* Style the price range slider */}
//             <div className="multi-slide-input-container" style={{ width }}>

//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     value={minVal}
//                     onChange={(event) => {
//                         const value = Math.min(Number(event.target.value), maxVal - 1);
//                         setMinVal(value);
//                     }}
//                     className="thumb thumb-left"
//                     style={{
//                         width,
//                         zIndex: minVal > max - 100 || minVal === maxVal ? 5 : undefined,
//                     }}
//                 />

//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     value={maxVal}
//                     onChange={(event) => {
//                         const value = Math.max(Number(event.target.value), minVal + 1);
//                         setMaxVal(value);
//                     }}
//                     className="thumb thumb-right"
//                     style={{
//                         width,
//                         zIndex: minVal > max - 100 || minVal === maxVal ? 4 : undefined,
//                     }}
//                 />

//                 <div className="slider pb-2">
//                     <div
//                         style={{ border: `1px solid ${rangeColor}` }}
//                         className="track-slider"
//                     />

//                     <div
//                         ref={range}
//                         style={{ backgroundColor: rangeColor }}
//                         className="range-slider"
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PriceSlider



import React, {
    useCallback,
    useEffect,
    useState,
    useRef
} from 'react';

const valueCSS = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    gap: "2px",
    paddingTop: "10px",
};

const PriceSlider = ({
    min,
    max,
    trackColor = "#cecece",
    onChange,
    rangeColor = "#ff8901",
    valueStyle = valueCSS,
    width = "200px",
    currencyText = "₹",
}) => {

    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    // convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // set the width of the range to decrease from right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        if (minVal != minValRef.current || maxVal != maxValRef.current) {
            onChange({ min: minVal, max: maxVal });
            minValRef.current = minVal;
            maxValRef.current = maxVal;
        }
    }, [minVal, maxVal, onChange]);

    return (
        <div className='w-full flex items-center justify-center flex-col space-y-8 sm:space-y-10 lg:space-y-14'>

            {/* Display Price Value */}
            <div className="w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[250px] px-2 sm:px-3 lg:px-4 flex items-center justify-between gap-x-3 sm:gap-x-4 lg:gap-x-5">

                <p className="text-sm sm:text-base lg:text-xl text-neutral-600 font-semibold whitespace-nowrap">
                    {currencyText} {minVal}
                </p>

                <div className="flex-1 border-dashed border border-neutral-500 mt-1"></div>

                <p className="text-sm sm:text-base lg:text-xl text-neutral-600 font-semibold whitespace-nowrap">
                    {currencyText} {maxVal}
                </p>

            </div>

            {/* Style the price range slider */}
            <div 
                className="multi-slide-input-container w-full max-w-[180px] sm:max-w-[200px] lg:max-w-[220px]" 
                style={{ 
                    width: window.innerWidth < 640 ? "180px" : 
                           window.innerWidth < 1024 ? "200px" : width 
                }}
            >

                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={(event) => {
                        const value = Math.min(Number(event.target.value), maxVal - 1);
                        setMinVal(value);
                    }}
                    className="thumb thumb-left"
                    style={{
                        width: window.innerWidth < 640 ? "180px" : 
                               window.innerWidth < 1024 ? "200px" : width,
                        zIndex: minVal > max - 100 || minVal === maxVal ? 5 : undefined,
                    }}
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={(event) => {
                        const value = Math.max(Number(event.target.value), minVal + 1);
                        setMaxVal(value);
                    }}
                    className="thumb thumb-right"
                    style={{
                        width: window.innerWidth < 640 ? "180px" : 
                               window.innerWidth < 1024 ? "200px" : width,
                        zIndex: minVal > max - 100 || minVal === maxVal ? 4 : undefined,
                    }}
                />

                <div className="slider pb-2">
                    <div
                        style={{ border: `1px solid ${rangeColor}` }}
                        className="track-slider"
                    />

                    <div
                        ref={range}
                        style={{ backgroundColor: rangeColor }}
                        className="range-slider"
                    />
                </div>
            </div>
        </div>
    )
}

export default PriceSlider