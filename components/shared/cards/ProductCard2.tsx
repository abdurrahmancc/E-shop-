import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare, BiSearch } from "react-icons/bi";
import img1 from "../../../assets/product-Image/product-1.png";
import img2 from "../../../assets/product-Image/product-2.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Rating5 } from "../Ratings/Ratings";

interface ExtraStyle {
  extraStyle?: string;
}

const ProductCard2 = ({ extraStyle }: ExtraStyle) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="max-w-[264px] mx-auto overflow-hidden w-full h-[373px]"
    >
      <div className="border overflow-hidden rounded-[8px] relative h-full border-[#EDEDED]">
        <div
          className={`w-full flex justify-center transition-all duration-[0.3s] ease-out items-center h-[274px] rounded-t-[8px] bg-[#F8F8F8] ${
            isHover ? "h-[228px]" : ""
          }`}
        >
          <figure className="max-w-[212px] max-h-[212px] overflow-hidden">
            {isHover ? (
              <Image
                src={img2}
                className={`transition-all duration-300 ease-linear scale-100 ${
                  isHover ? "scale-110" : ""
                }`}
                width={212}
                height={212}
                alt="product image"
              />
            ) : (
              <Image
                className={`transition-all duration-300 ease-linear scale-100 ${
                  isHover ? "scale-110" : ""
                }`}
                src={img1}
                width={212}
                height={212}
                alt="product image"
              />
            )}
          </figure>
        </div>
        <div className="p-4">
          <h3 className="text-[14px] leading-[21px] font-[600] text-info ">
            Apple iMac 21.5-inch Full HD Display
          </h3>
          <div className={`flex justify-between`}>
            <div className="flex justify-center items-center gap-[4px]">
              <div className="flex gap-[2px] items-center justify-center">
                <Rating5 />
              </div>
              <span className="text-[14px] text-[#808080] leading-[21px]">(15)</span>
            </div>
            <p className="text-[16px] mt-[5px] leading-6 font-[500] text-[#FD8D03] text-center">
              $320.00
            </p>
          </div>
        </div>
        <div className={`absolute w-full bottomToTop ${isHover ? "bottomToTopAnimate" : ""} `}>
          <div className="bg-[#F8F8F8] h-[52px] w-full">
            <ul className="flex gap-[10px] justify-center h-full items-center">
              <li className="w-[27.03px] h-[27.03px] transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full flex items-center justify-center border border-primary">
                <BiSearch className="text-[13px] " />
              </li>
              <li className="w-[27.03px] h-[27.03px] transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full flex items-center justify-center border border-primary">
                <AiOutlineHeart className="text-[13px]" />
              </li>
              <li className="w-[27.03px] h-[27.03px] transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full flex items-center justify-center border border-primary">
                <BiGitCompare className="rotate-90 text-[13px]" />
              </li>
              <li className="w-[27.03px] h-[27.03px] transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full flex items-center justify-center border border-primary">
                <HiOutlineShoppingBag className="text-[13px]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
