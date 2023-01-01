import React, { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import ProductCard1 from "../../components/shared/cards/ProductCard1";
import banner from "../../assets/banner/product-banner.png";
import Image from "next/image";
import Link from "next/link";

const HotNewArrivals2 = () => {
  const [activeProducts, setActiveProducts] = useState<string>("newProducts");
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-[#031424]  lg:text-[28px] lg:leading-[42px] text-[24px] leading-8 font-[600]">
            Hot New Arrivals
          </h2>
          <ul className="flex items-center gap-[24px] lg:gap-[37px]">
            <li className="hidden sm:block">
              <button
                onClick={() => setActiveProducts("trending")}
                className={`text-[#5F5F5F] hover:text-[#0070DC] text-[16px] leading-[24px] font-[500] ${
                  activeProducts == "trending"
                    ? "text-[#0070DC]"
                    : "hover:text-[#0070DC] text-[#5F5F5F]"
                }`}
              >
                Trending
              </button>
            </li>
            <li className="hidden sm:block">
              <button
                onClick={() => setActiveProducts("bestSelling")}
                className={`text-[#5F5F5F] text-[16px] leading-[24px] font-[500] ${
                  activeProducts == "bestSelling"
                    ? "text-[#0070DC]"
                    : "hover:text-[#0070DC] text-[#5F5F5F]"
                } `}
              >
                Best Selling
              </button>
            </li>
            <li className="hidden md:block">
              <button
                onClick={() => setActiveProducts("hotSelling")}
                className={`text-[#5F5F5F] hover:text-[#0070DC] text-[16px] leading-[24px] font-[500] ${
                  activeProducts == "hotSelling"
                    ? "text-[#0070DC]"
                    : "hover:text-[#0070DC] text-[#5F5F5F]"
                }`}
              >
                Hot Selling
              </button>
            </li>
            <li>
              <button className="text-info flex items-center gap-3 text-[16px] leading-[24px] font-[500]">
                See All <HiOutlineArrowRight className="text-info w-5 h-5 " />
              </button>
            </li>
          </ul>
        </div>
        <div className="flex w-full">
          <div className="h-[7px] bg-primary w-[86.5px]"></div>
          <div className="border-b w-full border-[#AEAEAE]"></div>
        </div>
      </div>
      <div className="mt-[50px] flex lg:flex-row flex-col items-center lg:items-start gap-y-8 gap-x-5 2xl:gap-x-[30px]">
        <div className="2xl:w-[557px] mt-5 order-2 lg:order-1 lg:mt-0 xl:w-[420px] md:w-[558px] sm:w-[500px] max-h-[905px] h-[905px] rounded-[8px] bg-[#F8F8F8]">
          <div className=" flex justify-center items-center h-full ">
            <figure>
              <Link href={"/shop"}>
                <Image src={banner} width={558} height={905} alt="banner image" />
              </Link>
            </figure>
          </div>
        </div>

        <div className="flex-grow lg:order-2 order-1 ">
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

export default HotNewArrivals2;
