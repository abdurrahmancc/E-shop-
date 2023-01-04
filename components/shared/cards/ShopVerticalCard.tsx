import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare, BiSearch } from "react-icons/bi";
import img1 from "../../../assets/product-Image/product-1.png";
import { Rating5 } from "../Ratings/Ratings";

const ShopVerticalCard = () => {
  return (
    <div className="border py-[17px] pl-5 pr-[25px] border-[#D9D9D9] hover:border-primary">
      <div className="flex items-center gap-5">
        <div className="md:w-[226px] w-[210px] flex justify-center items-center md:h-[262px] h-[240px] bg-[#F8F8F8]">
          <figure>
            <Image
              src={img1}
              width={212}
              height={212}
              className={`md:max-w-[212px] md:max-h-[212px] max-w-[190px] max-h-[190px]`}
              alt="product image"
            />
          </figure>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-[12px]">
            <div className="flex gap-[2px] items-center justify-center">
              <Rating5 width="md:w-[20px] w-[16px]" height="md:h-[20px] h-[16px]" />
            </div>
            <span className="md:text-[20px] text-[16px] text-[#424242] font-[400]  md:leading-[30px] leading-6">
              (12)
            </span>
          </div>
          <h2 className="text-[#0070DC] mt-1 md:text-[24px] text-[20px] md:leading-[36px] leading-[28px] font-[600]">
            Apple iMac 21.5-inch Full HD Display
          </h2>
          <p className="md:text-[20px] text-[16px] w-full md:leading-[30px] leading-6 border-b border-[#D2D2D2] md:pb-5 pb-3 md:mt-3 mt-2 text-[#FD8D03] font-[500]">
            $320.00
          </p>
          <p className="text-[14px] md:mt-5 mt-3 leading-[21px] text-[#585858]">
            Lorem ipsum dolor sit amet consectetur. Aliquam facilisis ullamcorper sed senectus
            faucibus.
          </p>

          <div className="flex items-center md:mt-5 mt-3 gap-5">
            <ul className="flex md:gap-[10px] gap-[6px] items-center">
              <li className="md:w-8 w-7 transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full md:h-8 h-7 flex items-center justify-center border border-primary">
                <BiSearch className="md:text-[16px] text-sm" />
              </li>
              <li className="md:w-8 w-7 transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full md:h-8 h-7 flex items-center justify-center border border-primary">
                <AiOutlineHeart className="md:text-[16px] text-sm" />
              </li>
              <li className="md:w-8 w-7 transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full md:h-8 h-7 flex items-center justify-center border border-primary">
                <BiGitCompare className="md:text-[16px] text-sm" />
              </li>
            </ul>
            <button className="text-[#000000] h-[42px] max-w-[158px] min-w-[100px] w-full bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary md:text-[16px] text-sm leading-[24px] ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopVerticalCard;
