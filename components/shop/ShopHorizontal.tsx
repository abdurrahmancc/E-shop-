import { useRouter } from "next/router";
import React from "react";
import ProductCard1 from "../shared/cards/ProductCard1";

const ShopHorizontal = () => {
  const router = useRouter();

  return (
    <div
      className={`xs-responsive grid grid-cols-2 md:grid-cols-3 max-w-[550px] md:max-w-[852px] xl:max-w-full mx-auto gap-y-[17px] gap-3 sm:gap-x-5 2xl:gap-x-[30px] ${
        router.query.id == "3" ? "xl:grid-cols-5 lg:grid-cols-4 lg:max-w-full" : "xl:grid-cols-4"
      }`}
    >
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 />
    </div>
  );
};

export default ShopHorizontal;
