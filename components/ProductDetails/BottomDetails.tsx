import React, { useState } from "react";
import { ProductModel } from "../../types/types";
import ProductDescription from "./ProductDescription";
import ProductSpecification from "./ProductSpecification";
import Reviews from "./Reviews";

interface Product {
  product: ProductModel;
}

const BottomDetails = ({ product }: Product) => {
  const [isActive, setIsActive] = useState<string>("specification");

  return (
    <div id="product-Bottom-Details">
      <div className="bg-[#ffffff] p-5">
        <ul className="flex items-center gap-7 border-b border-[#AEAEAE]">
          <li
            onClick={() => setIsActive("description")}
            className={` lg:text-[20px] sm:text-[18px] text-[16px] border-b-[5px] cursor-pointer pb-[12px] leading-8 font-[500] ${
              isActive == "description"
                ? "text-info border-primary"
                : "text-[#031424] border-[#ffffff00]"
            }`}
          >
            Description
          </li>
          <li
            onClick={() => setIsActive("specification")}
            className={` lg:text-[20px] sm:text-[18px] text-[16px] border-b-[5px] cursor-pointer pb-[12px] leading-8 font-[500] ${
              isActive == "specification"
                ? "text-info border-primary"
                : "text-[#031424] border-[#ffffff00]"
            }`}
          >
            Specification
          </li>
          <li
            onClick={() => setIsActive("reviews")}
            className={` lg:text-[20px] sm:text-[18px] text-[16px] border-b-[5px] cursor-pointer pb-[12px] leading-8 font-[500] ${
              isActive == "reviews"
                ? "text-info border-primary"
                : "text-[#031424] border-[#ffffff00]"
            }`}
          >
            Reviews (12)
          </li>
        </ul>
      </div>
      <div className="mt-[30px] bg-[#ffffff] p-5">
        {isActive == "description" && <ProductDescription product={product} />}
        {isActive == "specification" && (
          <ProductSpecification SpecificationInfo={product?.Specification} />
        )}
        {isActive == "reviews" && <Reviews />}
      </div>
    </div>
  );
};

export default BottomDetails;
