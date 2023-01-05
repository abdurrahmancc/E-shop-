import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { ProductModel } from "../../../types/types";
import ProductCard1 from "../../shared/cards/ProductCard1";

interface Products {
  products: ProductModel[];
}

const FeaturedProducts = ({ products }: Products) => {
  const productItems = products?.slice(0, 10);
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-[#031424]  lg:text-[28px] lg:leading-[42px] text-[24px] leading-8 font-[600]">
            Featured Products
          </h2>
          <button className="text-info flex items-center gap-3 text-[16px] leading-[24px] font-[500]">
            See All <HiOutlineArrowRight className="text-info w-5 h-5 " />
          </button>
        </div>
        <div className="flex w-full">
          <div className="h-[7px] bg-primary w-[86.5px]"></div>
          <div className="border-b w-full border-[#AEAEAE]"></div>
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="xs-responsive grid grid-cols-2 md:grid-cols-3 max-w-[550px] md:max-w-[816px] lg:max-w-full  mx-auto lg:grid-cols-4 xl:grid-cols-5 gap-y-[17px] gap-3 sm:gap-x-5 2xl:gap-x-[30px]">
          {productItems &&
            productItems.map((product) => <ProductCard1 key={product._id} product={product} />)}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
