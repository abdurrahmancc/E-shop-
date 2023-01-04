import React from "react";
import ShopVerticalCard from "../shared/cards/ShopVerticalCard";

const ShopVertical = () => {
  return (
    <div className="flex flex-col max-w-full  mx-auto gap-y-[30px]">
      <ShopVerticalCard />
      <ShopVerticalCard />
      <ShopVerticalCard />
      <ShopVerticalCard />
      <ShopVerticalCard />
      <ShopVerticalCard />
    </div>
  );
};

export default ShopVertical;
