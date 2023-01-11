import React from "react";
import TopBannerSlider1 from "../Banner/TopBannerSlider1";
import BottomHeader1 from "./BottomHeader1";
import BottomHeader2 from "./BottomHeader2";
import MiddleHeader1 from "./MiddleHeader1";
import TopCategories from "./TopCategories";
import TopHeader1 from "./TopHeader1";

const Header1 = () => {
  return (
    <>
      <div className="bg-[#041E42]">
        <div className="max-w-[1443px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
          {/* ============= top header start ============== */}
          <TopHeader1 />
          <MiddleHeader1 />
          <BottomHeader1 />
          {/* ============= top header end ============== */}
        </div>
      </div>
      <div className="max-w-[1443px] container lg:mt-[30px] mt-5 w-full mx-auto px-4 lg:px-10 2xl:px-0">
        <div className="flex gap-[30px] w-full">
          <TopCategories />
          <TopBannerSlider1 />
        </div>
      </div>
    </>
  );
};

export default Header1;
