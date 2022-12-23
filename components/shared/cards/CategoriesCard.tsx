import Image from "next/image";
import React from "react";
import img from "../../../assets/categories-img/computer.png";

const CategoriesCard = () => {
  return (
    <div className="max-w-[215px] mx-auto rounded-[8px] w-full h-[257px]">
      <div className="w-full rounded-t-[8px] h-[202px] flex justify-center items-center  bg-[#F8F8F8]">
        <Image src={img} alt="category" height={170} width={170} />
      </div>
      <div className="h-[55px] rounded-b-[8px] flex justify-center items-center bg-primary">
        <h2 className="text-[18px] text-center leading-[27px] font-[500] text-[#313131]">
          Computers
        </h2>
      </div>
    </div>
  );
};

export default CategoriesCard;
