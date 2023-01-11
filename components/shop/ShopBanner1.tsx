import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import banner from "../../assets/banner/shop-banner.png";

const ShopBanner1 = () => {
  const router = useRouter();
  return (
    <div id="shop-Banner-1" className="relative">
      {router.query.id == "3" ? (
        <Image src={banner} height={189} width={1440} className="min-h-[100px]" alt="banner" />
      ) : (
        <Image src={banner} height={189} width={1146} className="min-h-[100px]" alt="banner" />
      )}
      <div className="absolute top-0 h-full w-full">
        <div className="flex flex-col h-full justify-center pl-5 md:pl-[37px]">
          <p className="md:text-[18px] text-[14px] leading-6 mb-[3px] md:leading-[27px] text-primary">
            Up To 30% Offer
          </p>
          <h2 className="md:text-[24px] sm:text-[18px] text-[16px] leading-8 md:leading-[36px] font-[600] text-[#ffffff]">
            New Accessories Collection
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner1;
