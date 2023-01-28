import React from "react";
import ClientsCard1 from "../shared/cards/ClientsCard1";
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ClientsSlider = () => {
  return (
    <>
      <Swiper
        id="happy-client-slider"
        cssMode={true}
        navigation={false}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
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
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1650: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <ClientsCard1 />
        </SwiperSlide>
        <SwiperSlide>
          <ClientsCard1 />
        </SwiperSlide>
        <SwiperSlide>
          <ClientsCard1 />
        </SwiperSlide>
        <SwiperSlide>
          <ClientsCard1 />
        </SwiperSlide>
        <SwiperSlide>
          <ClientsCard1 />
        </SwiperSlide>
        <SwiperSlide>
          <ClientsCard1 />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ClientsSlider;
