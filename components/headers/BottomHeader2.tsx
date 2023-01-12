import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoChevronDownSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import NavContent from "./NavContent";
import { IoMdStarHalf } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import BottomHeaderCategories2 from "./BottomHeaderCategories2";

const BottomHeader2 = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <div id="bottom-Header-2" className=" bg-[#041E42] h-[65px] hidden lg:block">
      <div className="max-w-[1443px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
        <div className="flex items-center justify-between">
          <BottomHeaderCategories2 />
          {/* ========== nav link start ========= */}
          <div className="h-full">
            <NavContent>{"text-white"}</NavContent>
          </div>
          {/* ========== nav link end ========= */}
          <div>
            <div className="flex items-center gap-3 xl:gap-[20px]">
              <div className="flex gap-2 items-center">
                <IoMdStarHalf className="w-[20px] h-[20px] text-white" />
                <span className="text-[15px] leading-[22px] text-white">Best Offer</span>
              </div>
              <div className="h-8 is-hidden bg-white w-[1px]"></div>
              <div className="flex gap-2 is-hidden items-center">
                <HiLocationMarker className="w-[20px] h-[20px] text-white" />
                <span className="text-[15px] leading-[22px] text-white">Order Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader2;
