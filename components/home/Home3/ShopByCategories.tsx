import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { categories } from "../../../database/data";
import CategoryCard from "../../shared/cards/CategoryCard";

const ShopByCategories = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-[#313131]  lg:text-[28px] lg:leading-[42px] text-[24px] leading-8 font-[600]">
            Shop by categories
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
      <div className="mt-[50px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:gap-[30px] xl:gap-[26px] gap-5 ">
          {categories.map((category) => (
            <CategoryCard key={category?._id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopByCategories;
