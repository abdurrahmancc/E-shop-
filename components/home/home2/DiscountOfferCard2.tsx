import Image from "next/image";
import React from "react";
import watch from "../../../assets/product-Image/product-5.png";
import { Rating5 } from "../../shared/Ratings/Ratings";
import Timer from "./Timer";

const DiscountOfferCard2 = () => {
  return (
    <div className=" flex justify-center items-center h-full">
      <div className="max-w-[383px] pt-[50px] h-[905px] mx-auto flex flex-col">
        <figure>
          <Image
            src={watch}
            width={380}
            height={380}
            className="mx-auto max-w-[380px] min-h-[380px] max-h-[380px] w-full h-full"
            alt="special offer product"
          />
        </figure>
        <div className="text-center mt-[31px]">
          <Timer />
          <h2 className="lg:text-[34.71px] text-[30px] mt-[29px] text-[#031424] font-[600] leading-[52.07px] text-center">
            Macbook Pro 2023
          </h2>
          <div className="flex mt-[10px] justify-center items-center gap-[19.29px]">
            <div className="flex gap-[2px] lg:gap-[3.86px] items-center justify-center">
              <Rating5 width="lg:w-[30.86px] w-[20px]" height="lg:h-[30.86px] h-[20px]" />
            </div>
            <span className="lg:text-[30.86px] text-[20px] text-[#808080] font-[500]  leading-[46.29px]">
              (15 reviews)
            </span>
          </div>
          <p className="text-[30.86px] mb-[30px] mt-[10px] leading-[46.29px] font-[500] text-[#FD8D03] text-center">
            $320.00
          </p>

          <button className="text-[#031424] flex justify-center items-center h-[64px] rounded-[32px] mx-auto max-w-[243px] w-full bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary font-[500] text-[20px] leading-[30px] ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountOfferCard2;
