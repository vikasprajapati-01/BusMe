import RootLayout from "../../../layout/RootLayout"
import TopLayout from "../../../layout/topLayout/TopLayout"
import WarningSeat from "../../../components/alertSection/WarningSeat"
import BusSeat from "../busSeat/BusSeat"
import ToggleBtn from "../../../components/toggleBtn/ToggleBtn"
import Amenities from "./Amenities"
import Reservation from "./Reservation"
import BusImage from "./BusImage"


import { Link } from "react-router-dom"

import TopImage from '../../../assets/HomeBus.jpg'

function Detail() {

    const message = (
        <>
            To book more than 8 seats, contact out support team-
            <Link to={"/support"} className="text-primary font-medium" >
                Click here to contact
            </Link>
        </>
    );

    return(
        <div className="w-full space-y-12 pb-16 ">
            <TopLayout img={TopImage} title={"Bus Details"} />

            <RootLayout className='space-y-12 w-full pb-16'>
                {/* Seat Details */}
                <div className="w-full space-y-8">
                    {/* Warning for more than 8 seats */}
                    <WarningSeat message={message} />

                    {/* Seat Layout */}
                    <BusSeat />

                </div>

                {/* Bus Detail */}
                <div className="w-full flex items-center justify-center flex-col gap-8 text-center">
                    {/* Description of the bus */}
                    <p className="text-base text-neutral-500 font-normal text-justify py-8">
                        Our bus offers a comfortable and reliable ride with spacious seating, air conditioning, free Wi-Fi, TV entertainment, and complimentary water bottles. Perfect for tours, group travel, and daily commutes with a touch of luxury.

                        <span className="text-lg text-neutral-600 font-medium ml-2">
                            Want to now more about the bus?
                        </span>
                    </p>

                    {/* Button to know more about the bus */}
                    <div className="w-full flex items-center justify-center gap-6 flex-col">
                        <ToggleBtn btnText={"Hide Bus Details"} btnTextHidden={"Check Bus Details"} >
                            {/* Reservation and Amenities */}
                            <div className="w-full space-y-10">
                                <div className="w-full grid grid-cols-7 gap-20">

                                    {/* Amenities */}
                                    <Amenities />

                                    {/* Reservation */}
                                    <Reservation />

                                </div>

                                {/* Bus Images */}
                                <BusImage />

                            </div>
                        </ToggleBtn>
                    </div>
                </div>

            </RootLayout>
        </div>
    );
};

export default Detail