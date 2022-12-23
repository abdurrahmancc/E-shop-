import React from "react";

const Newsletter2 = () => {
  return (
    <div className="flex lg:flex-row flex-col h-full lg:justify-between justify-center items-center">
      <div>
        <h2 className="2xl:text-[38px] xl:text-[32px] lg:text-[24px] font-[600] text-neutral 2xl:leading-[50px] xl:leading-[44px] lg:leading-[36px] sm:text-[32px] sm:leading-[44px] text-center lg:text-start text-[24px] leading-[32px]">
          Subscribe Our Newsletter
        </h2>
        <p className="xl:text-[16px] lg:text-xs xl:pt-[14px] sm:text-[16px] text-center lg:text-start mt-2 text-neutral leading-7 text-xs">
          {" "}
          Get E-mail updates about our latest shop and receive{" "}
          <span className="font-[600] text-primary">special offers.</span>
        </p>
      </div>
      <div className="2xl:max-w-[568px] mt-8 lg:mt-0 sm:max-w-[450px] max-w-[350px] flex h-[56px] 2xl:h-[65px] w-full">
        <input
          type="text"
          placeholder="Enter your email"
          className="input h-full rounded-none w-full text-black pl-[20px] sm:text-[16px] text-sm leading-[28px] rounded-l-[8px] placeholder:text-[#363636] bg-white focus:outline-none"
        />
        <button className="bg-primary bg-gradient-to-r rounded-r-[8px] from-[#f9c536] to-[#f9c536] btn-animate h-full sm:px-[26px] px-4 text-[#031424] 2xl:text-[20px] sm:text-[16px] text-sm leading-[28px] text-center font-[500]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter2;
