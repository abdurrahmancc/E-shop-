import React from "react";
import TopBannerSlider3 from "../Banner/TopBannerSlider3";
import BottomHeader3 from "./BottomHeader3";
import MiddleHeader3 from "./MiddleHeader3";
import TopHeader3 from "./TopHeader3";

const Header3 = () => {
  return (
    <>
      {/* ============= top header start ============== */}
      <TopHeader3 />
      <MiddleHeader3 />
      <BottomHeader3 />
      {/* ============= top header end ============== */}

      {/*============ banner start =============== */}
      <div>
        <TopBannerSlider3 />
      </div>
      {/*============ banner end =============== */}
    </>
  );
};

export default Header3;
