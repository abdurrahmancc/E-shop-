import Image from "next/image";
import React from "react";
import img from "../../assets/banner/smart-banner-2.png";
const { Fade } = require("react-reveal");

const SmartBanner4 = () => {
  return (
    <div className="relative">
      <Image src={img} width={1440} height={154} className="min-h-[80px]" alt="discount banner" />
      <div className="absolute flex justify-center items-center top-0 h-full w-full">
        <div className="text-center">
          <Fade top delay={100}>
            <p className="md:text-[16px] text-sm text-center leading-[24px] text-[#FFFFFF] ">
              Get Discount On 30% Offer
            </p>
          </Fade>
          <Fade bottom delay={100}>
            <h5 className="md:text-[24px] text-[20px] leading-[36px] text-center  font-[600] text-white">
              New Apple ipad Collection
            </h5>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SmartBanner4;
