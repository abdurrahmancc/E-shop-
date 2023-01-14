import React from "react";

const OrderTrack = () => {
  return (
    <div>
      <p className="md:text-[20px] text-[16px] leading-6 text-[#031424] md:leading-[40px]">
        To track your order please enter your Order ID in the box below and press the
        &quot;Track&quot; button. This was given to you on your receipt and in the confirmation
        email you should have received.
      </p>
      <form className="mt-[30px]">
        <div className="grid mb-[30px] sm:grid-cols-2 grid-cols-1 gap-[30px]">
          <div className="form-control w-full">
            <label className="label pt-0 px-0 md:text-[16px] text-sm leading-6 font-[500] text-[#031424]">
              Order ID
            </label>
            <input
              type="text"
              placeholder="Found in your order confirmation email."
              className="input placeholder:text-[#8A8A8A] bg-white rounded-none border-[#CBCBCB] focus:outline-none h-14 input-bordered w-full "
            />
          </div>
          <div className="form-control w-full">
            <label className="label pt-0 px-0 md:text-[16px] text-sm  leading-6 font-[500] text-[#031424]">
              Billing Email
            </label>
            <input
              type="text"
              placeholder="Found in your order confirmation email."
              className="input placeholder:text-[#8A8A8A] bg-white rounded-none border-[#CBCBCB] focus:outline-none h-14 input-bordered w-full "
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-[130px] h-[52px] bg-primary font-[500] leading-[32px] md:text-[16px] text-sm text-[#031424] bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate"
        >
          Order Track
        </button>
      </form>
    </div>
  );
};

export default OrderTrack;
