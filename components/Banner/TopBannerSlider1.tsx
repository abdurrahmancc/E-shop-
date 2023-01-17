import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import Image from "next/image";
import banner1 from "../../assets/banner/banner-1.jpg";
import banner2 from "../../assets/banner/banner-2.png";
import banner3 from "../../assets/banner/banner-3.png";
const { Fade } = require("react-reveal");

const TopBannerSlider1 = () => {
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
          <div className="relative">
            <Image
              src={banner1}
              height={577}
              width={1114}
              className={`w-[1114] min-h-[320px] lg:max-h-[577px] lg:min-h-[577px] h-[577px]`}
              alt="banner"
            />
            <div className="absolute top-0 h-full flex items-center md:pl-10 sm:pl-7 pl-5">
              <div className="text-start max-w-[580px]">
                <Fade left delay={300}>
                  <span className="text-secondary rounded-[36px] inline-block py-[3px] px-[15px] bg-primary text-xs leading-5 lg:text-sm lg:leading-[26px] font-[500] ">
                    Sale Top 20% OFF
                  </span>
                </Fade>
                <Fade top>
                  <h2 className="xl:text-[58px] text-2xl sm:text-[32px] sm:leading-[44px] md:text-[40px] md:leading-[52px] mt-2 text-start font-[600] xl:leading-[73px] text-[#313131] ">
                    Get High On Sound <br /> <span className="text-info">Quality</span>{" "}
                  </h2>
                </Fade>
                <Fade bottom delay={300}>
                  <p className="lg:text-[16px] text-xs  md:text-sm mb-5 lg:mb-10 lg:mt-4 mt-2 max-w-[320px] sm:max-w-full text-[#424242] md:leading-[26px] ">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper{" "}
                    <br className="xl:hidden sm:block hidden" /> enim sed{" "}
                    <br className="xl:block hidden" /> morbi integer felis ut tristique.
                  </p>
                </Fade>
                <Fade bottom delay={600}>
                  <button className="lg:h-[62px] lg:max-w-[159px] h-[44px] max-w-[110px] md:h-[52px] md:max-w-[130px] w-full flex items-center lg:text-[20px] lg:leading-[30px] text-[16px] md:text-lg font-[500] justify-center text-white bg-info bg-gradient-to-r from-[#027aea] to-[#2387e5] btn-animate">
                    Shop Now
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={banner2}
              height={577}
              width={1114}
              className={`w-[1114] min-h-[320px] lg:max-h-[577px] lg:min-h-[577px] h-[577px]`}
              alt="banner"
            />
            <div className="absolute top-0 h-full flex items-center md:pl-10 sm:pl-7 pl-5">
              <div className="text-start max-w-[580px]">
                <Fade left delay={300}>
                  <span className="text-secondary rounded-[36px] inline-block py-[3px] px-[15px] bg-primary text-xs leading-5 lg:text-sm lg:leading-[26px] font-[500] ">
                    Sale Top 20% OFF
                  </span>
                </Fade>
                <Fade top>
                  <h2 className="xl:text-[58px] text-2xl sm:text-[32px] sm:leading-[44px] md:text-[40px] md:leading-[52px] mt-2 text-start font-[600] xl:leading-[73px] text-[#313131] ">
                    Don&apos;t miss out on <br /> these{" "}
                    <span className="text-info"> discounts!</span>{" "}
                  </h2>
                </Fade>
                <Fade bottom delay={300}>
                  <p className="lg:text-[16px] text-xs  md:text-sm mb-5 lg:mb-10 lg:mt-4 mt-2 max-w-[320px] sm:max-w-full text-[#424242] md:leading-[26px] ">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper{" "}
                    <br className="xl:hidden sm:block hidden" /> enim sed{" "}
                    <br className="xl:block hidden" /> morbi integer felis ut tristique.
                  </p>
                </Fade>
                <Fade bottom delay={600}>
                  <button className="lg:h-[62px] lg:max-w-[159px] h-[44px] max-w-[110px] md:h-[52px] md:max-w-[130px] w-full flex items-center lg:text-[20px] lg:leading-[30px] text-[16px] md:text-lg font-[500] justify-center text-white bg-info bg-gradient-to-r from-[#027aea] to-[#2387e5] btn-animate">
                    Shop Now
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={banner3}
              height={577}
              width={1114}
              className={`w-[1114] min-h-[320px] lg:max-h-[577px] lg:min-h-[577px] h-[577px]`}
              alt="banner"
            />
            <div className="absolute top-0 h-full flex items-center md:pl-10 sm:pl-7 pl-5">
              <div className="text-start max-w-[580px]">
                <Fade left delay={300}>
                  <span className="text-secondary rounded-[36px] inline-block py-[3px] px-[15px] bg-primary text-xs leading-5 lg:text-sm lg:leading-[26px] font-[500] ">
                    Sale Top 20% OFF
                  </span>
                </Fade>
                <Fade top>
                  <h2 className="xl:text-[58px] text-2xl sm:text-[32px] sm:leading-[44px] md:text-[40px] md:leading-[52px] mt-2 text-start font-[600] xl:leading-[73px] text-[#313131] ">
                    A camera to fulfill <br /> your <span className="text-info"> dreams</span>{" "}
                  </h2>
                </Fade>
                <Fade bottom delay={300}>
                  <p className="lg:text-[16px] text-xs  md:text-sm mb-5 lg:mb-10 lg:mt-4 mt-2 max-w-[320px] sm:max-w-full text-[#424242] md:leading-[26px] ">
                    Lorem ipsum dolor sit amet consectetur. Ullamcorper{" "}
                    <br className="xl:hidden sm:block hidden" /> enim sed{" "}
                    <br className="xl:block hidden" /> morbi integer felis ut tristique.
                  </p>
                </Fade>
                <Fade bottom delay={600}>
                  <button className="lg:h-[62px] lg:max-w-[159px] h-[44px] max-w-[110px] md:h-[52px] md:max-w-[130px] w-full flex items-center lg:text-[20px] lg:leading-[30px] text-[16px] md:text-lg font-[500] justify-center text-white bg-info bg-gradient-to-r from-[#027aea] to-[#2387e5] btn-animate">
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

export default TopBannerSlider1;
