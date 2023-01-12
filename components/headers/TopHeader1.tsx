import Image from "next/image";
import React from "react";
import mail from "../../assets/icons/mail.svg";
import location from "../../assets/icons/location.svg";
import user from "../../assets/icons/user.svg";
import { FiChevronDown } from "react-icons/fi";

const TopHeader1 = () => {
  return (
    <div className="py-2 flex justify-center sm:justify-between items-center">
      <ul className="sm:flex gap-3 hidden">
        <li className="flex capitalize items-center gap-1">
          <Image src={mail} width={16} height={16} alt="mail icons" />
          <span className="text-[#FFFFFF] text-xs leading-[18px]">info@demo.com</span>
        </li>
        <div className="h-[25.5px] w-[1px] bg-[rgba(255,255,255,0.24)]"></div>
        <li className="flex capitalize cursor-pointer items-center gap-1">
          <Image src={location} width={16} height={16} alt="location icons" />
          <span className="text-[#FFFFFF] text-xs leading-[18px]">Track Order</span>
        </li>
      </ul>
      <ul className="flex gap-3">
        <li className="flex capitalize cursor-pointer items-center gap-1 text-[#FFFFFF] text-xs leading-[18px]">
          <span>USD</span> <FiChevronDown className="w-3 h-3" />
        </li>
        <div className="h-[25.5px] w-[1px] bg-[rgba(255,255,255,0.24)]"></div>
        <li className="flex capitalize cursor-pointer items-center gap-1 text-[#FFFFFF] text-xs leading-[18px]">
          <span>English</span> <FiChevronDown className="w-3 h-3" />
        </li>
        <div className="h-[25.5px] w-[1px] bg-[rgba(255,255,255,0.24)]"></div>
        <li className="flex cursor-pointer capitalize items-center gap-1">
          <Image src={user} width={16} height={16} alt="user icons" />
          <span className="text-[#FFFFFF] text-xs leading-[18px]">My account</span>
        </li>
      </ul>
    </div>
  );
};

export default TopHeader1;
