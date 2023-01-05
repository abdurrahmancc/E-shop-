import React, { useState } from "react";
import { ProductModel } from "../../types/types";
import ProductDescription from "./ProductDescription";
import ProductSpecification from "./ProductSpecification";

interface Product {
  product: ProductModel;
}

const BottomDetails = ({ product }: Product) => {
  const [isActive, setIsActive] = useState<string>("description");

  return (
    <div>
      <div className="bg-[#ffffff] p-5">
        <ul className="flex items-center gap-7 border-b border-[#AEAEAE]">
          <li
            onClick={() => setIsActive("description")}
            className={` text-[20px] border-b-[5px] cursor-pointer pb-[12px] leading-8 font-[500] ${
              isActive == "description"
                ? "text-info border-primary"
                : "text-[#031424] border-[#ffffff00]"
            }`}
          >
            Description
          </li>
          <li
            onClick={() => setIsActive("specification")}
            className={` text-[20px] border-b-[5px] cursor-pointer pb-[12px] leading-8 font-[500] ${
              isActive == "specification"
                ? "text-info border-primary"
                : "text-[#031424] border-[#ffffff00]"
            }`}
          >
            Specification
          </li>
          <li
            onClick={() => setIsActive("reviews")}
            className={` text-[20px] border-b-[5px] cursor-pointer pb-[12px] leading-8 font-[500] ${
              isActive == "reviews"
                ? "text-info border-primary"
                : "text-[#031424] border-[#ffffff00]"
            }`}
          >
            Reviews (12)
          </li>
          <li
            onClick={() => setIsActive("askQuestion")}
            className={` text-[20px] border-b-[5px] cursor-pointer pb-[12px] leading-8 font-[500] ${
              isActive == "askQuestion"
                ? "text-info border-primary"
                : "text-[#031424] border-[#ffffff00]"
            }`}
          >
            Ask Question
          </li>
        </ul>
      </div>
      <div className="mt-[30px] bg-[#ffffff] p-5">
        {isActive == "description" && <ProductDescription product={product} />}
        {isActive == "specification" && (
          <ProductSpecification SpecificationInfo={product?.Specification} />
        )}
      </div>
    </div>
  );
};

export default BottomDetails;
