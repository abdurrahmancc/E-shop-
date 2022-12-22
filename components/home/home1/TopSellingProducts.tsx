import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import ProductCard1 from "../../shared/productCard/ProductCard1";
import React, { useState } from "react";
import SwiperCore, { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const TopSellingProducts = () => {
  return (
    <>
      <div className="w-full border-b border-[#AEAEAE]">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-[#031424]  lg:text-[28px] lg:leading-[42px] text-[24px] leading-8 font-[600]">
            Top Selling Products
          </h2>
          <div className="flex items-center gap-3">
            <button className="hover:text-white custom_prev transition-all duration-300 ease-linear hover:bg-info justify-center text-info border border-info rounded-full text-ing flex items-center gap-3 w-[36px] h-[36px] leading-[24px] font-[500]">
              <HiOutlineArrowLeft className="w-[13.71px] h-[13.71px] " />
            </button>
            <button className="hover:text-white custom_next transition-all duration-300 ease-linear hover:bg-info justify-center border text-info border-info rounded-full text-ing flex items-center gap-3 w-[36px] h-[36px] leading-[24px] font-[500]">
              <HiOutlineArrowRight className="w-[13.71px] h-[13.71px] " />
            </button>
          </div>
        </div>
        <div className="h-[6px] bg-primary w-[86.5px]"></div>
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
            500: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
            1650: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
          }}
        >
          <SwiperSlide>
            <ProductCard1 />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard1 />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard1 />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard1 />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard1 />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard1 />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard1 />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard1 />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard1 />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard1 />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard1 />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard1 />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default TopSellingProducts;
