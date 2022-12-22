import React, { useState } from "react";
import { BiArrowBack, BiArrowToRight } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi2";
import ProductCard1 from "../../shared/productCard/ProductCard1";
import HomeFilter1 from "./HomeFilter1";

const TrendingProducts = () => {
  const [activeProducts, setActiveProducts] = useState<string>("newProducts");
  return (
    <>
      <div className="w-full border-b border-[#AEAEAE]">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-[#031424]  lg:text-[28px] lg:leading-[42px] text-[24px] leading-8 font-[600]">
            Trending Products
          </h2>
          <ul className="flex items-center gap-[24px] lg:gap-[37px]">
            <li className="hidden sm:block">
              <button
                onClick={() => setActiveProducts("newProducts")}
                className={`text-[#5F5F5F] hover:text-[#0070DC] text-[16px] leading-[24px] font-[500] ${
                  activeProducts == "newProducts"
                    ? "text-[#0070DC]"
                    : "hover:text-[#0070DC] text-[#5F5F5F]"
                }`}
              >
                New Products
              </button>
            </li>
            <li className="hidden sm:block">
              <button
                onClick={() => setActiveProducts("featured")}
                className={`text-[#5F5F5F] text-[16px] leading-[24px] font-[500] ${
                  activeProducts == "featured"
                    ? "text-[#0070DC]"
                    : "hover:text-[#0070DC] text-[#5F5F5F]"
                } `}
              >
                Featured
              </button>
            </li>
            <li className="hidden md:block">
              <button
                onClick={() => setActiveProducts("bestSeller")}
                className={`text-[#5F5F5F] hover:text-[#0070DC] text-[16px] leading-[24px] font-[500] ${
                  activeProducts == "bestSeller"
                    ? "text-[#0070DC]"
                    : "hover:text-[#0070DC] text-[#5F5F5F]"
                }`}
              >
                Best Seller
              </button>
            </li>
            <li>
              <button className="text-info flex items-center gap-3 text-[16px] leading-[24px] font-[500]">
                See All <HiOutlineArrowRight className="text-info w-5 h-5 " />
              </button>
            </li>
          </ul>
        </div>
        <div className="h-[6px] bg-primary w-[86.5px]"></div>
      </div>
      <div className="mt-[50px]">
        <div className="flex md:flex-row flex-col gap-y-8 gap-x-5 2xl:gap-x-[30px]">
          {/*============= filter start ============*/}
          <div className="pt-2 bg-[#F8F8F8] flex-grow-0 md:min-w-[264px] md:w-[264px] pb-7 pl-6 h-full max-h-[905px]">
            <HomeFilter1 />
          </div>
          {/*============= filter end ============*/}
          <div className="flex-grow">
            <div className="xs-responsive grid grid-cols-2 max-w-[550px] lg:max-w-full  mx-auto lg:grid-cols-3 xl:grid-cols-4 gap-y-[17px] gap-3 sm:gap-x-5 2xl:gap-x-[30px]">
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
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
