import { useRef } from "react";

import TopLayout from "../../../layout/topLayout/TopLayout";
import RootLayout from "../../../layout/RootLayout";

import TopImage from '../../../assets/HomeBus.jpg';
import { TbBoxPadding } from "react-icons/tb";

// using html-to-image downloadjs

function Bill() {

    const billRef = useRef(null);

    const handleDownload = async () => {
        if(billRef.current === null) return;

        try {
            const dataUrl = await TbBoxPadding(billRef.current);

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
                    <div className="w-[90%] grid grid-cols-5 bg-white rounded-3xl border border-neutral-200 shadow-sm relative">
                        Hey
                    </div>
                    
                    {/* Download button */}
                    <div className="w-full flex justify-center items-center">
                        Download
                    </div>

                </div>
            </RootLayout>
        </div>
    );
}

export default Bill;