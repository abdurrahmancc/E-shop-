import { useRouter } from "next/router";
import React from "react";
import ShopBannerSlider from "../Banner/ShopBannerSlider";

const ShopBanner1 = () => {
  const router = useRouter();
  return (
    <div
      id={router.query.id == "3" ? "" : "shop-banner-1"}
      className={`2xl:max-w-[1146px] lg:max-w-[662px] xl:max-w-[915px] mx-auto`}
    >
      <ShopBannerSlider />
    </div>
  );
};

export default ShopBanner1;
