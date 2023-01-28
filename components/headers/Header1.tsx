import React from "react";
import BottomHeader1 from "./BottomHeader1";
import MiddleHeader1 from "./MiddleHeader1";
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
    </>
  );
};

export default Header1;
