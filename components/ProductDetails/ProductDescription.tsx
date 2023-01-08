import React from "react";
import { ProductModel } from "../../types/types";

interface Product {
  product: ProductModel;
}

const ProductDescription = ({ product }: Product) => {
  return (
    <div>
      <h5 className="text-[#031424] leading-[30px] font-[500] lg:text-[20px] sm:text-[18px] text-[16px]">
        {product?.fullName}
      </h5>
      <p className="lg:text-[16px] text-sm lg:leading-8 leading-7 mt-4 text-[#424242]">
        {product?.description}
      </p>
    </div>
  );
};

export default ProductDescription;
