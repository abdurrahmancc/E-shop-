import Image from "next/image";
import React from "react";
import user from "../../assets/users/user-1.png";
import { Rating5 } from "../shared/Ratings/Ratings";
import ReviewForm from "./ReviewForm";

const Reviews = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full gap-8">
      <div className="flex flex-col gap-y-6 lg:max-w-[775px]">
        <div className="bg-[#F8F8F8] p-[30px]">
          <div className="flex items-center gap-4">
            <Image
              src={user}
              height={55.57}
              width={55.57}
              className="w-[55.57px] h-[55.57px]"
              alt="user image"
            />
            <div className="flex items-center w-full justify-between">
              <div>
                <h5 className="text-[16px] leading-[24px] font-[500] text-[#000000] ">
                  Paul Rivera
                </h5>
                <p className="text-[12px] leading-[18px] font-[500] text-[#676767]">Designer</p>
              </div>
              <div className="flex gap-[1.6px]">
                <Rating5 />
              </div>
            </div>
          </div>
          <p className="text-[14px] mt-[12.43px] leading-[26px] text-[#3E3E3E]">
            Lorem ipsum dolor sit amet consectetur. Pharetra congue et odio mauris risus diam quam
            pulvinar. Sapien consequat massa mauris diam faucibus augue. Amet sed mattis in et
            gravida rhoncus vel sed. Felis dolor a ac amet donec semper. Vitae dictumst sit
            porttitor id nisi{" "}
          </p>
        </div>
        <div className="bg-[#F8F8F8] p-[30px]">
          <div className="flex items-center gap-4">
            <Image
              src={user}
              height={55.57}
              width={55.57}
              className="w-[55.57px] h-[55.57px]"
              alt="user image"
            />
            <div className="flex items-center w-full justify-between">
              <div>
                <h5 className="text-[16px] leading-[24px] font-[500] text-[#000000] ">
                  Paul Rivera
                </h5>
                <p className="text-[12px] leading-[18px] font-[500] text-[#676767]">Designer</p>
              </div>
              <div className="flex gap-[1.6px]">
                <Rating5 />
              </div>
            </div>
          </div>
          <p className="text-[14px] mt-[12.43px] leading-[26px] text-[#3E3E3E]">
            Lorem ipsum dolor sit amet consectetur. Pharetra congue et odio mauris risus diam quam
            pulvinar. Sapien consequat massa mauris diam faucibus augue. Amet sed mattis in et
            gravida rhoncus vel sed. Felis dolor a ac amet donec semper. Vitae dictumst sit
            porttitor id nisi{" "}
          </p>
        </div>
        <div className="bg-[#F8F8F8] p-[30px]">
          <div className="flex items-center gap-4">
            <Image
              src={user}
              height={55.57}
              width={55.57}
              className="w-[55.57px] h-[55.57px]"
              alt="user image"
            />
            <div className="flex items-center w-full justify-between">
              <div>
                <h5 className="text-[16px] leading-[24px] font-[500] text-[#000000] ">
                  Paul Rivera
                </h5>
                <p className="text-[12px] leading-[18px] font-[500] text-[#676767]">Designer</p>
              </div>
              <div className="flex gap-[1.6px]">
                <Rating5 />
              </div>
            </div>
          </div>
          <p className="text-[14px] mt-[12.43px] leading-[26px] text-[#3E3E3E]">
            Lorem ipsum dolor sit amet consectetur. Pharetra congue et odio mauris risus diam quam
            pulvinar. Sapien consequat massa mauris diam faucibus augue. Amet sed mattis in et
            gravida rhoncus vel sed. Felis dolor a ac amet donec semper. Vitae dictumst sit
            porttitor id nisi{" "}
          </p>
        </div>
      </div>
      <div className="border lg:max-w-[450px] xl:max-w-[593px] w-full p-5 border-[#D9D9D9]">
        <div>
          <h4 className="text-[20px] pb-4 leading-[30px] text-[#031424] font-[500]">
            Add a review
          </h4>
          <div className="flex w-full">
            <div className="h-[6px] bg-primary w-[86.5px]"></div>
            <div className="border-b w-full border-[#AEAEAE]"></div>
          </div>
          <div className="w-full">
            <ReviewForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
