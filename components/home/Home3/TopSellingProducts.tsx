import React, { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import ProductCard1 from "../../shared/cards/ProductCard1";
import ProductCard2 from "../../shared/cards/ProductCard2";
import DiscountOfferCard1 from "../home2/DiscountOfferCard1";
import DiscountOfferCard2 from "../home2/DiscountOfferCard2";

const TopSellingProducts = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-[#031424]  lg:text-[28px] lg:leading-[42px] text-[24px] leading-8 font-[600]">
            Top Selling Products
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
      <div className="mt-[50px] flex lg:flex-row flex-col items-center lg:items-start gap-y-8 gap-x-5 2xl:gap-x-[30px]">
        <div className="2xl:w-[557px] mt-5 order-2 lg:mt-0 xl:w-[420px] md:w-[558px] sm:w-[500px] max-h-[905px] h-[905px] rounded-[8px] bg-[#F8F8F8]">
          <div className=" flex justify-center items-center h-full ">
            <DiscountOfferCard2 />
          </div>
        </div>

        <div className="flex-grow order-1 ">
          <div className="grid xs-responsive grid-cols-2 md:grid-cols-3 lg:grid-cols-2 max-w-[550px] md:max-w-[834px] lg:max-w-[558px] xl:max-w-full  mx-auto xl:grid-cols-3 gap-y-[17px] gap-3 sm:gap-x-5 lg:gap-x-[30px]">
            <ProductCard1 />
            <ProductCard1 />
            <ProductCard1 />
            <ProductCard1 />
            <ProductCard1 />
            <ProductCard1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSellingProducts;
