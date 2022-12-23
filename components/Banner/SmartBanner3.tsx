import Image from "next/image";
import React from "react";
import img from "../../assets/banner/full-width-banner-2.png";
const { Fade } = require("react-reveal");

const SmartBanner3 = () => {
  return (
    <div className="relative">
      <Image
        src={img}
        width={1438}
        height={262}
        className=" min-h-[170px] md:min-h-[230px]"
        alt="discount banner"
      />
      <div className="absolute flex justify-center items-center top-0 h-full w-full">
        <div className="text-center">
          <Fade top delay={100}>
            <p className="xl:text-[20px] sm:text-[16px] text-[14px] text-center leading-[30px] text-[#F1F1F1] ">
              Get Discount On 30% Offer
            </p>
          </Fade>
          <Fade bottom delay={100}>
            <h5 className="xl:text-[34px] md:text-[28px] text-[20px] sm:text-[24px] sm:leading-[32px] md:leading-[40px] xl:mt-1 mb-5 text-center xl:leading-[51px] font-[600] text-white">
              New Apple Accessories
            </h5>
          </Fade>
          <Fade bottom delay={600}>
            <button className="bg-[#FCB700] mx-auto xl:w-[123px] w-[100px] h-[36px] text-[#313131] text-sm xl:text-[16px] leading-6 rounded-[37px] flex justify-center capitalize items-center xl:h-[46px]">
              shop now
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SmartBanner3;
