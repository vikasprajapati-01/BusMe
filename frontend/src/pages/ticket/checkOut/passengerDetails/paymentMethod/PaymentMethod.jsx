import React, { useState } from "react";

import { FaPlus } from "react-icons/fa6";

import PaymentCard from "../../../../../components/paymentCard/PaymentCard";

function PaymentMethod() {

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handleChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  }

  return (
    <div className="w-full space-y-3">
      <h6 className="text-sm text-neutral-600 font-medium">
        Select Payment Method
      </h6>

      <div className="w-full grid grid-cols-2 gap-10">
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

      <div className="w-full flex justify-end">
        <div className="w-fit flex items-center justify-center gap-x-2 cursor-pointer text-base font-normal text-primary">
          <FaPlus />
          <p className="capitalize">
            Add new card
          </p>
        </div>
      </div>

    </div>
  );
}

export default PaymentMethod;