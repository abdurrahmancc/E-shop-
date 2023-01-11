import React from "react";
import bg from "../../../assets/bg/newsletter-1.png";

const Newsletter3 = () => {
  return (
    <div
      id="newsletter-3"
      style={{ backgroundImage: `url(${bg.src})` }}
      className="bg-cover bg-secondary bg-no-repeat min-h-[236px] h-[236px]"
    >
      <div className="max-w-[1443px] h-full container w-full mx-auto px-4 lg:px-10 2xl:px-0">
        <div className="flex lg:flex-row flex-col h-full lg:justify-between justify-center items-center">
          <div>
            <h2 className="2xl:text-[38px] xl:text-[32px] lg:text-[24px] font-[600] text-neutral 2xl:leading-[50px] xl:leading-[44px] lg:leading-[36px] sm:text-[32px] sm:leading-[44px] text-center lg:text-start text-[24px] leading-[32px]">
              Subscribe Our Newsletter
            </h2>
            <p className="xl:text-[16px] lg:text-xs xl:pt-[14px] sm:text-[16px] text-center lg:text-start mt-2 text-neutral sm:leading-7 text-xs">
              {" "}
              Get E-mail updates about our latest shop and receive{" "}
              <span className="font-[600] text-primary">special offers.</span>
            </p>
          </div>
          <div className="2xl:max-w-[568px] mt-8 lg:mt-0 sm:max-w-[450px] max-w-[350px] flex h-[56px] 2xl:h-[65px] w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="input h-full rounded-none w-full text-black pl-[20px] sm:text-[16px] text-sm leading-[28px] placeholder:text-[#363636] bg-white rounded-l-[8px] focus:outline-none"
            />
            <button className="bg-primary bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate h-full sm:px-[26px] px-4 text-secondary 2xl:text-[20px] rounded-r-[8px] sm:text-[16px] text-sm leading-[28px]text-center font-[500]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter3;
