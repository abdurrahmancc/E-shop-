import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import user1 from "../../../assets/users/user-6.png";

const OurTeamCard = () => {
  return (
    <div className="mx-auto">
      <figure>
        <Image width={263} height={273} className="rounded-[8px]" alt="user" src={user1} />
      </figure>
      <div className="flex mt-[-20px] gap-[14px] items-center justify-center">
        <div className="w-[35px] bg-primary flex justify-center items-center h-[35px] ">
          <FaFacebookF className="text-[18px] text-[#031424]" />
        </div>
        <div className="w-[35px] bg-primary flex justify-center items-center h-[35px] ">
          <FaFacebookF className="text-[18px] text-[#031424]" />
        </div>
        <div className="w-[35px] bg-primary flex justify-center items-center h-[35px] ">
          <FaFacebookF className="text-[18px] text-[#031424]" />
        </div>
      </div>
      <div className="mt-[26px]">
        <h4 className="text-[#424242] font-[600] text-[24px] leading-9 text-center">Larry Royer</h4>
        <p className="text-[16px] mt-1 text-center leading-6 text-[#424242]">CEO & Founder</p>
      </div>
    </div>
  );
};

export default OurTeamCard;
