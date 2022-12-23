import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare, BiSearch } from "react-icons/bi";
import img1 from "../../../assets/product-Image/product-1.png";
import img2 from "../../../assets/product-Image/product-2.png";
import { Rating5 } from "../Ratings/Ratings";

interface ExtraStyle {
  extraStyle?: string;
}

const ProductCard1 = ({ extraStyle }: ExtraStyle) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="max-w-[265px] mx-auto overflow-hidden w-full h-[443px]"
    >
      <div className="border border-[#fff0] h-full ease-linear duration-300 transition-all  hover:border-primary">
        <div className="w-full overflow-hidden relative bg-[#F8F8F8] h-[298px] flex justify-center items-center">
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

          <div className={`absolute bottomToTop ${isHover ? "bottomToTopAnimate" : ""} `}>
            <ul className="flex gap-[10px] items-center">
              <li className="w-8 transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full h-8 flex items-center justify-center border border-primary">
                <BiSearch className="text-[16px] " />
              </li>
              <li className="w-8 transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full h-8 flex items-center justify-center border border-primary">
                <AiOutlineHeart className="text-[16px]" />
              </li>
              <li className="w-8 transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full h-8 flex items-center justify-center border border-primary">
                <BiGitCompare className="rotate-90 text-[16px]" />
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-5 px-[10px]">
          <h3 className="text-lg leading-[27px] text-center font-[600] text-info">
            Apple Watch Series 6 A2292 (M00D3)
          </h3>
          <div className="relative mt-[5px]">
            <div className={`${isHover ? "scale-0" : "scale-100"}`}>
              <div className="flex justify-center items-center gap-[10px]">
                <div className="flex gap-[2px] items-center justify-center">
                  <Rating5 />
                </div>
                <span className="2xl:text-[16px] text-[14px] text-[#808080] font-[500]  leading-[24px]">
                  (15 reviews)
                </span>
              </div>
              <p className="text-[16px] mt-[5px] leading-6 font-[500] text-[#FD8D03] text-center">
                $320.00
              </p>
            </div>
            <div
              className={`absolute bottomToTop w-full
             mx-auto ${isHover ? "bottomToTopAnimate" : ""} `}
            >
              <button className="text-[#000000] flex justify-center items-center h-[42px] rounded-[32px] mx-auto max-w-[158px] w-full bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary text-[16px] leading-[24px] ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;
