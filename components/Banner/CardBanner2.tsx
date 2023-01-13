import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import banner1 from "../../assets/banner/card-banner-4.png";
import banner2 from "../../assets/banner/card-banner-5.png";
import banner3 from "../../assets/banner/card-banner-6.png";

const CardBanner2 = () => {
  const router = useRouter();

  return (
    <div
      id="xs-responsive-card-banner"
      className="flex 2xl:gap-[26px] justify-center xl:gap-5 gap-2 sm:gap-3 md:gap-4"
    >
      <Image
        onClick={() => router.push("/shop/1")}
        src={banner1}
        width={460}
        height={240}
        className="sm:max-w-[460px] cursor-pointer xs-max-width max-w-[250px] max-h-[240px] flex-shrink w-full"
        alt="card banner"
      />
      <Image
        onClick={() => router.push("/shop/1")}
        src={banner2}
        width={460}
        height={240}
        className="flex-shrink cursor-pointer xs-max-width sm:max-w-[460px] max-w-[250px] max-h-[240px] w-full"
        alt="card banner"
      />
      <Image
        onClick={() => router.push("/shop/1")}
        src={banner3}
        width={460}
        height={240}
        className="sm:max-w-[460px] cursor-pointer xs-max-width max-w-[250px] max-h-[240px] hidden md:block flex-shrink w-full"
        alt="card banner"
      />
    </div>
  );
};

export default CardBanner2;
