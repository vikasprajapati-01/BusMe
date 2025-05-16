import RootLayout from "../../../layout/RootLayout"
import TopLayout from "../../../layout/topLayout/TopLayout"
import WarningSeat from "../../../components/alertSection/WarningSeat"

import { Link } from "react-router-dom"

import TopImage from '../../../assets/HomeBus.jpg'

function Detail() {

    const message = (
        <>
            To book more than 8 seats, contact out support team
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
                </div>

                {/* Bus Detail */}
                <div className="w-full flex items-center justify-center flex-col gap-8 text-center"></div>

            </RootLayout>
        </div>
    );
};

export default Detail