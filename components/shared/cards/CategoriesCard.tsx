import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { TrendingCategoryType } from "../../../types/types";

interface CategoryModel {
  category: TrendingCategoryType;
}

const CategoriesCard = ({ category }: CategoryModel) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => router.push("/shop/1")}
      className="max-w-[215px] cursor-pointer mx-auto rounded-[8px] w-full h-[257px]"
    >
      <div className="w-full rounded-t-[8px] h-[202px] flex justify-center items-center  bg-[#F8F8F8]">
        <Image src={category?.img} alt="category" height={170} width={170} />
      </div>
      <div className="h-[55px] relative rounded-b-[8px] flex justify-center items-center bg-[#EEEEEE]">
        <div
          className={`absolute h-[55px] w-full bg-primary rounded-b-[8px] bottomToTopCategory ${
            isHover ? "bottomToTopAnimateCategory" : ""
          } `}
        ></div>
        <h2 className="text-[18px] absolute text-center leading-[27px] font-[500] text-[#313131]">
          {category?.name}
        </h2>
      </div>
    </div>
  );
};

export default CategoriesCard;
