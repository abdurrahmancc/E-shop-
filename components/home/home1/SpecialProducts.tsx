import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import ProductCard1 from "../../shared/cards/ProductCard1";
import SpecialProductCard from "../../shared/cards/SpecialProductCard1";
import { ProductModel } from "../../../types/types";
import { useRouter } from "next/router";

interface Products {
  products: ProductModel[];
}

const SpecialProducts = ({ products }: Products) => {
  const router = useRouter();
  const productItems = products?.slice(14, 20);

  return (
    <div className="flex lg:flex-row flex-col items-center lg:items-start gap-y-8 gap-x-5 2xl:gap-x-[30px]">
      <div className="2xl:w-[558px] lg:order-1 mt-5 lg:mt-0 order-2 xl:w-[420px] md:w-[558px] sm:w-[500px] max-h-[1017px] h-[1017px] bg-[#F8F8F8]">
        <div className=" flex py-[110px] justify-center items-center h-full ">
          <SpecialProductCard />
        </div>
      </div>
      <div className="w-full lg:max-w-[558px] xl:max-w-[852px] lg:order-2 order-1">
        <div className="w-full">
          <div className="flex items-center justify-between pb-4">
            <h2 className="text-[#031424] lg:text-[28px] lg:leading-[42px] sm:text-[24px] text-[18px] leading-8 font-[600]">
              Special Products
            </h2>

            <button
              onClick={() => router.push("/shop/1")}
              className="text-info flex items-center gap-3 text-[16px] leading-[24px] font-[500]"
            >
              See All <HiOutlineArrowRight className="text-info w-5 h-5 " />
            </button>
          </div>
          <div className="flex w-full">
            <div className="h-[7px] bg-primary w-[86.5px]"></div>
            <div className="border-b w-full border-[#AEAEAE]"></div>
          </div>
        </div>
        <div className="mt-[50px]">
          <div className="flex-grow">
            <div className="grid xs-responsive grid-cols-2 md:grid-cols-3 lg:grid-cols-2 max-w-[550px] md:max-w-[834px] lg:max-w-[558px] xl:max-w-full  mx-auto xl:grid-cols-3 gap-y-[17px] gap-3 sm:gap-x-5 lg:gap-x-[30px]">
              {productItems &&
                productItems.map((product) => <ProductCard1 key={product._id} product={product} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;
