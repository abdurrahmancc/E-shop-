import React from "react";
import TopBannerSlider2 from "../Banner/TopBannerSlider2";
import TopCardBanner from "../Banner/TopCardBanner";
import BottomHeader2 from "./BottomHeader2";
import MiddleHeader1 from "./MiddleHeader1";
import TopHeader2 from "./TopHeader2";
import bg from "../../assets/bg/home-2.png";

const Header2 = () => {
  return (
    <div>
      <TopHeader2 />
      <MiddleHeader1 />
      <BottomHeader2 />
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className="bg-no-repeat bg-cover bg-center"
      >
        <div className="max-w-[1443px] container lg:py-10 py-5 w-full mx-auto px-4 lg:px-10 2xl:px-0">
          <div className="flex gap-[30px] w-full">
            <div className="xl:max-w-[290px] hidden lg:block max-w-[250px] w-full"></div>
            <TopBannerSlider2 />
            <TopCardBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
