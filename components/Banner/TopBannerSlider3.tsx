import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Image from "next/image";
import banner1 from "../../assets/banner/banner-3-1.png";
import { BsArrowRight } from "react-icons/bs";

const { Fade } = require("react-reveal");

const TopBannerSlider3 = () => {
  return (
    <>
      <Swiper
        id="top-swiper-slider-3"
        cssMode={true}
        navigation={{
          nextEl: ".custom_next",
          prevEl: ".custom_prev",
        }}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full">
            <Image
              src={banner1}
              height={758}
              width={1114}
              className={`w-full h-full min-h-[300px] md:min-h-[400px] 2xl:min-h-[758px]`}
              alt="banner"
            />
            <div className="absolute top-0 right-10 xl:right-[104px] h-full">
              <div className="flex gap-[10px] items-center flex-col justify-center h-full">
                <button className="w-[54.81px] custom_prev border rounded-full flex justify-center items-center opacity-[50%] hover:opacity-[100%] h-[54.81px]">
                  <BsArrowRight className="w-[21.92px] rounded-full text-[#FFFFFF] h-[21.92px]" />
                </button>
                <button className="w-[54.81px] border custom_next rounded-full flex justify-center items-center opacity-[50%] hover:opacity-[100%] h-[54.81px]">
                  <BsArrowRight className="w-[21.92px] rotate-180 rounded-full text-[#FFFFFF] h-[21.92px]" />
                </button>
              </div>
            </div>
            <div className="max-w-[1443px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
              <div className="absolute top-0 h-full flex items-center">
                <div className="text-start max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[580px]">
                  <Fade top delay={300}>
                    <span className="font-[500] py-2 bg-white px-6 rounded-[60px] inline-block text-[16px] text-[#313131] leading-[24px]">
                      BIG SAVING
                    </span>
                  </Fade>
                  <Fade left>
                    <h2 className="2xl:text-[68px] text-2xl lg:text-[50px] sm:text-[24px] md:text-[36px] mt-5 text-start font-[600] 2xl:leading-[79px] lg:leading-[60px] sm:leading-[32px] md:leading-[48px] capitalize text-[#FFFFFF] ">
                      Put your headphones on and relax
                    </h2>
                  </Fade>
                  <Fade bottom delay={300}>
                    <p className="md:text-[16px] text-sm leading-5 text-neutral mt-3 lg:mt-5 mb-5 lg:mb-10 md:leading-[26px]">
                      Lorem ipsum dolor sit amet consectetur. Ullamcorper{" "}
                      <br className="lg:hidden sm:block hidden" /> enim sed morbi integer felis ut
                      tristique.
                    </p>
                  </Fade>
                  <Fade bottom delay={600}>
                    <button className="xl:w-[189px] w-[120px] text-[14px] md:w-[150px] font-[500] xl:text-[20px] md:text-[18px] leading-[30px] bg-gradient-to-r from-[#0881f3] to-[#0881f3] btn-animate rounded-[48px] xl:h-[62px] h-[46px] md:h-[50px] bg-info text-neutral ">
                      Shop Now
                    </button>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopBannerSlider3;
