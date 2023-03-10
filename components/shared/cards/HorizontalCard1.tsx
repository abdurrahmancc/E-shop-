import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductModel } from "../../../types/types";
import { Rating5 } from "../Ratings/Ratings";

interface Product {
  product: ProductModel;
}

const HorizontalCard1 = ({ product }: Product) => {
  return (
    <div className="flex gap-3 items-center max-w-[350px]">
      <div className="2xl:h-[133px] h-[133px] sm:h-[100px] 2xl:w-[133px] w-[133px] sm:w-[100px] 2xl:min-w-[133px] sm:min-w-[100px] min-w-[133px] rounded-[8px] bg-[#F3F3F3] flex justify-center items-center">
        <Link href={`/shop/product-details/${product?._id}`}>
          <figure>
            <Image
              width={96}
              height={96}
              src={product?.img[0]}
              className="w-[96px] h-[96px]"
              alt="product image"
            />
          </figure>
        </Link>
      </div>
      <div>
        <h3 className="2xl:text-[16px] text-[16px] sm:text-[12px] sm:leading-[18px]  xl:text-[14px] flex-wrap 2xl:leading-[24px] xl:leading-[20px] leading-[24px] font-[600] text-info">
          <Link href={`/shop/product-details/${product?._id}`}>{product?.name}</Link>
        </h3>
        <div className="flex mt-1 mxa-w-[185px] justify-start items-center gap-[4px]">
          <div className="flex items-center justify-center">
            <Rating5 width="w-[14px]" height="h-[14px]" />
          </div>
          <span className="text-[14px] text-[#424242] leading-[21px]">
            ({product?.reviewQuantity})
          </span>
        </div>
        <p className="2xl:text-[18px] text-[18px] sm:lg:text-[16px] sm:leading-[24px] leading-[27px] 2xl:mt-3 sm:mt-2 mt-3 2xl:leading-[27px] font-[500] text-[#FD8D03]">
          ${product?.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default HorizontalCard1;
