import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";
import { useRouter } from "next/router";
import banner1 from "../../assets/banner/shop-banner-4.png";
import banner2 from "../../assets/banner/shop-banner-2.png";
import banner3 from "../../assets/banner/shop-banner-3.png";
const { Fade } = require("react-reveal");

const ShopBannerSlider = () => {
  const router = useRouter();
  return (
    <>
      <Swiper
        id="shop-banner-swiper-slider"
        cssMode={true}
        navigation={false}
        autoplay={{
          delay: 1000000,
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
            {router.query.id == "3" ? (
              <Image
                src={banner1}
                height={189}
                width={1440}
                className="min-h-[120px] md:min-h-[150px]"
                alt="banner"
              />
            ) : (
              <Image
                src={banner1}
                height={189}
                width={1146}
                className="min-h-[120px] md:min-h-[150px]"
                alt="banner"
              />
            )}
            <div className="absolute top-0 h-full w-full">
              <div className="flex flex-col pb-[23px] h-full justify-center pl-5 md:pl-[37px]">
                <Fade left>
                  <p className="md:text-[18px] text-[14px] leading-6 xl:mb-[3px] md:leading-[27px] text-primary">
                    Up To 30% Offer
                  </p>
                </Fade>
                <Fade top>
                  <h2 className="md:text-[24px] sm:text-[18px] text-[16px] leading-7 md:leading-[36px] font-[500] md:font-[600] text-[#ffffff]">
                    New Accessories Collection
                  </h2>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            {router.query.id == "3" ? (
              <Image
                src={banner2}
                height={189}
                width={1440}
                className="min-h-[120px] md:min-h-[150px]"
                alt="banner"
              />
            ) : (
              <Image
                src={banner2}
                height={189}
                width={1146}
                className="min-h-[120px] md:min-h-[150px]"
                alt="banner"
              />
            )}
            <div className="absolute top-0 h-full w-full">
              <div className="flex flex-col pb-[23px] h-full justify-center pl-5 md:pl-[37px]">
                <Fade left>
                  <p className="md:text-[18px] text-[14px] leading-6 xl:mb-[3px] md:leading-[27px] text-primary">
                    Up To 30% Offer
                  </p>
                </Fade>
                <Fade top>
                  <h2 className="md:text-[24px] sm:text-[18px] text-[16px] leading-7 md:leading-[36px] font-[500] md:font-[600] text-[#ffffff]">
                    New Accessories Collection
                  </h2>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            {router.query.id == "3" ? (
              <Image
                src={banner3}
                height={189}
                width={1440}
                className="min-h-[120px] md:min-h-[150px]"
                alt="banner"
              />
            ) : (
              <Image
                src={banner3}
                height={189}
                width={1146}
                className="min-h-[120px] md:min-h-[150px]"
                alt="banner"
              />
            )}
            <div className="absolute top-0 h-full w-full">
              <div className="flex flex-col pb-[23px] h-full justify-center pl-5 md:pl-[37px]">
                <Fade left>
                  <p className="md:text-[18px] text-[14px] leading-6 xl:mb-[3px] md:leading-[27px] text-primary">
                    Up To 30% Offer
                  </p>
                </Fade>
                <Fade top>
                  <h2 className="md:text-[24px] sm:text-[18px] text-[16px] leading-7 md:leading-[36px] font-[500] md:font-[600] text-[#ffffff]">
                    New Accessories Collection
                  </h2>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ShopBannerSlider;
