import Image from "next/image";
import React from "react";
import ProductCard2 from "../../shared/cards/ProductCard2";
import HomeFilter2 from "./HomeFilter2";
import banner from "../../../assets/banner/full-width-banner-1.png";
import { HiOutlineArrowRight } from "react-icons/hi2";

const SpecialProducts2 = () => {
  return (
    <div className="mt-[50px]">
      <div className="flex md:flex-row flex-col gap-y-8 gap-x-5 2xl:gap-x-[30px]">
        {/*============= filter start ============*/}
        <div className="pt-5 rounded-[8px] bg-[#F8F8F8] flex-grow-0 md:min-w-[264px] md:w-[264px] pb-7 px-6 h-full max-h-[766px]">
          <HomeFilter2 />
        </div>
        {/*============= filter end ============*/}
        <div className="flex-grow">
          <div>
            <Image src={banner} height={254} width={1146} alt="banner" />
          </div>
          <div className="w-full mb-[50px] mt-[23px]">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-[#031424]  lg:text-[28px] lg:leading-[42px] text-[24px] leading-8 font-[600]">
                Special Products
              </h2>
              <button className="text-info flex items-center gap-3 text-[16px] leading-[24px] font-[500]">
                See All <HiOutlineArrowRight className="text-info w-5 h-5 " />
              </button>
            </div>
            <div className="flex w-full">
              <div className="h-[7px] bg-primary w-[86.5px]"></div>
              <div className="border-b w-full border-[#AEAEAE]"></div>
            </div>
          </div>
          <div className="xs-responsive  grid grid-cols-2 max-w-[550px] lg:max-w-full  mx-auto lg:grid-cols-3 xl:grid-cols-4 gap-y-[17px] gap-3 sm:gap-x-5 2xl:gap-x-[30px]">
            <ProductCard2 />
            <ProductCard2 />
            <ProductCard2 />
            <ProductCard2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts2;
