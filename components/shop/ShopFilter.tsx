import Image from "next/image";
import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import img1 from "../../assets/banner/follow-1.png";
import img2 from "../../assets/banner/follow-2.png";
import img3 from "../../assets/banner/follow-3.png";
import img4 from "../../assets/banner/follow-4.png";
import img5 from "../../assets/banner/follow-5.png";
import img6 from "../../assets/banner/follow-6.png";
import { Ratings5 } from "../shared/Ratings/Ratings5";
import PricingFilter from "./PricingFilter";

interface Categories {
  label: string;
  value: string;
}

interface BrandsModel {
  label: string;
  value: string;
}

interface SpaceModel {
  label: string;
  value: string;
}

interface RatingModel {
  label: string;
  value: string;
}

interface StatusModel {
  label: string;
  value: string;
}

interface ColorsModel {
  label: string;
  value: string;
}

const categories: Categories[] = [
  { label: "Computer & Laptop", value: "computer&Laptop" },
  { label: "Television & Video", value: "television&Video" },
  { label: "Headphones", value: "computer&Laptop" },
  { label: "Smartphones", value: "headphones" },
  { label: "Camera & Photos", value: "smartphones" },
  { label: "Smart Watches", value: "smartWatches" },
  { label: "Video Games", value: "videoGames" },
];

const brands: BrandsModel[] = [
  { label: "Apple", value: "apple" },
  { label: "Samsung", value: "samsung" },
  { label: "Realme", value: "realme" },
  { label: "Redmi", value: "redmi" },
  { label: "Nokia", value: "nokia" },
  { label: "One Plus", value: "onePlus" },
  { label: "Huawei", value: "huawei" },
];

const space: SpaceModel[] = [
  { label: "128GB", value: "128GB" },
  { label: "254GB", value: "254GB" },
  { label: "64GB", value: "64GB" },
  { label: "32GB", value: "32GB" },
];

const ratings: RatingModel[] = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
];

const status: StatusModel[] = [
  { label: "Stock In", value: "stockIn" },
  { label: "Stock Out ", value: "stockOut " },
  { label: "Pre - Order", value: "preOrder" },
];

const colors: ColorsModel[] = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green " },
  { label: "Blue", value: "blue" },
  { label: "Purple", value: "purple" },
];

