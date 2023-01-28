import React from "react";
import { ProductModel } from "../../../types/types";
import HorizontalCard1 from "../../shared/cards/HorizontalCard1";

interface Products {
  products: ProductModel[];
}

const TopTrendingRecentlyGroupSec = ({ products }: Products) => {
  const topSellingProducts = products?.slice(2, 5);
  const trendingProducts = products?.slice(5, 8);
  const recentlyAddedProducts = products?.slice(8, 11);
  const topRatedProducts = products?.slice(11, 14);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:gap-10 gap-5 gap-y-10">
      <div>
        <div className="w-full">
          <div className="pb-4">
            <h2 className="text-[#031424] lg:text-[28px] lg:leading-[42px] sm:text-[24px] text-[18px] leading-8 font-[600]">
              Top Selling
            </h2>
          </div>
          <div className="flex w-full">
            <div className="h-[7px] bg-primary w-[86.5px]"></div>
            <div className="border-b w-full border-[#AEAEAE]"></div>
          </div>
        </div>
        <div className="mt-[50px] max-w-[550px] md:max-w-[816px] lg:max-w-full mx-auto w-full relative">
          <div className="flex flex-col gap-[26px]">
            {topSellingProducts &&
              topSellingProducts.map((product) => (
                <HorizontalCard1 key={product?._id} product={product} />
              ))}
          </div>
        </div>
      </div>
      <div>
        <div className="w-full">
          <div className="pb-4">
            <h2 className="text-[#031424] lg:text-[28px] lg:leading-[42px] sm:text-[24px] text-[18px] leading-8 font-[600]">
              Trending Products
            </h2>
          </div>
          <div className="flex w-full">
            <div className="h-[7px] bg-primary w-[86.5px]"></div>
            <div className="border-b w-full border-[#AEAEAE]"></div>
          </div>
        </div>
        <div className="mt-[50px] max-w-[550px] md:max-w-[816px] lg:max-w-full mx-auto w-full relative">
          <div className="flex flex-col gap-[26px]">
            {trendingProducts &&
              trendingProducts.map((product) => (
                <HorizontalCard1 key={product?._id} product={product} />
              ))}
          </div>
        </div>
      </div>
      <div>
        <div className="w-full">
          <div className="pb-4">
            <h2 className="text-[#031424] lg:text-[28px] lg:leading-[42px] sm:text-[24px] text-[18px] leading-8 font-[600]">
              Recently added
            </h2>
          </div>
          <div className="flex w-full">
            <div className="h-[7px] bg-primary w-[86.5px]"></div>
            <div className="border-b w-full border-[#AEAEAE]"></div>
          </div>
        </div>
        <div className="mt-[50px] max-w-[550px] md:max-w-[816px] lg:max-w-full mx-auto w-full relative">
          <div className="flex flex-col gap-[26px]">
            {recentlyAddedProducts &&
              recentlyAddedProducts.map((product) => (
                <HorizontalCard1 key={product?._id} product={product} />
              ))}
          </div>
        </div>
      </div>
      <div>
        <div className="w-full">
          <div className="pb-4">
            <h2 className="text-[#031424] lg:text-[28px] lg:leading-[42px] sm:text-[24px] text-[18px] leading-8 font-[600]">
              Top Rated
            </h2>
          </div>
          <div className="flex w-full">
            <div className="h-[7px] bg-primary w-[86.5px]"></div>
            <div className="border-b w-full border-[#AEAEAE]"></div>
          </div>
        </div>
        <div className="mt-[50px] max-w-[550px] md:max-w-[816px] lg:max-w-full mx-auto w-full relative">
          <div className="flex flex-col gap-[26px]">
            {topRatedProducts &&
              topRatedProducts.map((product) => (
                <HorizontalCard1 key={product?._id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTrendingRecentlyGroupSec;
