import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare, BiSearch } from "react-icons/bi";
import { Rating5 } from "../Ratings/Ratings";
import watch from "../../../assets/product-Image/product-3.png";
import Image from "next/image";

const SpecialProductCard = () => {
  return (
    <div>
      <figure className="">
        <Image
          src={watch}
          width={382}
          height={382}
          className="mx-auto "
          alt="special offer product"
        />
      </figure>
      <div className="mt-[47px]">
        <ul className="flex gap-[10px] justify-center items-center">
          <li className="h-14 w-14 transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full  flex items-center justify-center border border-primary">
            <BiSearch className="text-[28px]" />
          </li>
          <li className="h-14 w-14  transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full flex items-center justify-center border border-primary">
            <AiOutlineHeart className="text-[28px]" />
          </li>
          <li className="h-14 w-14  transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full flex items-center justify-center border border-primary">
            <BiGitCompare className="rotate-90 text-[28px]" />
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="2xl:text-[34px] xl:text-[28px] text-[34px] leading-[52px] font-[600] text-center text-[#1E1E20] ">
          Smart Watch OS 3
        </h3>
        <div className="flex justify-center mt-[10px] items-center gap-[10px]">
          <div className="flex items-center justify-center">
            <Rating5 height={"2xl:h-[30.86px] h-[28px]  "} width={"2xl:w-[30.86px] w-[28px] "} />
          </div>
          <span className="2xl:text-[30.86px] text-[24px] text-[#808080] font-[500]  leading-[46.29px]">
            (15 reviews )
          </span>
        </div>
        <p className="text-[#FD8D03] pb-10 font-[500] mt-[10px] text-center text-[30.86px] leading-[46px] ">
          $320.00
        </p>
        <button className="text-[#000000] flex justify-center items-center h-[69px] rounded-[32px] mx-auto max-w-[285px] w-full bg-gradient-to-r font-[500] from-[#f9c536] to-[#f9c536] btn-animate  bg-primary text-[24px] leading-[36px] ">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SpecialProductCard;
