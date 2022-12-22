import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoChevronDownSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import NavContent from "./NavContent";
import { IoMdStarHalf } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";

const BottomHeader2 = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <div className=" bg-[#041E42] hidden lg:block">
      <div className="max-w-[1443px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
        <div className="flex items-center justify-between">
          <div className=" max-w-[250px] xl:max-w-[290px] w-full">
            <button
              onClick={() => setToggle(!toggle)}
              className=" bg-primary flex justify-between items-center px-3 text-secondary w-full h-[60px]"
            >
              <span className="flex items-center gap-2">
                <HiBars3 className="w-[21px] h-[21px] " />
                <span className="text-[16px] font-[500] leading-[26px]"> All Categories</span>{" "}
              </span>
              <IoChevronDownSharp
                className={`w-5 h-5 transition-all duration-200 ease-linear ${
                  toggle ? "rotate-0" : "rotate-180"
                }`}
              />
            </button>
          </div>
          {/* ========== nav link start ========= */}
          <div className="h-full">
            <NavContent>{"text-white"}</NavContent>
          </div>
          {/* ========== nav link end ========= */}
          <div>
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center">
                <IoMdStarHalf className="w-[20px] h-[20px] text-white" />
                <span className="text-[15px] leading-[22px] text-white">Best Offer</span>
              </div>
              <div className="h-8 bg-white w-[1px]"></div>
              <div className="flex items-center">
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
