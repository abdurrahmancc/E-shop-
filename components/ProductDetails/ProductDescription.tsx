import React from "react";
import { ProductModel } from "../../types/types";

interface Product {
  product: ProductModel;
}

const ProductDescription = ({ product }: Product) => {
  return (
    <div>
      <h5 className="text-[#031424] leading-[30px] font-[500] text-[20px]">{product?.fullName}</h5>
      <p className="text-[16px] leading-8 mt-4 text-[#424242]">{product?.description}</p>
    </div>
  );
};

export default ProductDescription;
