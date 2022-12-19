import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoChevronDownSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import NavContent from "./NavContent";

const BottomHeader1 = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  return (
    <div className="pb-5 hidden lg:flex items-center justify-between">
      <div className=" max-w-[250px] xl:max-w-[289px] w-full">
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
