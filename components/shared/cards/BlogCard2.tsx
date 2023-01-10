import Image from "next/image";
import React from "react";
import { CgCalendarDates } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import blog1 from "../../../assets/blogs/blogs-2.1.png";

const BlogCard2 = () => {
  return (
    <div className="max-w-[558px]">
      <figure>
        <Image src={blog1} width={558} height={494} alt="blog image" />
      </figure>
      <h4 className="xl:text-[32px] lg:text-[24px] leading-[32px] mt-5 xl:mt-[30px] text-[#374043] xl:leading-[44px] font-[600]">
        10 Ways To Easily Grow Your Agency Business
      </h4>
      <div className="xl:mt-4 mt-3 flex items-center  gap-3">
        <div className="flex xl:gap-2 gap-1 items-center">
          <CiUser className="text-[16px] text-info" />
          <span className="xl:text-[16px] text-xs leading-6 text-[#585858]">Jason</span>
        </div>
        <div className="flex xl:gap-2 gap-1 items-center">
          <CgCalendarDates className="text-[16px] text-info" />
          <span className="xl:text-[16px] text-xs leading-6 text-[#585858]">June 12, 2022</span>
        </div>
        <div className="flex xl:gap-2 gap-1 items-center">
          <TiMessages className="text-[16px] text-info" />
          <span className="xl:text-[16px] text-xs leading-6 text-[#585858]">4 Comments</span>
        </div>
      </div>
      <p className="xl:text-[16px] text-sm my-5 leading-6 xl:leading-[30px] text-[#5E5E5E]">
        Lorem ipsum dolor sit amet consectetur. Risus nec massa adipiscing rutrum in nunc tortor.
        Sed eget lacus amet aliquam. Mauris tortor arcu consequat diam commodo nulla.
      </p>
      <button className="text-[#031424] bg-primary rounded-[8px] w-[115px] h-[44px] text-[16px] leading-6 font-[600]">
        Read More
      </button>
    </div>
  );
};

export default BlogCard2;
