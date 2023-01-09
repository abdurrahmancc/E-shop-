import React from "react";
import OurTeamCard from "../shared/cards/OurTeamCard";

const OurTeam = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-[11px]">
        <div className="w-[91px] h-[1px] bg-primary"></div>
        <div className="text-[16px] capitalize leading-[24px] text-primary font-[600]">
          Our team
        </div>
        <div className="w-[91px] h-[1px] bg-primary"></div>
      </div>
      <h3 className="text-[38px] my-3 font-[600] leading-[50px] text-center text-[#031424]">
        Meet with Team
      </h3>
      <p className="text-[16px] mx-auto max-w-[866px] leading-7 text-center text-[#323232]">
        Lorem ipsum dolor sit amet consectetur. Tincidunt egestas sed integer est libero urna. Ac
        habitasse dolor velit nunc quam sodales. Nullam donec eu faucibus velit dictum feugiat.
        Rhoncus.
      </p>
      <div className="mt-[60px]">
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-3 justify-center lg:grid-cols-5 mx-auto gap-5 xl:gap-[30px] sm:max-w-[548px] md:max-w-[832px] lg:max-w-full">
          <OurTeamCard />
          <OurTeamCard />
          <OurTeamCard />
          <OurTeamCard />
          <OurTeamCard />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
