import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

interface RatingModel5 {
  width?: string;
  height?: string;
  color?: string;
  count: number;
}

export const Ratings5 = ({ width, height, color, count }: RatingModel5) => {
  return (
    <>
      <AiTwotoneStar
        className={`${width || "w-4"} ${height || "h-4"} ${
          count >= 1 ? color || "text-[#FD8D03]" : "text-[#BABABA]"
        }`}
      />
      <AiTwotoneStar
        className={`${width || "w-4"} ${height || "h-4"} ${
          count >= 2 ? color || "text-[#FD8D03]" : "text-[#BABABA]"
        }`}
      />
      <AiTwotoneStar
        className={`${width || "w-4"} ${height || "h-4"} ${
          count >= 3 ? color || "text-[#FD8D03]" : "text-[#BABABA]"
        }`}
      />
      <AiTwotoneStar
        className={`${width || "w-4"} ${height || "h-4"} ${
          count >= 4 ? color || "text-[#FD8D03]" : "text-[#BABABA]"
        }`}
      />
      <AiTwotoneStar
        className={`${width || "w-4"} ${height || "h-4"} ${
          count >= 5 ? color || "text-[#FD8D03]" : "text-[#BABABA]"
        }`}
      />
    </>
  );
};
