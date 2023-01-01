import Image from "next/image";
import React from "react";
import mail from "../../assets/icons/mail.svg";
import location from "../../assets/icons/location.svg";
import { FiChevronDown } from "react-icons/fi";
import { FaShippingFast } from "react-icons/fa";

const TopHeader3 = () => {
  return (
    <div className="border-b bg-[#041E42] border-[rgba(255,255,255,0.24)]">
      <div className="max-w-[1443px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
        <div className="py-2 flex justify-center sm:justify-between items-center">
          <ul className="lg:flex items-center lg:gap-3 gap-1 hidden">
            <li className="text-[#FFFFFF] text-xs leading-[18px]">Eshop@gmail.com</li>
            <div className="h-[25.5px] w-[1px] bg-[rgba(255,255,255,0.24)]"></div>
            <li className="text-[#FFFFFF] text-xs leading-[18px]">Order Tracking</li>
          </ul>
          <div className="text-[12px] mx-auto leading-[18px] text-[#FFFFFF]">
            Free Shipping On All order Over $200
          </div>
          <ul className=" lg:flex hidden lg:gap-3 gap-1">
            <li className="flex capitalize items-center gap-1 text-[#FFFFFF] text-xs leading-[18px]">
              <span>USD</span> <FiChevronDown className="w-3 h-3" />
            </li>
            <div className="h-[25.5px] w-[1px] bg-[rgba(255,255,255,0.24)]"></div>
            <li className="flex capitalize items-center gap-1 text-[#FFFFFF] text-xs leading-[18px]">
              <span>English</span> <FiChevronDown className="w-3 h-3" />
            </li>
            <div className="h-[25.5px] w-[1px] bg-[rgba(255,255,255,0.24)]"></div>
            <li className="flex text-[12px] leading-[18px] text-[#FFFFFF] capitalize items-center gap-1">
              <span>Need Help?</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader3;
