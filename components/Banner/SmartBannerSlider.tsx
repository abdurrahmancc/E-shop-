import Image from "next/image";
import React from "react";
import img from "../../components/../assets/banner/smart-banner-1.png";

const SmartBannerSlider = () => {
  return (
    <div>
      <Image width={1441} height={993} className={"w-full"} src={img} alt="slider banner" />
    </div>
  );
};

export default SmartBannerSlider;
