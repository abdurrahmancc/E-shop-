import React from "react";
import { categories2 } from "../../../database/data";
import CategoryCard from "../../shared/cards/CategoryCard";

const ShopByCategories = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:gap-[30px] xl:gap-[26px] gap-5 ">
      {categories2.map((category) => (
        <CategoryCard key={category?._id} category={category} />
      ))}
    </div>
  );
};

export default ShopByCategories;
