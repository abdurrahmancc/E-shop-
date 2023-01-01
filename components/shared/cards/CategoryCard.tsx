import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CategoryItemsTypes } from "../../../types/types";

interface CategoryModel {
  category: CategoryItemsTypes;
}

const CategoryCard = ({ category }: CategoryModel) => {
  const { push } = useRouter();
  return (
    <div className="flex justify-between h-[240px] mx-auto items-center max-w-[459px] rounded-[8px] border xl:px-10 px-5 border-[#E1E1E1] w-full">
      <div>
        <h5 className="text-[16px] leading-[24px] font-[500] text-[#313131]">{category?.name}</h5>
        <ul className="flex flex-col mt-4 gap-y-[6px]">
          {category?.features.map((item, i) => (
            <li key={i} className="text-[12px] text-[#424242] leading-[22px]">
              {item}
            </li>
          ))}
          <li
            onClick={() => push("/shop")}
            className="text-[12px] gap-2 cursor-pointer flex items-center mt-[10px] font-[600] text-info leading-[22px]"
          >
            See All {category?.name} <BsArrowRight className="text-[20px]" />{" "}
          </li>
        </ul>
      </div>
      <figure>
        <Image
          src={`${category?.img}`}
          width={190}
          height={190}
          className="2xl:w-[190px]  2xl:h-[190px] xl:w-[160px] xl:h-[160px] lg:w-[120px] lg:h-[120px] md:h-[160px] md:w-[160px] w-[120px] h-[120px]"
          alt="product image"
        />
      </figure>
    </div>
  );
};

export default CategoryCard;
