import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import ProductCard1 from "../../shared/productCard/ProductCard1";

const FeaturedProducts = () => {
  return (
    <>
      <div className="w-full border-b border-[#AEAEAE]">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-[#031424]  lg:text-[28px] lg:leading-[42px] text-[24px] leading-8 font-[600]">
            Featured Products
          </h2>
          <button className="text-info flex items-center gap-3 text-[16px] leading-[24px] font-[500]">
            See All <HiOutlineArrowRight className="text-info w-5 h-5 " />
          </button>
        </div>
        <div className="h-[6px] bg-primary w-[86.5px]"></div>
      </div>
      <div className="mt-[50px]">
        <div className="xs-responsive grid grid-cols-2 md:grid-cols-3 max-w-[550px] md:max-w-[816px] lg:max-w-full  mx-auto lg:grid-cols-4 xl:grid-cols-5 gap-y-[17px] gap-3 sm:gap-x-5 2xl:gap-x-[30px]">
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
