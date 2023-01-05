import { count } from "console";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { TiArrowSortedUp } from "react-icons/ti";
import { ProductModel } from "../../types/types";
import { Rating5 } from "../shared/Ratings/Ratings";

const shortFeatures = [
  'Apple iMac 21.5" Radeon Pro 560X',
  "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
  "8GB RAM + 256GB SSD",
  "Retina 4K 4096 x 2304 P3 display",
  "Radeon Pro 560X 4GB Graphics",
];

interface Product {
  product: ProductModel;
}

const TopProductDetails = ({ product }: Product) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantity = (data: number): void => {
    if (data < 1) return;
    setQuantity(data);
  };

  return (
    <div className="pt-7">
      <div className="text-[16px] flex justify-center items-center w-[86px] h-[36px] bg-[#F0F9F4] text-[#00A046] rounded-[6px] leading-[24px] ">
        {product?.status}
      </div>
      <h4 className="text-info 2xl:text-[42px] xl:text-[32px] sm:text-[28px] text-[20px] my-3 2xl:leading-[63px] xl:leading-[48px] leading-[36px] font-[600]">
        {product?.name}
      </h4>
      <div className="flex gap-[8px] flex-col sm:flex-row sm:items-center">
        <div className="flex sm:justify-center sm:items-center gap-[8px]">
          <div className="flex gap-[2px] items-center justify-center">
            <Rating5 />
          </div>
          <span className="text-[16px] text-[#6A6A6A] leading-[24px]">({product?.review})</span>
        </div>
        <div className="w-[1px] h-4 bg-[#B9B9B9] hidden sm:block"></div>
        <div className="flex gap-[8px] items-center">
          <span className="sm:text-[16px] text-sm leading-[24px] text-[#6A6A6A]">
            Model: {product?.model}
          </span>{" "}
          <div className="w-[1px] h-4 bg-[#B9B9B9]"></div>
          <span className="sm:text-[16px] text-sm leading-[24px] text-[#6A6A6A]">
            SKU: {product?.SKU}
          </span>
        </div>
      </div>
      <p className="2xl:text-[42px] xl:text-[32px] sm:text-[28px] text-[20px] sm:my-6 my-4 font-[600] text-primary 2xl:leading-[63px] xl:leading-[48px] leading-9">
        ${product?.price.toFixed(2)}
      </p>
      <div>
        <ul className="flex flex-col gap-2">
          {product &&
            product?.shortFeatures.map((feature, i) => {
              return (
                <li key={i} className={"flex gap-2"}>
                  <TiArrowSortedUp className="text-info sm:text-[24px] text-[20px] rotate-90" />
                  <span className="text-[#424242] sm:text-[16px] text-sm leading-[24px] ">
                    {feature}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="flex my-6 gap-x-5">
        <div className="flex xl:w-[161px] w-[130px] min-w-[130px] px-[21px] justify-between items-center xl:h-[64px] h-[52px] border border-[#D9D9D9] rounded-[44px] ">
          <button onClick={() => handleQuantity(quantity - 1)}>
            <AiOutlineMinus className="text-[18px] text-[#3E3E3E] " />
          </button>
          <div>{quantity < 10 ? `0${quantity}` : quantity}</div>
          <button onClick={() => handleQuantity(quantity + 1)}>
            <AiOutlinePlus className="text-[18px] text-[#3E3E3E] " />
          </button>
        </div>
        <ul className="flex sm:gap-[16px] gap-2 items-center">
          <li>
            <button className="text-[#000000] xl:h-[64px] h-[52px] rounded-[32px] 2xl:w-[281px] xl:w-[220px] sm:w-[180px] w-[140px] bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary xl:text-[24px] sm:text-[20px] text-[18px] leading-[36px]">
              Add to cart
            </button>
          </li>
          <li className="xl:w-16 w-[52px] cursor-pointer transition-all duration-300 ease-linear text-[#031424] hover:bg-primary rounded-full xl:h-16 h-[52px] flex items-center justify-center bg-[#F1F1F1]">
            <AiOutlineHeart className="xl:text-[32px] text-[24px]" />
          </li>
          <li className="xl:w-16 w-[52px] cursor-pointer transition-all duration-300 ease-linear text-[#031424] hover:bg-primary rounded-full xl:h-16 h-[52px] flex items-center justify-center bg-[#F1F1F1]">
            <BiGitCompare className="rotate-90 xl:text-[32px] text-[24px]" />
          </li>
        </ul>
      </div>
      <div className="flex sm:mb-6 mb-3 gap-2 items-center">
        <span className="text-[#031424] sm:text-[16px] text-sm font-[500] leading-[24px]">
          2-day Delivery
        </span>
        <div className="w-[1px] h-4 bg-[#B9B9B9]"></div>
        <span className="text-[#6A6A6A] sm:text-[16px] text-sm leading-[24px]">
          Speedy and reliable parcel delivery!
        </span>
      </div>
      <span className="text-[#6A6A6A] sm:text-[16px] text-sm leading-[24px]">
        Tag: Apple iMac, Apple PC, Apple Desktop
      </span>
      <div className="mt-6">
        <div className="flex sm:gap-[16px] gap-2">
          <div className="bg-[#3B5998] cursor-pointer flex justify-center items-center rounded-[32.86px] sm:w-[43px] w-8 sm:h-[43px] h-8">
            <FaFacebookF className="text-[#ffffff] sm:text-[20px] text-[16px]" />
          </div>
          <div className="bg-[#1DA1F2] cursor-pointer flex justify-center items-center rounded-[32.86px] sm:w-[43px] w-8 sm:h-[43px] h-8">
            <BsTwitter className="text-[#ffffff] sm:text-[20px] text-[16px]" />
          </div>
          <div className="bg-[#E60023] cursor-pointer flex justify-center items-center rounded-[32.86px] sm:w-[43px] w-8 sm:h-[43px] h-8">
            <BsInstagram className="text-[#ffffff] sm:text-[20px] text-[16px]" />
          </div>
          <div className="bg-[#0077B5] cursor-pointer flex justify-center items-center rounded-[32.86px] sm:w-[43px] w-8 sm:h-[43px] h-8">
            <SiMinutemailer className="text-[#ffffff] sm:text-[20px] text-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProductDetails;
