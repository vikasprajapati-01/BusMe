

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
        <div className="w-full space-y-8 sm:space-y-10 lg:space-y-12 pb-12 sm:pb-14 lg:pb-16">
            <TopLayout img={TopImage} title={"Bus Details"} />

            <RootLayout className='space-y-8 sm:space-y-10 lg:space-y-12 w-full pb-12 sm:pb-14 lg:pb-16'>
                {/* Seat Details */}
                <div className="w-full space-y-6 sm:space-y-7 lg:space-y-8">
                    {/* Warning for more than 8 seats */}
                    <WarningSeat message={message} />

                    {/* Seat Layout */}
                    <BusSeat />

                </div>

                {/* Bus Detail */}
                <div className="w-full flex items-center justify-center flex-col gap-6 sm:gap-7 lg:gap-8 text-center">
                    {/* Description of the bus */}
                    <p className="text-sm sm:text-base text-neutral-500 font-normal text-justify sm:text-center py-6 sm:py-7 lg:py-8 px-4 sm:px-6 lg:px-0">
                        Our bus offers a comfortable and reliable ride with spacious seating, air conditioning, free Wi-Fi, TV entertainment, and complimentary water bottles. Perfect for tours, group travel, and daily commutes with a touch of luxury.

                        <span className="block sm:inline text-base sm:text-lg text-neutral-600 font-medium ml-0 sm:ml-2 mt-2 sm:mt-0">
                            Want to now more about the bus?
                        </span>
                    </p>

                    {/* Button to know more about the bus */}
                    <div className="w-full flex items-center justify-center gap-4 sm:gap-5 lg:gap-6 flex-col">
                        <ToggleBtn btnText={"Hide Bus Details"} btnTextHidden={"Check Bus Details"} >
                            {/* Reservation and Amenities */}
                            <div className="w-full space-y-8 sm:space-y-9 lg:space-y-10">
                                <div className="w-full grid grid-cols-1 lg:grid-cols-7 gap-6 sm:gap-8 lg:gap-20">

                                    {/* Amenities */}
                                    <div className="lg:col-span-4 order-1 lg:order-1">
                                        <Amenities />
                                    </div>

                                    {/* Reservation */}
                                    <div className="lg:col-span-3 order-2 lg:order-2">
                                        <Reservation />
                                    </div>

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