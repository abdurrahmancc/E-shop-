import React from "react";
import Features3 from "../features/Features3";
import ClientsCard1 from "../shared/cards/ClientsCard1";
import ClientsSlider from "./ClientsSlider";

const OurClients = () => {
  return (
    <div className="max-w-[1443px] relative container w-full mx-auto px-4 lg:px-10 2xl:px-0">
      <div className="pt-[182px]">
        <div className="flex items-center justify-center gap-[11px]">
          <div className="w-[91px] h-[1px] bg-primary"></div>
          <div className="text-[16px] leading-[24px] text-primary font-[600]">Testimonial</div>
          <div className="w-[91px] h-[1px] bg-primary"></div>
        </div>
        <h3 className="text-[38px] my-3 font-[600] leading-[50px] text-center text-[#031424]">
          What Our Client Say
        </h3>
        <p className="text-[16px] mx-auto max-w-[866px] leading-7 text-center text-[#323232]">
          Lorem ipsum dolor sit amet consectetur. Tincidunt egestas sed integer est libero urna. Ac
          habitasse dolor velit nunc quam sodales. Nullam donec eu faucibus velit dictum feugiat.
          Rhoncus.
        </p>
        <div className="min-h-[478px] mt-[60px] pb-[146px]">
          <ClientsSlider />
        </div>
      </div>
    </div>
  );
};

export default OurClients;
