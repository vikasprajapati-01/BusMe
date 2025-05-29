
import React, { useState } from "react";

import { FaPlus } from "react-icons/fa6";

import PaymentCard from "../../../../../components/paymentCard/PaymentCard";

function PaymentMethod() {

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handleChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  }

  return (
    <div className="w-full space-y-3 sm:space-y-4 lg:space-y-5">
      <h6 className="text-xs sm:text-sm lg:text-base text-neutral-600 font-medium">
        Select Payment Method
      </h6>

      {/* Payment Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
        <PaymentCard 
            selectedPaymentMethod={selectedPaymentMethod}
            value={"debitCard"}
            onChange={handleChange}
            cardHolderName={"Naruto Uzumaki"}
            cardNumber={"1234 5678"}
            cardImage={"https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-classic-card-498x280.png"}
        />

        <PaymentCard 
            selectedPaymentMethod={selectedPaymentMethod}
            value={"creditCard"}
            onChange={handleChange}
            cardHolderName={"Naruto Uzumaki"}
            cardNumber={"5432 9876"}
            cardImage={"https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-gold-card-498x280.png"}
        />
      </div>

      {/* Add New Card Button */}
      <div className="w-full flex justify-center sm:justify-end pt-1 sm:pt-2">
        <button className="
          flex items-center justify-center 
          gap-x-1.5 sm:gap-x-2 
          cursor-pointer 
          text-sm sm:text-base 
          font-normal text-primary 
          hover:text-primary/80 
          transition-colors duration-200
          py-2 px-3 sm:px-4
          rounded-lg
          hover:bg-primary/5
          active:scale-95
          transform transition-transform
        ">
          <FaPlus className="text-xs sm:text-sm" />
          <span className="capitalize">
            Add new card
          </span>
        </button>
      </div>

      {/* Mobile Payment Options Info */}
      <div className="block sm:hidden pt-2 border-t border-neutral-200">
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <span>Secure payment processing</span>
          <div className="flex items-center gap-1">
            <span>🔒</span>
            <span>SSL Protected</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;