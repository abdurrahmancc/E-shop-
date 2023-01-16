import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import NavContent from "./NavContent";
import BottomHeaderCategories1 from "./BottomHeaderCategories1";

const BottomHeader1 = () => {
  return (
    <div className="pb-5 hidden lg:flex items-center justify-between">
      <BottomHeaderCategories1 />
      {/* ========== nav link start ========= */}
      <div className="h-full">
        <NavContent>{"text-white"}</NavContent>
      </div>
      {/* ========== nav link end ========= */}
      <div>
        <div className="flex items-center gap-[10px]">
          <BsFillTelephoneFill className="w-[28px] h-[28px] text-primary " />
          <div className="flex flex-col">
            <span className="text-xs leading-[22px] text-neutral">Need Help? Call us:</span>
            <span className="text-[16px] text-primary leading-[22px] font-[600]">
              +84 2500 888 33
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader1;
