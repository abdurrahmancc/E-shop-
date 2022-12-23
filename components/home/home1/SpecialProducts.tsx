import Image from "next/image";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import ProductCard1 from "../../shared/cards/ProductCard1";
import watch from "../../../assets/product-Image/product-3.png";
import { BiGitCompare, BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { Rating5 } from "../../shared/Ratings/Ratings";
import SpecialProductCard from "../../shared/cards/SpecialProductCard1";

const SpecialProducts = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center lg:items-start gap-y-8 gap-x-5 2xl:gap-x-[30px]">
      <div className="2xl:w-[558px] lg:order-1 mt-5 lg:mt-0 order-2 xl:w-[420px] md:w-[558px] sm:w-[500px] max-h-[1017px] h-[1017px] bg-[#F8F8F8]">
        <div className=" flex py-[110px] justify-center items-center h-full ">
          <SpecialProductCard />
        </div>
      </div>
      <div className="w-full lg:max-w-[558px] xl:max-w-[852px] lg:order-2 order-1">
        <div className="w-full border-b border-[#AEAEAE]">
          <div className="flex items-center justify-between pb-4">
            <h2 className="text-[#031424]  lg:text-[28px] lg:leading-[42px] text-[24px] leading-8 font-[600]">
              Special Products
            </h2>

            <button className="text-info flex items-center gap-3 text-[16px] leading-[24px] font-[500]">
              See All <HiOutlineArrowRight className="text-info w-5 h-5 " />
            </button>
          </div>
          <div className="h-[6px] bg-primary w-[86.5px]"></div>
        </div>
        <div className="mt-[50px]">
          <div className="flex-grow">
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
      </div>
    </div>
  );
};

export default SpecialProducts;
