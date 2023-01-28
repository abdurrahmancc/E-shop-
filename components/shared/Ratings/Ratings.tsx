import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

interface RatingMode {
  width?: string;
  height?: string;
  color?: string;
}

export const Rating5 = ({ width, height, color }: RatingMode) => {
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
