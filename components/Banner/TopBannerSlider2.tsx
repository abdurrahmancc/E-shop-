import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import Image from "next/image";
import banner1 from "../../assets/banner/banner-2-1.png";
import banner2 from "../../assets/banner/banner-2-2.png";
import banner3 from "../../assets/banner/banner-2-3.png";

const { Fade } = require("react-reveal");

const TopBannerSlider2 = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <>
      <Swiper
        id="top-swiper-slider"
        cssMode={true}
        navigation={false}
        pagination={pagination}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative  rounded-[8px] w-full">
            <Image
              src={banner1}
              height={577}
              width={1114}
              className={`w-[1114] rounded-[8px] min-h-[320px] lg:max-h-[577px] lg:min-h-[577px] h-[577px]`}
              alt="banner"
            />
            <div className="absolute top-0 h-full flex items-center pl-5 md:pl-10">
              <div className="text-start max-w-[580px]">
                <Fade top delay={300}>
                  <span className="font-[600] inline-block text-[20px] text-[#313131] leading-[30px]">
                    Top Monthly Seller
                  </span>
                </Fade>
                <Fade left>
                  <h2 className="md:text-[42px] sm:text-[36px] text-[24px] leading-8 md:mt-7 capitalize sm:mt-4 mt-2 text-start font-[600] md:leading-[48px] sm:leading-[44px] text-[#313131] ">
                    <span className="text-primary">Top Headphone</span>
                    <br /> <span className="text-[#313131]">HAVIT HV-H2178D 3.5</span>{" "}
                  </h2>
                </Fade>
                <Fade bottom delay={300}>
                  <p className="sm:mt-5 mt-3 md:text-[16px] text-xs sm:text-sm mb-5 md:mb-10 md:leading-[26px] text-[#424242]">
                    Lorem ipsum dolor sit amet consectetur. <br /> Ullamcorper enim sed morbi.
                  </p>
                </Fade>
                <Fade bottom delay={600}>
                  <button className="md:w-[155px] sm:w-[120px] sm:h-[50px] w-[100px] h-[40px] bg-info text-sm md:text-[16px] leading-[24px]  text-white flex justify-center items-center font-[500] md:h-[56px] rounded-[30px] bg-gradient-to-r from-[#027aea] to-[#2387e5] btn-animate">
                    Shop Now
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative  rounded-[8px] w-full">
            <Image
              src={banner2}
              height={577}
              width={1114}
              className={`w-[1114] rounded-[8px] min-h-[320px] lg:max-h-[577px] lg:min-h-[577px] h-[577px]`}
              alt="banner"
            />
            <div className="absolute top-0 h-full flex items-center pl-5 md:pl-10">
              <div className="text-start max-w-[580px]">
                <Fade top delay={300}>
                  <span className="font-[600] inline-block text-[20px] text-[#313131] leading-[30px]">
                    Best of month
                  </span>
                </Fade>
                <Fade left>
                  <h2 className="md:text-[42px] sm:text-[36px] text-[24px] leading-8 md:mt-7 capitalize sm:mt-4 mt-2 text-start font-[600] md:leading-[48px] sm:leading-[44px] text-[#313131] ">
                    <span className="text-primary">VR System</span>
                    <br /> <span className="text-[#313131]">Meta Quest 128 GB</span>{" "}
                  </h2>
                </Fade>
                <Fade bottom delay={300}>
                  <p className="sm:mt-5 mt-3 md:text-[16px] text-xs sm:text-sm mb-5 md:mb-10 md:leading-[26px] text-[#424242]">
                    Lorem ipsum dolor sit amet consectetur. <br /> Ullamcorper enim sed morbi.
                  </p>
                </Fade>
                <Fade bottom delay={600}>
                  <button className="md:w-[155px] sm:w-[120px] sm:h-[50px] w-[100px] h-[40px] bg-info text-sm md:text-[16px] leading-[24px]  text-white flex justify-center items-center font-[500] md:h-[56px] rounded-[30px] bg-gradient-to-r from-[#027aea] to-[#2387e5] btn-animate">
                    Shop Now
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative  rounded-[8px] w-full">
            <Image
              src={banner3}
              height={577}
              width={1114}
              className={`w-[1114] rounded-[8px] min-h-[320px] lg:max-h-[577px] lg:min-h-[577px] h-[577px]`}
              alt="banner"
            />
            <div className="absolute top-0 h-full flex items-center pl-5 md:pl-10">
              <div className="text-start max-w-[580px]">
                <Fade top delay={300}>
                  <span className="font-[600] inline-block text-[20px] text-[#313131] leading-[30px]">
                    Best of month
                  </span>
                </Fade>
                <Fade left>
                  <h2 className="md:text-[42px] sm:text-[36px] text-[24px] leading-8 md:mt-7 capitalize sm:mt-4 mt-2 text-start font-[600] md:leading-[48px] sm:leading-[44px] text-[#313131] ">
                    <span className="text-primary">A camera to make </span>
                    <br /> <span className="text-[#313131]">the picture speak</span>{" "}
                  </h2>
                </Fade>
                <Fade bottom delay={300}>
                  <p className="sm:mt-5 mt-3 md:text-[16px] text-xs sm:text-sm mb-5 md:mb-10 md:leading-[26px] text-[#424242]">
                    Lorem ipsum dolor sit amet consectetur. <br /> Ullamcorper enim sed morbi.
                  </p>
                </Fade>
                <Fade bottom delay={600}>
                  <button className="md:w-[155px] sm:w-[120px] sm:h-[50px] w-[100px] h-[40px] bg-info text-sm md:text-[16px] leading-[24px]  text-white flex justify-center items-center font-[500] md:h-[56px] rounded-[30px] bg-gradient-to-r from-[#027aea] to-[#2387e5] btn-animate">
                    Shop Now
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopBannerSlider2;