const ShopFilter = () => {
  const [min, setMin] = useState<number>(43);
  const [max, setMax] = useState<number>(443);
  const [hoverFashion1, setHoverFashion1] = useState<boolean>(false);
  const [hoverFashion2, setHoverFashion2] = useState<boolean>(false);
  const [hoverFashion3, setHoverFashion3] = useState<boolean>(false);
  const [hoverFashion4, setHoverFashion4] = useState<boolean>(false);
  const [hoverFashion5, setHoverFashion5] = useState<boolean>(false);
  const [hoverFashion6, setHoverFashion6] = useState<boolean>(false);

  const isLastCategory = categories.length - 1;
  const isLastBrand = brands.length - 1;
  const isLastSpace = space.length - 1;
  const isLastRating = ratings.length - 1;
  const isLastStatus = status.length - 1;
  const isLastColor = colors.length - 1;

  return (
    <>
      {/* ============ category start =========== */}
      <div className="w-full  border border-[#D9D9D9]">
        <div className="relative">
          <h4 className="text-[20px] border-b border-[#D9D9D9] px-6 py-[15px] text-[#031424] leading-[32px] font-[600]">
            Categories
          </h4>
          <div className="h-[1px] left-6 absolute bottom-0 w-[63px] bg-primary"></div>
        </div>
        <div className="px-6 py-[15.5px]">
          {categories.map((category, i) => (
            <div key={i} className={`form-control ${isLastCategory == i ? "" : "pb-4"}`}>
              <label className="label p-0 justify-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  onChange={() => {}}
                  className="checkbox w-[14px] h-[14px] checkbox-primary rounded-none "
                />
                <span className="label-text text-[#414141] text-sm leading-[22px] ">
                  {category?.label}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* ============ category end =========== */}
      {/* ============ brands start =========== */}
      <div className="w-full mt-[30px] border border-[#D9D9D9]">
        <div className="relative">
          <h4 className="text-[20px] border-b border-[#D9D9D9] px-6 py-[15px] text-[#031424] leading-[32px] font-[600]">
            Brands
          </h4>
          <div className="h-[1px] left-6 absolute bottom-0 w-[63px] bg-primary"></div>
        </div>
        <div className="px-6 py-[15.5px]">
          {brands.map((brand, i) => (
            <div key={i} className={`form-control ${isLastBrand == i ? "" : "pb-4"}`}>
              <label className="label p-0 justify-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  onChange={() => {}}
                  className="checkbox w-[14px] h-[14px] checkbox-primary rounded-none "
                />
                <span className="label-text text-[#414141] text-sm leading-[22px] ">
                  {brand?.label}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* ============ brands end =========== */}
      {/* ============ brands start =========== */}
      <div className="w-full mt-[30px] border border-[#D9D9D9]">
        <div className="relative">
          <h4 className="text-[20px] border-b border-[#D9D9D9] px-6 py-[15px] text-[#031424] leading-[32px] font-[600]">
            Filter by Price
          </h4>
          <div className="h-[1px] left-6 absolute bottom-0 w-[63px] bg-primary"></div>
        </div>
        <div className="px-6 py-[15.5px]">
          <PricingFilter min={min} max={max} setMin={setMin} setMax={setMax} />
          <div className="mt-[9px] flex items-center justify-between">
            <span className="text-[12px] text-center text-[#031424] leading-[20px]">
              Min: ${min}
            </span>
            <span className="text-[12px] text-center text-[#031424] leading-[20px]">
              Max: ${max}
            </span>
          </div>
        </div>
      </div>
      {/* ============ brands end =========== */}
      {/* ============ Space start =========== */}
      <div className="w-full mt-[30px] border border-[#D9D9D9]">
        <div className="relative">
          <h4 className="text-[20px] border-b border-[#D9D9D9] px-6 py-[15px] text-[#031424] leading-[32px] font-[600]">
            Space
          </h4>
          <div className="h-[1px] left-6 absolute bottom-0 w-[63px] bg-primary"></div>
        </div>
        <div className="px-6 py-[15.5px]">
          {space.map((item, i) => (
            <div key={i} className={`form-control ${isLastSpace == i ? "" : "pb-4"}`}>
              <label className="label p-0 justify-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  onChange={() => {}}
                  className="checkbox w-[14px] h-[14px] checkbox-primary rounded-none "
                />
                <span className="label-text text-[#414141] text-sm leading-[22px] ">
                  {item?.label}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* ============ Space end =========== */}
      {/* ============ Color start =========== */}
      <div className="w-full mt-[30px] border border-[#D9D9D9]">
        <div className="relative">
          <h4 className="text-[20px] border-b border-[#D9D9D9] px-6 py-[15px] text-[#031424] leading-[32px] font-[600]">
            Color
          </h4>
          <div className="h-[1px] left-6 absolute bottom-0 w-[63px] bg-primary"></div>
        </div>
        <div className="px-6 py-[15.5px]">
          {colors.map((color, i) => (
            <div key={i} className={`form-control ${isLastColor == i ? "" : "pb-4"}`}>
              <label className="label p-0 justify-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  onChange={() => {}}
                  className="checkbox w-[14px] h-[14px] checkbox-primary rounded-none "
                />
                <span className="label-text text-[#414141] text-sm leading-[22px] ">
                  {color?.label}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* ============ Color end =========== */}
      {/* ============ ratings start =========== */}
      <div className="w-full mt-[30px] border border-[#D9D9D9]">
        <div className="relative">
          <h4 className="text-[20px] border-b border-[#D9D9D9] px-6 py-[15px] text-[#031424] leading-[32px] font-[600]">
            Rating
          </h4>
          <div className="h-[1px] left-6 absolute bottom-0 w-[63px] bg-primary"></div>
        </div>
        <div className="px-6 py-[15.5px]">
          {ratings.map((rating, i) => (
            <div key={i} className={`form-control ${isLastRating == i ? "" : "pb-[23px]"}`}>
              <label className="label p-0 justify-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  onChange={() => {}}
                  className="checkbox w-[14px] h-[14px] checkbox-primary rounded-none "
                />
                <div className="flex w-full gap-2 items-center">
                  <div className="flex max-w-[78px] w-full justify-between">
                    <Ratings5 width="w-[14px]" height="h-[14px]" count={i + 1} />
                  </div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* ============ ratings end =========== */}
      {/* ============ Status start =========== */}
      <div className="w-full mt-[30px] border border-[#D9D9D9]">
        <div className="relative">
          <h4 className="text-[20px] border-b border-[#D9D9D9] px-6 py-[15px] text-[#031424] leading-[32px] font-[600]">
            Status
          </h4>
          <div className="h-[1px] left-6 absolute bottom-0 w-[63px] bg-primary"></div>
        </div>
        <div className="px-6 py-[15.5px]">
          {status.map((item, i) => (
            <div key={i} className={`form-control ${isLastStatus == i ? "" : "pb-4"}`}>
              <label className="label p-0 justify-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  onChange={() => {}}
                  className="checkbox w-[14px] h-[14px] checkbox-primary rounded-none "
                />
                <span className="label-text text-[#414141] text-sm leading-[22px] ">
                  {item?.label}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* ============ Status end =========== */}
      {/* ============ Follow Us start =========== */}
      <div className="w-full mt-[30px] border border-[#D9D9D9]">
        <div className="relative">
          <h4 className="text-[20px] border-b border-[#D9D9D9] px-6 py-[15px] text-[#031424] leading-[32px] font-[600]">
            Follow Us
          </h4>
          <div className="h-[1px] left-6 absolute bottom-0 w-[63px] bg-primary"></div>
        </div>
        <div className="px-6 py-[15.5px]">
          <div className="grid  grid-cols-3 gap-0 max-w-[216px]">
            <div
              onMouseEnter={() => setHoverFashion1(true)}
              onMouseLeave={() => setHoverFashion1(false)}
              className="w-full relative cursor-pointer"
            >
              <Image
                src={img1}
                width={72.29}
                height={72.29}
                className="w-[72.29px] h-[72.29px]"
                alt="fashion"
              />
              <div
                className={`w-full top-0 absolute h-full mix-blend-multiply opacity-[0.5] bg-[#03221F] transition-all ease-out duration-200 ${
                  hoverFashion1 ? "block scale-100" : "hidden scale-0"
                }`}
              ></div>
              <div
                className={`absolute  w-full h-full flex justify-center items-center mx-auto text-white top-0 transition-all ease-out duration-200 ${
                  hoverFashion1 ? "scale-100" : "  scale-0"
                }`}
              >
                <AiFillInstagram className="w-6 h-6 text-[#FFFFFF]" />
              </div>
            </div>
            <div
              onMouseEnter={() => setHoverFashion2(true)}
              onMouseLeave={() => setHoverFashion2(false)}
              className="w-full relative cursor-pointer"
            >
              <Image
                src={img2}
                width={72.29}
                height={72.29}
                className="w-[72.29px] h-[72.29px]"
                alt="fashion"
              />
              <div
                className={`w-full top-0 absolute h-full mix-blend-multiply opacity-[0.5] bg-[#03221F] transition-all ease-out duration-200 ${
                  hoverFashion2 ? "block scale-100" : "hidden scale-0"
                }`}
              ></div>
              <div
                className={`absolute  w-full h-full flex justify-center items-center mx-auto text-white top-0 transition-all ease-out duration-200 ${
                  hoverFashion2 ? " scale-100" : "  scale-0"
                }`}
              >
                <AiFillInstagram className="w-6 h-6 text-[#FFFFFF]" />
              </div>
            </div>
            <div
              onMouseEnter={() => setHoverFashion3(true)}
              onMouseLeave={() => setHoverFashion3(false)}
              className="w-full relative cursor-pointer"
            >
              <Image
                src={img3}
                width={72.29}
                height={72.29}
                className="w-[72.29px] h-[72.29px]"
                alt="fashion"
              />
              <div
                className={`w-full top-0 absolute h-full mix-blend-multiply opacity-[0.5] bg-[#03221F] transition-all ease-out duration-200 ${
                  hoverFashion3 ? "block scale-100" : "hidden scale-0"
                }`}
              ></div>
              <div
                className={`absolute  w-full h-full flex justify-center items-center mx-auto text-white top-0 transition-all ease-out duration-200 ${
                  hoverFashion3 ? " scale-100" : "  scale-0"
                }`}
              >
                <AiFillInstagram className="w-6 h-6 text-[#FFFFFF]" />
              </div>
            </div>
            <div
              onMouseEnter={() => setHoverFashion4(true)}
              onMouseLeave={() => setHoverFashion4(false)}
              className="w-full relative cursor-pointer"
            >
              <Image
                src={img4}
                width={72.29}
                height={72.29}
                className="w-[72.29px] h-[72.29px]"
                alt="fashion"
              />
              <div
                className={`w-full top-0 absolute h-full mix-blend-multiply opacity-[0.5] bg-[#03221F] transition-all ease-out duration-200 ${
                  hoverFashion4 ? "block scale-100" : "hidden scale-0"
                }`}
              ></div>
              <div
                className={`absolute  w-full h-full flex justify-center items-center mx-auto text-white top-0 transition-all ease-out duration-200 ${
                  hoverFashion4 ? " scale-100" : "  scale-0"
                }`}
              >
                <AiFillInstagram className="w-6 h-6 text-[#FFFFFF]" />
              </div>
            </div>
            <div
              onMouseEnter={() => setHoverFashion5(true)}
              onMouseLeave={() => setHoverFashion5(false)}
              className="w-full relative cursor-pointer"
            >
              <Image
                src={img5}
                width={72.29}
                height={72.29}
                className="w-[72.29px] h-[72.29px]"
                alt="fashion"
              />
              <div
                className={`w-full top-0 absolute h-full mix-blend-multiply opacity-[0.5] bg-[#03221F] transition-all ease-out duration-200 ${
                  hoverFashion5 ? "block scale-100" : "hidden scale-0"
                }`}
              ></div>
              <div
                className={`absolute w-full h-full flex justify-center items-center mx-auto text-white top-0 transition-all ease-out duration-200 ${
                  hoverFashion5 ? "scale-100" : "  scale-0"
                }`}
              >
                <AiFillInstagram className="w-6 h-6 text-[#FFFFFF]" />
              </div>
            </div>
            <div
              onMouseEnter={() => setHoverFashion6(true)}
              onMouseLeave={() => setHoverFashion6(false)}
              className="w-full relative cursor-pointer"
            >
              <Image
                src={img6}
                width={72.29}
                height={72.29}
                className="w-[72.29px] h-[72.29px]"
                alt="fashion"
              />
              <div
                className={`w-full top-0 absolute h-full mix-blend-multiply opacity-[0.5] bg-[#03221F] transition-all ease-out duration-200 ${
                  hoverFashion6 ? "block scale-100" : "hidden scale-0"
                }`}
              ></div>
              <div
                className={`absolute  w-full h-full justify-center items-center mx-auto text-white flex top-0 transition-all ease-out duration-200 ${
                  hoverFashion6 ? "scale-100" : "  scale-0"
                }`}
              >
                <AiFillInstagram className="w-6 h-6 text-[#FFFFFF]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Follow Us end =========== */}
    </>
  );
};

export default ShopFilter;
