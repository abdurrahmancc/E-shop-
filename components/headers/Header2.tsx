import React from "react";
import TopBannerSlider2 from "../Banner/TopBannerSlider2";
import TopCardBanner from "../Banner/TopCardBanner";
import BottomHeader2 from "./BottomHeader2";
import MiddleHeader1 from "./MiddleHeader1";
import TopCategories from "./TopCategories";
import TopHeader2 from "./TopHeader2";

const Header2 = () => {
  return (
    <div>
      <TopHeader2 />
      <MiddleHeader1 />
      <BottomHeader2 />
      <div className="max-w-[1443px] container lg:mt-[30px] mt-5 w-full mx-auto px-4 lg:px-10 2xl:px-0">
        <div className="flex gap-[30px] w-full">
          {/* <TopCategories /> */}
          <div className="xl:max-w-[290px] hidden lg:block max-w-[250px] w-full"></div>
          <TopBannerSlider2 />
          <TopCardBanner />
        </div>
      </div>
    </div>
  );
};

export default Header2;
