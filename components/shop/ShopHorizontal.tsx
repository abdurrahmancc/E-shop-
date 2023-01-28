import { useRouter } from "next/router";
import React from "react";
import { ProductModel } from "../../types/types";
import ProductCard1 from "../shared/cards/ProductCard1";

interface Products {
  products: ProductModel[];
}

const ShopHorizontal = ({ products }: Products) => {
  const router = useRouter();
  const productItems = products?.slice(0, 16);
  return (
    <div
      className={`xs-responsive grid grid-cols-2 md:grid-cols-3 max-w-[550px] md:max-w-[852px] xl:max-w-full mx-auto gap-y-[17px] gap-3 sm:gap-x-5 2xl:gap-x-[30px] ${
        router.query.id == "3" ? "xl:grid-cols-5 lg:grid-cols-4 lg:max-w-full" : "xl:grid-cols-4"
      }`}
    >
      {productItems &&
        productItems.map((product) => <ProductCard1 key={product?._id} product={product} />)}
    </div>
  );
};

export default ShopHorizontal;
