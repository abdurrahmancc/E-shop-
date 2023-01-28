import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import user1 from "../../../assets/users/comment-1.png";
import user2 from "../../../assets/users/comment-2.png";

const BlogComments = () => {
  return (
    <>
      <h4 className="text-[#031424] pb-4 font-[600] text-[28px] leading-[42px]">Comments (2)</h4>
      <div className="flex w-full">
        <div className="h-[6px] bg-primary w-[86.5px]"></div>
        <div className="border-b w-full border-[#AEAEAE]"></div>
      </div>
      <div>
        <div className="p-5 mt-[30px] flex-col sm:flex-row flex gap-5 sm:items-center bg-[#F5F5F5]">
          <figure>
            <Image src={user1} height={110} width={110} className={"min-w-[80px]"} alt="user" />
          </figure>
          <div className="max-w-[975px]">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="text-[20px] font-[500] leading-[30px] text-[#031424]">
                  Paul Rivera
                </h5>
                <span className="text-[12px] text-[#696969] leading-[18px]">28 Mar 2022</span>
              </div>
              <button className="text-[14px] flex items-center gap-2 text-[#000000] leading-[26px]">
                Reply <IoIosArrowForward />
              </button>
            </div>
            <p className="text-[14px] mt-[6px] text-[#424242] leading-[26px]">
              Lorem ipsum dolor sit amet consectetur. Enim netus lectus gravida mauris et malesuada
              imperdiet ut. Fringilla enim nunc erat sit sit amet nunc. Rhoncus aliquam bibendum
              parturient in cras. Porttitor purus sed vitae velit ultrices. Scelerisque interdum
              magn
            </p>
          </div>
        </div>
        <div className="mt-[30px] ml-[20px] sm:ml-[110px]">
          <div className="p-5 mt-[30px] flex-col sm:flex-row flex gap-5 sm:items-center bg-[#F5F5F5]">
            <figure>
              <Image src={user2} height={110} width={110} className={"min-w-[80px]"} alt="user" />
            </figure>
            <div className="max-w-[865px]">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-[20px] font-[500] leading-[30px] text-[#031424]">
                    Paul Rivera
                  </h5>
                  <span className="text-[12px] text-[#696969] leading-[18px]">28 Mar 2022</span>
                </div>
                <button className="text-[14px] flex items-center gap-2 text-[#000000] leading-[26px]">
                  Reply <IoIosArrowForward />
                </button>
              </div>
              <p className="text-[14px] mt-[6px] text-[#424242] leading-[26px]">
                Lorem ipsum dolor sit amet consectetur. Enim netus lectus gravida mauris et
                malesuada imperdiet ut. Fringilla enim nunc erat sit sit amet nunc. Rhoncus aliquam
                bibendum parturient in cras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogComments;
