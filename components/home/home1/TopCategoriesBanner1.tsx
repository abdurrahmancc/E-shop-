import React from "react";
import TopBannerSlider1 from "../../Banner/TopBannerSlider1";
import TopCategories from "../../headers/TopCategories";

const TopCategoriesBanner1 = () => {
  return (
    <div className="max-w-[1443px] container lg:mt-[30px] mt-5 w-full mx-auto px-4 lg:px-10 2xl:px-0">
      <div className="flex gap-[30px] w-full">
        <TopCategories />
        <TopBannerSlider1 />
      </div>
    </div>
  );
};

export default TopCategoriesBanner1;
