import Image from "next/image";
import React from "react";
import mail from "../../assets/icons/mail.svg";
import location from "../../assets/icons/location.svg";
import { FiChevronDown } from "react-icons/fi";

const TopHeader2 = () => {
  return (
    <div className="max-w-[1443px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
      <div className="py-2 flex justify-center sm:justify-between items-center">
        <ul className="lg:flex lg:gap-3 gap-1 hidden">
          <li className="flex capitalize items-center gap-1">
            <Image src={mail} width={16} height={16} alt="mail icons" />
            <span className="text-[#424242] text-xs leading-[18px]">info@demo.com</span>
          </li>
          <div className="h-[25.5px] w-[1px] bg-[rgba(255,255,255,0.24)]"></div>
          <li className="flex capitalize items-center gap-1">
            <Image src={location} width={16} height={16} alt="location icons" />
            <span className="text-[#424242] text-xs leading-[18px]">Track Order</span>
          </li>
        </ul>
        <div className="text-[12px] mx-auto leading-[18px] text-[#424242]">
          Get discount 30% off your first order
        </div>
        <ul className=" lg:flex hidden lg:gap-3 gap-1">
          <li className="flex capitalize items-center gap-1 text-[#424242] text-xs leading-[18px]">
            <span>USD</span> <FiChevronDown className="w-3 h-3" />
          </li>
          <div className="h-[25.5px] w-[1px] bg-[rgba(255,255,255,0.24)]"></div>
          <li className="flex capitalize items-center gap-1 text-[#424242] text-xs leading-[18px]">
            <span>English</span> <FiChevronDown className="w-3 h-3" />
          </li>
          <div className="h-[25.5px] w-[1px] bg-[rgba(255,255,255,0.24)]"></div>
          <li className="flex text-[12px] leading-[18px] text-[#424242] capitalize items-center gap-1">
            <button className="text-[12px] leading-[18px] text-[#424242]">Login</button>/
            <button className="text-[12px] leading-[18px] text-[#424242]">Register</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader2;
