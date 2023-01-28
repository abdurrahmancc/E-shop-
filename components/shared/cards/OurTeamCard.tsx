import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import user1 from "../../../assets/users/user-6.png";
import user2 from "../../../assets/users/user-7.png";
import user3 from "../../../assets/users/user-8.png";
import user4 from "../../../assets/users/user-9.png";
import user5 from "../../../assets/users/user-10.png";
import { BsInstagram, BsTwitter } from "react-icons/bs";

type UserModel = {
  user: number;
};

const OurTeamCard = ({ user }: UserModel) => {
  const users = [user1, user2, user3, user4, user5];
  return (
    <div className="mx-auto">
      <figure>
        <Image width={263} height={273} className="rounded-[8px]" alt="user" src={users[user]} />
      </figure>
      <div className="flex mt-[-20px] gap-[14px] items-center justify-center">
        <div className="w-[35px] bg-primary flex justify-center items-center h-[35px] ">
          <FaFacebookF className="text-[18px] text-[#031424]" />
        </div>
        <div className="w-[35px] bg-primary flex justify-center items-center h-[35px] ">
          <BsTwitter className="text-[18px] text-[#031424]" />
        </div>
        <div className="w-[35px] bg-primary flex justify-center items-center h-[35px] ">
          <BsInstagram className="text-[18px] text-[#031424]" />
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
