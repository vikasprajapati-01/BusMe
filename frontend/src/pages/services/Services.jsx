import RootLayout from "../../layout/RootLayout";

import { RiRefund2Line } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { PiGpsFixBold } from "react-icons/pi";

import ServiceCont from "./ServiceCont";

function Services() {
    return (
        <RootLayout className="space-y-12">
            <div className="w-full flex items-center justify-center text-center mt-20 mb-8">
                <h1 className="text-3xl text-neutral-800 font-bold">
                    Our <span className="text-primary">Services</span>
                </h1>
            </div>

            {/* Service container */}

            <div className="w-full grid grid-cols-3 gap-4">
                <ServiceCont icon={RiRefund2Line} title={"Secure Payment"} desc={"Refunds available if canceled 24+ hrs before departure, based on terms."} />
                <ServiceCont icon={PiGpsFixBold} title={"Track Bus"} desc={"Track your bus live and stay updated on its location."} />
                <ServiceCont icon={RiCustomerService2Fill} title={"24/7 Support"} desc={"Get help anytime through our always-available support team."} />
            </div>
        </RootLayout>
    );
}

export default Services