import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full">
      <form>
        <div className="form-control w-full">
          <label className="label pb-4">
            <span className="text-[16px] text-[#545454] leading-[24px] font-[500]">Your Name*</span>
          </label>
          <input
            type="text"
            className="input input-bordered bg-[#ffffff] rounded-none h-[62px] focus:outline-none w-full border-[#CBCBCB]"
          />
        </div>
        <div className="form-control mt-[30px] w-full">
          <label className="label pt-0 pb-4">
            <span className="text-[16px] text-[#545454] leading-[24px] font-[500]">Your Name*</span>
          </label>
          <input
            type="text"
            className="input input-bordered bg-[#ffffff] rounded-none h-[62px] focus:outline-none w-full border-[#CBCBCB]"
          />
        </div>
        <div className="form-control mt-[30px] w-full">
          <label className="label pt-0 pb-4">
            <span className="text-[16px] text-[#545454] leading-[24px] font-[500]">Your Name*</span>
          </label>
          <textarea className="textarea border h-[148px] bg-[#ffffff] rounded-none focus:outline-none w-full border-[#CBCBCB]" />
        </div>
        <div className="mt-10">
          <button className="text-[20px] rounded-[8px] w-[195px] bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary h-[68px] leading-[30px] text-[#031424] font-[500]">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
