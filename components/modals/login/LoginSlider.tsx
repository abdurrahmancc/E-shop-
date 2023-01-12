import React, { useState } from "react";
import SwiperCore, { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Register from "./Register";
import Login from "./Login";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const LoginSlider = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <div>
      <input type="checkbox" onChange={() => {}} id="signUp" className="modal-toggle" />
      <label htmlFor="signUp" className="modal bg-[rgba(0,0,0,0.46)]   cursor-pointer">
        <label
          className="min-h-[643px] max-h-[677px] h-full lg:max-w-[564px] md:max-w-[500px] sm:max-w-[450px] max-w-[350px] w-full bg-none relative"
          htmlFor=""
        >
          <div className="relative max-w-[592px] md:max-w-[896px] lg:max-w-[1200px] mx-auto">
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              cssMode={true}
              navigation={{
                nextEl: ".custom_next",
                prevEl: ".custom_prev",
              }}
            >
              <SwiperSlide>
                <Login isLogin={isLogin} setIsLogin={setIsLogin} />
              </SwiperSlide>
              <SwiperSlide>
                <Register isLogin={isLogin} setIsLogin={setIsLogin} />
              </SwiperSlide>
            </Swiper>
          </div>
        </label>
      </label>
    </div>
  );
};

export default LoginSlider;
