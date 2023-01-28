import React from "react";
import TopBannerSlider1 from "../../Banner/TopBannerSlider1";
import bg from "../../../assets/bg/home-1.png";
const TopCategoriesBanner1 = () => {
  return (
    <div style={{ backgroundImage: `url(${bg.src})` }} className="bg-no-repeat bg-cover bg-center">
      <div className="max-w-[1443px] container lg:py-10 py-5 w-full mx-auto px-4 lg:px-10 2xl:px-0">
        <div className="flex gap-[30px] w-full">
          <div className="xl:max-w-[290px] hidden lg:block max-w-[250px] w-full"></div>
          <TopBannerSlider1 />
        </div>
      </div>
    </div>
  );
};

export default TopCategoriesBanner1;
