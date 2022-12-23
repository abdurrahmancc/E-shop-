import Image from "next/image";
import React from "react";
import banner1 from "../../assets/banner/card-banner-4.png";
import banner2 from "../../assets/banner/card-banner-5.png";
import banner3 from "../../assets/banner/card-banner-6.png";

const CardBanner2 = () => {
  return (
    <div className="flex 2xl:gap-[26px] justify-center xl:gap-5 gap-4">
      <Image
        src={banner1}
        width={460}
        height={240}
        className="sm:max-w-[460px] xs-max-width max-w-[250px] max-h-[240px] flex-shrink w-full"
        alt="card banner"
      />
      <Image
        src={banner2}
        width={460}
        height={240}
        className="flex-shrink xs-max-width sm:max-w-[460px] max-w-[250px] max-h-[240px] w-full"
        alt="card banner"
      />
      <Image
        src={banner3}
        width={460}
        height={240}
        className="sm:max-w-[460px] xs-max-width max-w-[250px] max-h-[240px] hidden md:block flex-shrink w-full"
        alt="card banner"
      />
    </div>
  );
};

export default CardBanner2;
