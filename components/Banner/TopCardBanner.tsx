import Image from "next/image";
import React from "react";
import img1 from "../../assets/banner/side-card-banner-1.png";
import img2 from "../../assets/banner/side-card-banner-2.png";
import img3 from "../../assets/banner/side-card-banner-3.png";

const TopCardBanner = () => {
  return (
    <div className="max-w-[281px] hidden xl:flex w-full flex-col gap-[30px]">
      <Image src={img1} alt="banner" width={281} height={171} className="w-full " />
      <Image src={img2} alt="banner" width={281} height={171} className="w-full h-full" />
      <Image src={img3} alt="banner" width={281} height={171} className="w-full " />
    </div>
  );
};

export default TopCardBanner;
