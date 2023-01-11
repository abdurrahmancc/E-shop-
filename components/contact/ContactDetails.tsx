import React from "react";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { RiPhoneFill } from "react-icons/ri";

const ContactDetails = () => {
  return (
    <div className="md:max-w-[474px] w-full">
      <h2 className="lg:text-[45px] text-[24px] md:text-[32px] pb-2 md:pb-3 lg:pb-[22px] leading-[54px] font-[600] text-[#031424]">
        Keep in Touch
      </h2>
      <div className="w-[55px] h-[3px] bg-[#FFCA42]"></div>
      <p className="mt-[27px] text-[16px] leading-7 text-[#575757]">
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration
      </p>
      <div className="mt-[30px] flex flex-col gap-[26px]">
        <div className="flex md:max-w-[474px] pl-5 lg:pl-[42px] w-full items-center bg-[#F9F9F9] gap-[15px] py-[27px]">
          <div className="md:w-[53px] md:h-[53px] w-10 h-10 flex justify-center items-center rounded-full bg-primary">
            <CiMail className="md:text-[24px] text-[18px] text-[#031424]" />
          </div>
          <div className="flex flex-col">
            <label className="md:text-[20px] text-[16px] leading-[26px] text-[#909090] font-[500]">
              Email Address:
            </label>
            <span className="md:text-[20px] text-[18px] leading-[26px] text-[#374043] font-[500]">
              Contactinfo@gmailcom
            </span>
          </div>
        </div>
        <div className="flex md:max-w-[474px] pl-5 lg:pl-[42px] w-full items-center bg-[#F9F9F9] gap-[15px] py-[27px]">
          <div className="md:w-[53px] md:h-[53px] w-10 h-10 flex justify-center items-center rounded-full bg-primary">
            <RiPhoneFill className="md:text-[24px] text-[18px] text-[#031424]" />
          </div>
          <div className="flex flex-col">
            <label className="md:text-[20px] text-[16px] leading-[26px] text-[#909090] font-[500]">
              Phone Number:
            </label>
            <span className="md:text-[20px] text-[18px] leading-[26px] text-[#374043] font-[500]">
              + 00 (017) 8475 24853
            </span>
          </div>
        </div>
        <div className="flex md:max-w-[474px] pl-5 lg:pl-[42px] w-full items-center bg-[#F9F9F9] gap-[15px] py-[27px]">
          <div className="md:w-[53px] md:h-[53px] w-10 h-10 flex justify-center items-center rounded-full bg-primary">
            <IoLocationSharp className="md:text-[24px] text-[18px] text-[#031424]" />
          </div>
          <div className="flex flex-col">
            <label className="md:text-[20px] text-[16px] leading-[26px] text-[#909090] font-[500]">
              Our Location:
            </label>
            <span className="md:text-[20px] text-[18px] leading-[26px] text-[#374043] font-[500]">
              New York, 4538 street 1234
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
