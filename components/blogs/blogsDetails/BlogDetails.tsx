import Image from "next/image";
import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { TiMessages } from "react-icons/ti";
import { BlogsModel } from "../../../types/types";
import BlogSidebar from "../BlogSidebar";
import TopBlogDetails from "./TopBlogDetails";

type BlogType = {
  blog: BlogsModel;
};

const BlogDetails = ({ blog }: BlogType) => {
  return (
    <div className="flex mt-[50px] flex-col sm:flex-row gap-x-[30px] gap-y-[50px]">
      <div className="max-w-[1146px]">
        <TopBlogDetails blog={blog} />
        <div className="py-5 border-y flex items-center justify-between">
          <div className="flex gap-2 items-center border-[#C7C7C7]">
            <span className="text-[#031424] lg:text-[16px] text-sm font-[500] leading-[24px]">
              Tag:
            </span>
            <ul className="flex items-center gap-[5px] lg:text-[16px] text-sm leading-[24px]">
              <li>
                <a href="">Apple iMac,</a>
              </li>
              <li>
                <a href="">Apple PC,</a>
              </li>
              <li>
                <a href="">Apple Desktop</a>
              </li>
            </ul>
          </div>
          <div className="flex lg:gap-3 gap-[5px]">
            <div className="bg-[#3B5998] cursor-pointer flex justify-center items-center rounded-[32.86px] lg:w-[38px] lg:h-[38px] w-[28px] h-[28px]">
              <FaFacebookF className="text-[#ffffff] lg:text-[20px] text-[16px]" />
            </div>
            <div className="bg-[#1DA1F2] cursor-pointer flex justify-center items-center rounded-[32.86px] lg:w-[38px] lg:h-[38px] w-[28px] h-[28px]">
              <BsTwitter className="text-[#ffffff] lg:text-[20px] text-[16px]" />
            </div>
            <div className="bg-[#E60023] cursor-pointer flex justify-center items-center rounded-[32.86px] lg:w-[38px] lg:h-[38px] w-[28px] h-[28px]">
              <BsInstagram className="text-[#ffffff] lg:text-[20px] text-[16px]" />
            </div>
            <div className="bg-[#0077B5] cursor-pointer flex justify-center items-center rounded-[32.86px] lg:w-[38px] lg:h-[38px] w-[28px] h-[28px]">
              <SiMinutemailer className="text-[#ffffff] lg:text-[20px] text-[16px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:max-w-[264px] min-w-[264px] ">
        <BlogSidebar />
      </div>
    </div>
  );
};

export default BlogDetails;
