import Image from "next/image";
import React from "react";
import start from "../../../assets/icons/star.svg";
import start0 from "../../../assets/icons/star0.svg";

interface RatingModel5 {
  width?: number;
  height?: number;
}

export const Rating5 = ({ width, height }: RatingModel5) => {
  return (
    <>
      <Image src={start} width={width || 16} height={height || 16} alt="rating" />
      <Image src={start} width={width || 16} height={height || 16} alt="rating" />
      <Image src={start} width={width || 16} height={height || 16} alt="rating" />
      <Image src={start} width={width || 16} height={height || 16} alt="rating" />
      <Image src={start} width={width || 16} height={height || 16} alt="rating" />
    </>
  );
};
