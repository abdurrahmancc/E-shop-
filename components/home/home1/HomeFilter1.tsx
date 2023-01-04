import React from "react";
import { Ratings5 } from "../../shared/Ratings/Ratings5";

interface Categories {
  label: string;
  value: string;
}

interface Prices {
  label: string;
  value: string;
}
interface Rating {
  label: string;
  value: number;
}
interface Status {
  label: string;
  value: string;
}

const categories: Categories[] = [
  { label: "Computer & Laptop (12)", value: "computer&Laptop" },
  { label: "Television & Video (34)", value: "television&Video" },
  { label: "Headphones (13)", value: "computer&Laptop" },
  { label: "Smartphones (09)", value: "headphones" },
  { label: "Camera & Photos (12)", value: "smartphones" },
  { label: "Smart Watches (32)", value: "smartWatches" },
  { label: "Video Games (21)", value: "videoGames" },
];

const ratings: Rating[] = [
  { label: "(08 Reviews)", value: 1 },
  { label: "(02 Reviews)", value: 2 },
  { label: "(04 Reviews)", value: 3 },
  { label: "(32 Reviews)", value: 4 },
  { label: "(18 Reviews)", value: 5 },
];

const prices: Prices[] = [
  { label: "$0 - $100", value: "$0 - $100" },
  { label: "$100 - $500", value: "$100 - $500" },
  { label: "$500 - $1000", value: "$500 - $1000" },
  { label: "Smartphones (09)", value: "headphones" },
  { label: "$1000 - $5000", value: "$5000 - $10000" },
];
const status: Status[] = [
  { label: "Stock in", value: "stockIn" },
  { label: "Pre Order", value: "preOrder" },
];

const HomeFilter1 = () => {
  const isLastCategory = categories.length - 1;
  const isLastRating = ratings.length - 1;
  const isLastPrice = prices.length - 1;
  const isLastStatus = status.length - 1;
  return (
    <>
      {/* =========== categories start ========== */}
      <div className="mt-6 w-full">
        <h4 className="text-[20px] pb-4 text-secondary leading-[30px] font-[500]">Categories</h4>
        <div className="">
          {categories.map((category, i) => (
            <div key={i} className={`form-control ${isLastCategory == i ? "" : "pb-3"}`}>
              <label className="label p-0 justify-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox w-[15px] h-[15px] checkbox-primary rounded-none "
                />
                <span className="label-text text-[#414141] text-sm leading-[22px] ">
                  {category?.label}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* =========== categories end ========== */}
      {/* =========== Prices start ========== */}
      <div className="mt-6">
        <h4 className="text-[20px] pb-4 text-secondary leading-[30px] font-[500]">Prices</h4>
        <div className="">
          {prices.map((price, i) => (
            <div key={i} className={`form-control ${isLastPrice == i ? "" : "pb-3"}`}>
              <label className="label p-0 justify-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox w-[15px] h-[15px] checkbox-primary rounded-none "
                />
                <span className="label-text text-[#414141] text-sm leading-[22px] ">
                  {price?.label}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* =========== Prices end ========== */}
      {/* =========== Rating start ========== */}
      <div className="mt-6">
        <h4 className="text-[20px] pb-4 text-secondary leading-[30px] font-[500]">Rating</h4>
        <div className="">
          {ratings.map((rating, i) => (
            <div key={i} className={`form-control ${isLastRating == i ? "" : "pb-3"}`}>
              <label className="label p-0 justify-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox w-[15px] h-[15px] checkbox-primary rounded-none "
                />
                <div className="flex w-full gap-2 items-center">
                  <div className="flex max-w-[78px] w-full justify-between">
                    <Ratings5 width="w-[14px]" height="h-[14px]" count={i + 1} />
                  </div>
                  <span className="label-text text-[#414141] text-sm leading-[22px] ">
                    {rating?.label}
                  </span>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* =========== Rating end ========== */}
      {/* =========== Status start ========== */}
      <div className="mt-6">
        <h4 className="text-[20px] pb-4 text-secondary leading-[30px] font-[500]">Status</h4>
        <div className="">
          {status.map((item, i) => (
            <div key={i} className={`form-control ${isLastStatus == i ? "" : "pb-3"}`}>
              <label className="label p-0 justify-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox w-[15px] h-[15px] checkbox-primary rounded-none "
                />
                <span className="label-text text-[#414141] text-sm leading-[22px] ">
                  {item?.label}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* =========== Status end ========== */}
    </>
  );
};

export default HomeFilter1;
