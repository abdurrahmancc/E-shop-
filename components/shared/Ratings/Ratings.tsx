import Image from "next/image";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import start from "../../../assets/icons/star.svg";
import start0 from "../../../assets/icons/star0.svg";

interface RatingModel5 {
  width?: string;
  height?: string;
  color?: string;
}

export const Rating5 = ({ width, height, color }: RatingModel5) => {
  return (
    <>
      <AiTwotoneStar
        className={`${width || "w-4"} ${height || "h-4"} ${color || "text-[#FD8D03]"}`}
      />
      <AiTwotoneStar
        className={`${width || "w-4"} ${height || "h-4"} ${color || "text-[#FD8D03]"}`}
      />
      <AiTwotoneStar
        className={`${width || "w-4"} ${height || "h-4"} ${color || "text-[#FD8D03]"}`}
      />
      <AiTwotoneStar
        className={`${width || "w-4"} ${height || "h-4"} ${color || "text-[#FD8D03]"}`}
      />
      <AiTwotoneStar
        className={`${width || "w-4"} ${height || "h-4"} ${color || "text-[#FD8D03]"}`}
      />
    </>
  );
};
