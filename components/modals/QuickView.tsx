import React from "react";
import { ProductModel } from "../../types/types";
import ProductImage from "../ProductDetails/ProductImage";
import TopProductDetails from "../ProductDetails/TopProductDetails";

interface Product {
  product: ProductModel;
}

const QuickView = ({ product }: Product) => {
  return (
    <div>
      <input type="checkbox" id="quick-view" className="modal-toggle" />
      <label htmlFor="quick-view" className="modal bg-[rgba(0,0,0,0.46)] cursor-pointer">
        <label className="modal-box py-10 xl:py-0 xl:flex justify-center items-center p-0 shadow-none rounded-none relative bg-[#FFFFFF] 2xl:max-w-[1443px] container xl:max-w-[1000px] w-full mx-auto px-4 min-h-[700px] 2xl:min-h-[771px] lg:px-10 2xl:px-0 max-w-[400px] sm:max-w-[512px]">
          <div className="flex flex-col justify-center 2xl:items-center lg:max-w-full mx-auto max-w-[550px] xl:flex-row xl:gap-12 pb-10 lg:pb-0 gap-10">
            <ProductImage product={product} />
            <TopProductDetails product={product} />
          </div>
        </label>
      </label>
    </div>
  );
};

export default QuickView;
