import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import img1 from "../../../assets/product-Image/product-1.png";

interface PropsData {
  style?: string;
  img: any;
  title: string;
  price: number;
}

const SpecialMiniCard = ({ style, img, title, price }: PropsData) => {
  const router = useRouter();
  return (
    <div
      className={`bg-[#FBFBFB] px-3 pb-[14px] pt-[15px] h-[290px] rounded-[20.58px]  max-w-[200px] w-full flex flex-col justify-between ${style}`}
    >
      <div>
        <div className="flex justify-end pb-[15px]">
          <div className="w-14 h-[29px] text-center rounded-[24.03px] bg-primary">
            <span className="text-[18px] text-secondary font-[500] leading-[27px]">${price}</span>
          </div>
        </div>
        <figure className="mx-auto">
          <Image
            onClick={() => router.push("/shop/product-details/5")}
            src={img}
            width={120}
            height={120}
            className="mx-auto cursor-pointer"
            alt={"product image"}
          />
        </figure>
      </div>
      <div className="flex justify-between items-center">
        <h3
          onClick={() => router.push("/shop/product-details/5")}
          className="font-[600] cursor-pointer text-secondary text-[15.44px] leading-[21.44px] "
        >
          {title}
        </h3>
        <button className="text-[#000000] min-w-[33.45px] rounded-full bg-primary w-[33.45px] h-[33.45px] flex justify-center items-center">
          <MdOutlineArrowForwardIos className="h-[17px] w-[17px]" />
        </button>
      </div>
    </div>
  );
};

export default SpecialMiniCard;
<div></div>;
