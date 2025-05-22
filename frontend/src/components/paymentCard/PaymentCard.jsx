
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";

function PaymentCard({ selectedPaymentMethod, value, onChange, cardHolderName, cardNumber, cardImage }) {
    return(
        <label className={`w-full flex items-end px-4 py-2 border-2 ${ selectedPaymentMethod === value ? "border-blue-500/80 bg-blue-500/15" : "border-neutral-300 bg-neutral-100/40" } rounded-xl relative cursor-pointer`} >

            <div className="w-full flex items-center justify-between gap-7">
                <div className="flex items-center gap-x-3">
                    <div className="w-fit h-16 rounded-lg">
                        <img src={cardImage} alt="Card Image" className="w-full h-full object-contain object-center rounded-lg" />
                    </div>

                    <div className="space-y-0.5">
                        <h1 className="text-base text-neutral-600 font-medium">
                            {cardHolderName}
                        </h1>

                        <p className="text-neutral-500 text-sm font-normal">
                            **** {cardNumber.slice(-4)}
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    {
                        selectedPaymentMethod === value ? (
                            <IoMdRadioButtonOn className="w-7 h-7 text-blue-500" />
                        ) : (
                            <IoMdRadioButtonOff className="w-7 h-7 text-neutral-500" />
                        )
                    }
                </div>
            </div>

            <input type="radio" value={value} className="hidden" checked={selectedPaymentMethod === value} onChange={onChange} />
        </label>
    );
}

export default PaymentCard;