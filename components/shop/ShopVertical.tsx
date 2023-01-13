import React from "react";
import { ProductModel } from "../../types/types";
import ShopVerticalCard from "../shared/cards/ShopVerticalCard";

interface Products {
  products: ProductModel[];
}

const ShopVertical = ({ products }: Products) => {
  const productItems = products?.slice(0, 6);
  return (
    <div className="flex flex-col max-w-full  mx-auto gap-y-[30px]">
      {productItems &&
        productItems.map((product) => <ShopVerticalCard key={product?._id} product={product} />)}
    </div>
  );
};

export default ShopVertical;
