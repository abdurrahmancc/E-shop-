import Image from "next/image";
import React from "react";
import img2 from "../../components/../assets/banner/smart-banner-1-1.png";
import img3 from "../../components/../assets/banner/smart-banner-1-2.png";
import img4 from "../../components/../assets/banner/smart-banner-1-3.png";
import img5 from "../../components/../assets/banner/smart-banner-1-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";
const { Fade } = require("react-reveal");

const SmartBannerSlider = () => {
  return (
    <>
      <Swiper
        id="smart-banner-swiper-slider"
        cssMode={true}
        navigation={false}
        autoplay={{
          delay: 100000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              width={1441}
              height={303}
              className={"w-full min-h-[200px] md:min-h-[240px]"}
              src={img2}
              alt="slider banner"
            />
            <div className="absolute top-5 md:top-[31px] left-4 sm:left-[37px]">
              <Fade top delay={100}>
                <h5 className="2xl:text-[44px] xl:text-[32px] md:text-[28px] md:leading-9 xl:leading-10  2xl:leading-[66px] font-[600] text-neutral text-[20px] leading-7">
                  Buy latest smart gadgets
                </h5>
              </Fade>
              <Fade top delay={100}>
                <p className="2xl:text-[24px] md:text-[16px] sm:text-sm text-xs  xl:text-lg mt-1 mb-[22px] leading-[20px] md:leading-[36px] text-neutral">
                  Lorem ipsum dolor sit amet consectetur. <br className="sm:hidden" /> Consectetur
                  enim
                </p>
              </Fade>
              <Fade bottom delay={100}>
                <button className="2xl:w-[123px] w-[80px] sm:w-[100px] bg-primary sm:h-[40px] h-[32px] font-[500] text-xs 2xl:h-[46px] bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate text-[#031424] sm:text-sm 2xl:text-[16px] rounded-[37px]">
                  Shop now
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              width={1441}
              height={303}
              className={"w-full min-h-[200px] md:min-h-[240px]"}
              src={img3}
              alt="slider banner"
            />
            <div className="absolute top-5 md:top-[31px] left-4 sm:left-[37px]">
              <Fade top delay={100}>
                <h5 className="2xl:text-[44px] xl:text-[32px] md:text-[28px] md:leading-9 xl:leading-10  2xl:leading-[66px] font-[600] text-neutral text-[20px] leading-7">
                  Buy latest smart gadgets
                </h5>
              </Fade>
              <Fade top delay={100}>
                <p className="2xl:text-[24px] md:text-[16px] sm:text-sm text-xs  xl:text-lg mt-1 mb-[22px] leading-[20px] md:leading-[36px] text-neutral">
                  Lorem ipsum dolor sit amet consectetur. <br className="sm:hidden" /> Consectetur
                  enim
                </p>
              </Fade>
              <Fade bottom delay={100}>
                <button className="2xl:w-[123px] w-[80px] sm:w-[100px] bg-primary sm:h-[40px] h-[32px] font-[500] text-xs 2xl:h-[46px] bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate text-[#031424] sm:text-sm 2xl:text-[16px] rounded-[37px]">
                  Shop now
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              width={1441}
              height={303}
              className={"w-full min-h-[200px] md:min-h-[240px]"}
              src={img4}
              alt="slider banner"
            />
            <div className="absolute top-5 md:top-[31px] left-4 sm:left-[37px]">
              <Fade top delay={100}>
                <h5 className="2xl:text-[44px] xl:text-[32px] md:text-[28px] md:leading-9 xl:leading-10  2xl:leading-[66px] font-[600] text-neutral text-[20px] leading-7">
                  Buy latest smart gadgets
                </h5>
              </Fade>
              <Fade top delay={100}>
                <p className="2xl:text-[24px] md:text-[16px] sm:text-sm text-xs  xl:text-lg mt-1 mb-[22px] leading-[20px] md:leading-[36px] text-neutral">
                  Lorem ipsum dolor sit amet consectetur. <br className="sm:hidden" /> Consectetur
                  enim
                </p>
              </Fade>
              <Fade bottom delay={100}>
                <button className="2xl:w-[123px] w-[80px] sm:w-[100px] bg-primary sm:h-[40px] h-[32px] font-[500] text-xs 2xl:h-[46px] bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate text-[#031424] sm:text-sm 2xl:text-[16px] rounded-[37px]">
                  Shop now
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              width={1441}
              height={303}
              className={"w-full min-h-[200px] md:min-h-[240px]"}
              src={img5}
              alt="slider banner"
            />
            <div className="absolute top-5 md:top-[31px] left-4 sm:left-[37px]">
              <Fade top delay={100}>
                <h5 className="2xl:text-[44px] xl:text-[32px] md:text-[28px] md:leading-9 xl:leading-10  2xl:leading-[66px] font-[600] text-neutral text-[20px] leading-7">
                  Buy latest smart gadgets
                </h5>
              </Fade>
              <Fade top delay={100}>
                <p className="2xl:text-[24px] md:text-[16px] sm:text-sm text-xs  xl:text-lg mt-1 mb-[22px] leading-[20px] md:leading-[36px] text-neutral">
                  Lorem ipsum dolor sit amet consectetur. <br className="sm:hidden" /> Consectetur
                  enim
                </p>
              </Fade>
              <Fade bottom delay={100}>
                <button className="2xl:w-[123px] w-[80px] sm:w-[100px] bg-primary sm:h-[40px] h-[32px] font-[500] text-xs 2xl:h-[46px] bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate text-[#031424] sm:text-sm 2xl:text-[16px] rounded-[37px]">
                  Shop now
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SmartBannerSlider;
