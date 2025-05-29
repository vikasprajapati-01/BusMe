import { useRef } from "react";

import TopLayout from "../../../layout/topLayout/TopLayout";
import RootLayout from "../../../layout/RootLayout";

import TopImage from '../../../assets/HomeBus.jpg';
import { TbBoxPadding } from "react-icons/tb";

import PassengerInvoice from "./PassengerInvoice";
import CompanyInvoice from "./CompanyInvoice";

import { toPng } from 'html-to-image';
import download from 'downloadjs';

// using html-to-image downloadjs

function Bill() {

    const billRef = useRef(null);

    const handleDownload = async () => {
        if(billRef.current === null) return;

        try {
            const dataUrl = await toPng(billRef.current);

            download(dataUrl, "bill.png");
        }
        catch (error) {
            console.error("Error while downloading bill:", error);
        }
    }

    return(
        <div className="w-full space-y-12 pb-16">
            <TopLayout img={TopImage} title={"Bill"} />
            
            <RootLayout className='space-y-12 w-full pb-16'>
                <div className="w-full flex items-center justify-center">

                    {/* Bill page */}
                    <div ref={billRef} className="w-[90%] grid grid-cols-5 bg-white rounded-md border border-neutral-200 shadow-sm relative">
                        
                        {/* Left side */}
                        <PassengerInvoice />

                        {/* Right side */}
                        <CompanyInvoice />

                        <div className="absolute -top-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50 " />

                        <div className="absolute -bottom-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50 " />

                    </div>

                </div>
                 
                {/* Download button */}
                <div className="w-full flex justify-center items-center">

                    <button onClick={handleDownload} className="w-fit px-8 h-14 mt-5 bg-primary text-neutral-50 font-bold text-lg rounded-lg">
                        Download ticket
                    </button>
                    
                </div>

            </RootLayout>
        </div>
    );
}

export default Bill;
