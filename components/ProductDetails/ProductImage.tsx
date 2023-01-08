import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { CgSearch } from "react-icons/cg";
import img1 from "../../assets/product-Image/product-2.png";
import img2 from "../../assets/product-Image/product-3.png";
import img3 from "../../assets/product-Image/product-4.png";
import { ProductModel } from "../../types/types";
import ImageModal from "./ImageModal";

type Product = {
  product: ProductModel;
};

const ProductImage = ({ product }: Product) => {
  const [selectImage, setSelectImage] = useState<number>(0);
  const router = useRouter();
  const isDetailsPage = router.pathname.includes("product-details");

  return (
    <div className="">
      <div
        className={`mx-auto relative flex justify-center items-center bg-[#F8F8F8] ${
          isDetailsPage
            ? "xl:w-[612px] w-[420px] xl:h-[572px] h-[360px]"
            : "2xl:w-[535.18px] xl:w-[380px] 2xl:h-[500.2px] xl:h-[360px]"
        }`}
      >
        <figure>
          <Image
            src={product?.img[selectImage]}
            height={isDetailsPage ? 376 : 328}
            width={isDetailsPage ? 376 : 328}
            alt="product image"
            className={`${
              isDetailsPage
                ? "max-w-[376px] max-h-[376]"
                : "2xl:max-w-[328px] 2xl:max-h-[328px] xl:max-w-[300px] xl:max-h-[300px]"
            }`}
          />
        </figure>
        {isDetailsPage && (
          <div className="absolute xl:top-9 xl:right-9 top-3 right-3">
            <label htmlFor="zoom-image-modal">
              <div className="xl:w-[42px] w-[32px] cursor-pointer flex rounded-full justify-center items-center border-[#D9D9D9] border xl:h-[42px] h-[32px]">
                <CgSearch className="xl:text-[24px] text-[18px]" />
              </div>
            </label>
          </div>
        )}
      </div>
      <div
        className={`flex mx-auto justify-between xl:mt-5 mt-3 ${
          isDetailsPage ? "xl:w-[612px] w-[420px]" : "2xl:w-[535.18px] xl:w-[380px] mx-auto"
        }`}
      >
        {product &&
          product?.img.map((img, i) => {
            return (
              <div
                key={i}
                onClick={() => setSelectImage(i)}
                className={`border border-[#F8F8F8] hover:border transition-all duration-150 ease-in-out hover:border-primary flex justify-center items-center bg-[#F8F8F8] ${
                  isDetailsPage
                    ? "xl:w-[137px] w-[99px] xl:h-[124px] h-[95px]"
                    : "2xl:w-[120.68px] xl:w-[87px] 2xl:h-[109.31px] h-[87px]"
                }`}
              >
                <figure>
                  <Image
                    src={img}
                    width={92}
                    height={92}
                    className={"2xl:max-w-[92px] 2xl:max-h-[92px] xl:max-w-[60px] xl:max-h-[60px]"}
                    alt="product image"
                  />
                </figure>
              </div>
            );
          })}
      </div>
      {/* ============= image zoom modal start =========== */}
      {isDetailsPage && product?.img && (
        <ImageModal images={product?.img} selectImage={selectImage} />
      )}

      {/* ============= image zoom modal end =========== */}
    </div>
  );
};

export default ProductImage;
