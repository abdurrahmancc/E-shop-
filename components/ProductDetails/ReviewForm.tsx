import React from "react";
import { FormRating } from "../shared/Ratings/FormRating";

const ReviewForm = () => {
  return (
    <div className="w-full">
      <div className="form-control mt-[22px] w-full">
        <label className="label p-0 pb-2">
          <span className="text-[16px] font-[500] leading-[24px] ">Your Rating*</span>
        </label>
        <div className="flex items-center text-[20px]">
          <FormRating />
        </div>
      </div>
      <div className="form-control mt-[22px] w-full">
        <label className="label p-0 pb-[14px]">
          <span className="text-[16px] font-[500] leading-[24px] ">Your Name*</span>
        </label>
        <input
          type="text"
          className="input h-[58px] focus:input-bordered rounded-none focus:outline-none bg-[#F6F6F6] w-full"
        />
      </div>
      <div className="form-control mt-[22px] w-full">
        <label className="label p-0 pb-[14px]">
          <span className="text-[16px] font-[500] leading-[24px] ">Email Address*</span>
        </label>
        <input
          type="text"
          className="input h-[58px] focus:input-bordered rounded-none focus:outline-none bg-[#F6F6F6] w-full"
        />
      </div>
      <div className="form-control pb-6 mt-[22px] w-full">
        <label className="label p-0 pb-[14px]">
          <span className="text-[16px] font-[500] leading-[24px] ">Your Review*</span>
        </label>
        <input className="textarea h-[120px] focus:input-bordered rounded-none focus:outline-none bg-[#F6F6F6] w-full" />
      </div>
      <button className="text-[#031424] h-[54px] rounded-[8px] font-[500] max-w-[125px] w-full bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary text-[20px] leading-[30px] ">
        Submit
      </button>
    </div>
  );
};

export default ReviewForm;
