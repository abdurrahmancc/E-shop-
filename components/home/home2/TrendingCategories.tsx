import React from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import SwiperCore, { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CategoriesCard from "../../shared/cards/CategoriesCard";
import { trendingCategoriesData } from "../../../database/data";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const TrendingCategories = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-[#031424] lg:text-[28px] lg:leading-[42px] sm:text-[24px] text-[18px] leading-8 font-[600]">
            Trending Categories
          </h2>
          <div className="flex items-center gap-3">
            <button className="hover:text-white custom_prev transition-all duration-300 ease-linear hover:bg-info justify-center text-info border border-info rounded-full text-ing flex items-center gap-3 md:w-[36px] md:h-[36px] w-7 h-7 leading-[24px] font-[500]">
              <HiOutlineArrowLeft className="w-[13.71px] h-[13.71px] " />
            </button>
            <button className="hover:text-white custom_next transition-all duration-300 ease-linear hover:bg-info justify-center text-info border border-info rounded-full text-ing flex items-center gap-3 md:w-[36px] md:h-[36px] w-7 h-7 leading-[24px] font-[500]">
              <HiOutlineArrowRight className="w-[13.71px] h-[13.71px]" />
            </button>
          </div>
        </div>
        <div className="flex w-full">
          <div className="h-[7px] bg-primary w-[86.5px]"></div>
          <div className="border-b w-full border-[#AEAEAE]"></div>
        </div>
      </div>
      <div className="mt-[50px] max-w-[550px] md:max-w-[816px] lg:max-w-full mx-auto w-full relative">
        <Swiper
          spaceBetween={16}
          slidesPerView={4}
          navigation={{
            nextEl: ".custom_next",
            prevEl: ".custom_prev",
          }}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 16,
            },
            1650: {
              slidesPerView: 6,
              spaceBetween: 16,
            },
          }}
        >
          {trendingCategoriesData &&
            trendingCategoriesData.map((category) => (
              <SwiperSlide key={category?._id}>
                <CategoriesCard category={category} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default TrendingCategories;
