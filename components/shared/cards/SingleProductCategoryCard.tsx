import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import img1 from "../../../assets/banner/computer.png";
import img2 from "../../../assets/banner/watch.png";
import img3 from "../../../assets/banner/laptop.png";

const SingleProductCategoryCard = () => {
  const { push } = useRouter();
  return (
    <div className="flex 2xl:gap-[30px] xl:gap-[26px] gap-5 ">
      <div className="flex justify-between h-[240px] items-center max-w-[459px] rounded-[8px] border xl:px-10 px-5 border-[#E1E1E1] w-full">
        <div>
          <h5 className="text-[16px] leading-[24px] font-[500] text-[#313131]">Desktop</h5>
          <ul className="flex flex-col mt-4 gap-y-[6px]">
            <li className="text-[12px] text-[#424242] leading-[22px]">Brand pC</li>
            <li className="text-[12px] text-[#424242] leading-[22px]">Desktop Parts</li>
            <li className="text-[12px] text-[#424242] leading-[22px]">Apple imac</li>
            <li className="text-[12px] text-[#424242] leading-[22px]">Apple mac studio</li>
            <li
              onClick={() => push("/shop")}
              className="text-[12px] cursor-pointer gap-2 flex items-center mt-[10px] font-[600] text-info leading-[22px]"
            >
              See All Desktop <BsArrowRight className="text-[20px]" />{" "}
            </li>
          </ul>
        </div>
        <figure>
          <Image
            src={img1}
            width={190}
            height={190}
            className="2xl:w-[190px] 2xl:h-[190px] xl:w-[160px] xl:h-[160px] lg:w-[120px] lg:h-[120px] md:h-[160px] md:w-[160px] sm:w-[120px] sm:h-[120px] w-[150px] h-[150px]"
            alt="product image"
          />
        </figure>
      </div>
      <div className="hidden lg:flex justify-between h-[240px] items-center max-w-[459px] rounded-[8px] border xl:px-10 px-5 border-[#E1E1E1] w-full">
        <div>
          <h5 className="text-[16px] leading-[24px] font-[500] text-[#313131]">Laptop</h5>
          <ul className="flex flex-col mt-4 gap-y-[6px]">
            <li className="text-[12px] text-[#424242] leading-[22px]">All Laptop</li>
            <li className="text-[12px] text-[#424242] leading-[22px]">Laptop accessories</li>
            <li className="text-[12px] text-[#424242] leading-[22px]">Apple Macbook</li>
            <li className="text-[12px] text-[#424242] leading-[22px]">Gaming Laptop</li>
            <li
              onClick={() => push("/shop")}
              className="text-[12px] cursor-pointer gap-2 flex items-center mt-[10px] font-[600] text-info leading-[22px]"
            >
              See All Laptop <BsArrowRight className="text-[20px]" />{" "}
            </li>
          </ul>
        </div>
        <figure>
          <Image
            src={img3}
            width={190}
            height={190}
            className="2xl:w-[190px] 2xl:h-[190px] xl:w-[160px] xl:h-[160px] lg:w-[120px] lg:h-[120px] md:h-[160px] md:w-[160px] w-[120px] h-[120px]"
            alt="product image"
          />
        </figure>
      </div>
      <div className=" hidden  sm:flex justify-between h-[240px] items-center max-w-[459px] rounded-[8px] border xl:px-10 px-5 border-[#E1E1E1] w-full">
        <div>
          <h5 className="text-[16px] leading-[24px] font-[500] text-[#313131]">Gadget</h5>
          <ul className="flex flex-col mt-4 gap-y-[6px]">
            <li className="text-[12px] text-[#424242] leading-[22px]">Smart Watch</li>
            <li className="text-[12px] text-[#424242] leading-[22px]">Ear Phone</li>
            <li className="text-[12px] text-[#424242] leading-[22px]">Power Bank</li>
            <li className="text-[12px] text-[#424242] leading-[22px]">Drones</li>
            <li
              onClick={() => push("/shop")}
              className="text-[12px] gap-2 cursor-pointer flex items-center mt-[10px] font-[600] text-info leading-[22px]"
            >
              See All Desktop <BsArrowRight className="text-[20px]" />{" "}
            </li>
          </ul>
        </div>
        <figure>
          <Image
            src={img2}
            width={190}
            height={190}
            className="2xl:w-[190px]  2xl:h-[190px] xl:w-[160px] xl:h-[160px] lg:w-[120px] lg:h-[120px] md:h-[160px] md:w-[160px] w-[120px] h-[120px]"
            alt="product image"
          />
        </figure>
      </div>
    </div>
  );
};

export default SingleProductCategoryCard;
