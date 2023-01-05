import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CgSearch } from "react-icons/cg";
import img1 from "../../assets/product-Image/product-2.png";
import img2 from "../../assets/product-Image/product-3.png";
import img3 from "../../assets/product-Image/product-4.png";
import ImageModal from "./ImageModal";

const ProductImage = () => {
  const [selectImage, setSelectImage] = useState<number>(0);
  const images = [img1, img2, img3, img1];

  return (
    <div className="">
      <div className="xl:w-[612px] w-[420px] relative flex justify-center items-center bg-[#F8F8F8] xl:h-[572px] h-[360px]">
        <figure>
          <Image
            src={images[selectImage]}
            height={376}
            width={376}
            alt="product image"
            className="max-w-[376px] max-h-[376]"
          />
        </figure>
        <div className="absolute xl:top-9 xl:right-9 top-3 right-3">
          <label htmlFor="zoom-image-modal">
            <div className="xl:w-[42px] w-[32px] cursor-pointer flex rounded-full justify-center items-center border-[#D9D9D9] border xl:h-[42px] h-[32px]">
              <CgSearch className="xl:text-[24px] text-[18px]" />
            </div>
          </label>
        </div>
      </div>
      <div className="flex items-center xl:gap-5 gap-2 xl:mt-5 mt-3">
        {images.map((img, i) => {
          return (
            <div
              key={i}
              onClick={() => setSelectImage(i)}
              className={
                "xl:w-[137px] w-[99px] border border-[#F8F8F8] hover:border transition-all duration-150 ease-in-out hover:border-primary flex justify-center items-center bg-[#F8F8F8] xl:h-[124px] h-[95px]"
              }
            >
              <figure>
                <Image
                  src={img}
                  width={92}
                  height={92}
                  className={"max-w-[92px] max-h-[92px]"}
                  alt="product image"
                />
              </figure>
            </div>
          );
        })}
      </div>
      {/* ============= image zoom modal start =========== */}
      <ImageModal images={images} selectImage={selectImage} />
      {/* ============= image zoom modal end =========== */}
    </div>
  );
};

export default ProductImage;
