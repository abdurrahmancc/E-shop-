import React from "react";
import SpecialMiniCard from "../../../shared/cards/SpecialMiniCard";
import bg from "../../../../assets/bg/bg-1.png";
import Image from "next/image";
import img from "../../../../assets/product-Image/product-2.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const SpecialSec = () => {
  return (
    <div className="max-w-[1443px] h-full container w-full mx-auto px-4 lg:px-10 2xl:px-0">
      <div className="2xl:pb-[85px] xl:pb-10 lg:pb-[85px] md:pb-5 pb-10  justify-center mx-auto 2xl:gap-[30px] lg:gap-5 md:gap-4 h-full flex items-end">
        <div className="2xl:gap-[25px] gap-3 flex">
          <SpecialMiniCard style={"hidden md:flex"} />
          <SpecialMiniCard style={"hidden xl:flex"} />
        </div>
        <div
          style={{ backgroundImage: `url(${bg.src})` }}
          className="2xl:max-w-[531.8px] xl:max-w-[420px] lg:max-w-[511px] md:max-w-[344px] md:h-[354px] w-full bg-contain bg-no-repeat 2xl:bg-cover lg:h-[522px] xl:h-[430px] 2xl:h-[542px] sm:h-[542px] sm:max-w-[531px] max-w-[380px] h-[390px] "
        >
          <div className="flex relative flex-col items-center">
            <div className="flex absolute w-full justify-end pr-6 pt-[23px]">
              <p className="text-[#FF8D00] bg-white rounded-[38px] font-[500] inline-block lg:px-[23.5px] md:px-5 2xl:text-[40px] 2xl:leading-[60px] lg:text-[28px] lg:leading-[44px] md:text-[24px] md:leading-[36px] sm:px-[23.5px] sm:text-[40px] sm:leading-[60px] text-[20px] leading-[32px] px-[18px] ">
                $32
              </p>
            </div>
            <figure className="lg:mt-14 mt-12">
              <Image
                src={img}
                width={309}
                height={309}
                className="2xl:w-[309px] 2xl:h-[309px] xl:h-[220px] xl:w-[220px] lg:w-[290px] lg:h-[290px] md:w-[180px] md:h-[180px] sm:w-[309px] sm:h-[309px] w-[200px] h-[200px]"
                alt="special product"
              />
            </figure>
            <div className="px-5 lg:mt-2 pb-4 md:mt-0 mt-2">
              <h3 className="2xl:text-[24px] xl:text-[20px] xl:leading-[28px] lg:text-[24px] lg:leading-[36px] md:text-[20px] md:leading-[28px] mb-[12px] text-secondary 2xl:leading-[36px] font-[600] text-center sm:text-[24px] sm:leading-[36px] text-[18px] leading-[28px] ">
                Apple Watch Series 6 A2292 (M00D3LL/A)
              </h3>
              <button className="2xl:w-[55px] mx-auto 2xl:h-[55px] lg:w-12 lg:h-12 md:w-9 md:h-9 text-white bg-secondary rounded-full flex justify-center items-center sm:w-[55px] sm:h-[55px] w-9 h-9">
                <MdOutlineArrowForwardIos className="2xl:w-[28.5px] 2xl:h-[28.5px] sm:w-[28.5px] sm:h-[28.5px] w-5 h-5 xl:w-5 xl:h-5 " />
              </button>
            </div>
          </div>
        </div>
        <div className="2xl:gap-[25px] gap-3 flex">
          <SpecialMiniCard style={"hidden md:flex"} />
          <SpecialMiniCard style={"hidden xl:flex"} />
        </div>
      </div>
    </div>
  );
};

export default SpecialSec;
